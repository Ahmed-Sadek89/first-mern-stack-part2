import { apiLink } from "../../Assets/env";
import axios from "axios";
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const usePaymentHook = () => {
    // All required Hooks
    // stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    // states for loading and error payments
    const [ paymentProccessing , setPaymentProccessing ] = useState(false);
    const [ paymentErrorMSG , setPaymentErrorMSG ] = useState('');

    // navigation hook
    const navigate = useNavigate();

    // consoles
    console.log('paymentProccessing ',  paymentProccessing);
    console.log('paymentErrorMSG ' ,paymentErrorMSG);
    console.log(stripe);
  
    // on submit payment
    const handlePayment = async (e) => {

        // get all values from all inputs
        e.preventDefault();
        const billing_details = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: {
                city: e.target.city.value,
                line1: e.target.address.value,
                state: e.target.state.value,
                postal_code: e.target.zip.value
            }
        };
        setPaymentProccessing(true)

        // put all payment data in paymentMethod
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details
        });
        console.log(paymentMethod ? {paymentMethod} : null);
        

        // make your API payment request if no error
        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    `${apiLink}/api/checkout/payment`,
                        {
                        amount: 999,
                        id: id,
                        }
                );
                if (response.data.success) {
                    setPaymentErrorMSG('')
                    setPaymentProccessing(true)
                    navigate('/success')
                }
            } catch (error) {
                setPaymentErrorMSG(error.message)
                setPaymentProccessing(false)
            }
        } else {
            console.log(error.message);
            setPaymentErrorMSG(error.message)
            setPaymentProccessing(false)
        }
    };

    // make style for CardElement
    const iframeStyles = {
        base: {
          border: "1px solid gray",
          fontSize: "16px",
          iconColor: "#fff",
          "::placeholder": {
            color: "#fff"
          }
        },
        invalid: {
          iconColor: "#eb1c26",
          color: "#eb1c26"
        },
        complete: {
          iconColor: "#248a1e"
        }
      };
      const cardElementOpts = {
        iconStyle: "solid",
        style: iframeStyles,
      };

  return {
      stripe,
      paymentProccessing,
      paymentErrorMSG,
      handlePayment,
      cardElementOpts,
      CardElement
  }
}

export default usePaymentHook