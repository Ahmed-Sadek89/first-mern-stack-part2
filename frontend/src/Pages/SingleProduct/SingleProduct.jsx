import {memo} from 'react'
import Announcement from '../../Components/Announcement/Announcement'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'
import SADEK from '../../Components/SADEK/SADEK'
import OneProduct from '../../Components/OneProduct/OneProduct'

const SingleProduct = () => {
  console.log('hello i am SingleProduct page');

  return (
    <>
        <Navbar />
        <Announcement />
    
        <OneProduct />

        <Newsletter />
        <Footer />
        <SADEK />
    </>
  )
}

export default memo(SingleProduct)