import {memo} from 'react'
import { ItemColor } from './Styles'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useNavigate } from 'react-router-dom';

const CartComponent = () => {
    console.log('hello i am CartComponent components');
    const navigate = useNavigate()
    return (
        <div className='cart'>
            <div className="container">
                <h2>Your bag</h2>
                <div className="cartBtnslinks">
                    <button className='continue' onClick={() => navigate('/')}>
                        continue shopping
                    </button>
                    <div className="links">
                        <span>shopping bag(2)</span>
                        <span>your watchlist(0)</span>
                    </div>
                    <button className='checkout' onClick={() => navigate('/pay')}>
                        checkout now
                    </button>
                </div>
                <div className="cartData">
                    <div className="cartItems">
                        <div className="cartItemContent">
                            <div className="cartImg">
                                <img 
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" 
                                    alt='img'
                                />
                            </div>
                            <div className="cartInfo">
                                <p><b>product: </b>JESSIE THUNDER SHOES</p>
                                <p><b>ID: </b>93813718293</p>
                                <ItemColor className='itemColor' color="black"></ItemColor>
                                <p><b>Size:</b> 37.5</p>
                            </div>
                            <div className="cartOption">
                                <div className="chooseCount">
                                    <button>
                                        <AddIcon />
                                    </button>
                                    <span>2</span>
                                    <button>
                                        <RemoveIcon />
                                    </button>
                                </div>
                                <h3><b>$ </b>30</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="cartItemContent">
                            <div className="cartImg">
                                <img 
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" 
                                    alt='img'
                                />
                            </div>
                            <div className="cartInfo">
                                <p><b>product: </b>JESSIE THUNDER SHOES</p>
                                <p><b>ID: </b>93813718293</p>
                                <ItemColor className='itemColor' color="black"></ItemColor>
                                <p><b>Size:</b> 37.5</p>
                            </div>
                            <div className="cartOption">
                                <div className="chooseCount">
                                    <button>
                                        <AddIcon />
                                    </button>
                                    <span>2</span>
                                    <button>
                                        <RemoveIcon />
                                    </button>
                                </div>
                                <h3><b>$ </b>30</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="cartItemContent">
                            <div className="cartImg">
                                <img 
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" 
                                    alt='img'
                                />
                            </div>
                            <div className="cartInfo">
                                <p><b>product: </b>JESSIE THUNDER SHOES</p>
                                <p><b>ID: </b>93813718293</p>
                                <ItemColor className='itemColor' color="black"></ItemColor>
                                <p><b>Size:</b> 37.5</p>
                            </div>
                            <div className="cartOption">
                                <div className="chooseCount">
                                    <button>
                                        <AddIcon />
                                    </button>
                                    <span>2</span>
                                    <button>
                                        <RemoveIcon />
                                    </button>
                                </div>
                                <h3><b>$ </b>30</h3>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="cartSummary">
                        <h4>order summary</h4>
                        <div className="orderDetail">
                            <span>subtotal</span>
                            <span>$ 80</span>
                        </div>
                        <div className="orderDetail">
                            <span>estimated shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className="orderDetail">
                            <span>shipping discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className="orderDetail">
                            <h5>total</h5>
                            <h5>$ 80</h5>
                        </div>
                        <button onClick={() => navigate('/pay')}>
                            checkout now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(CartComponent)