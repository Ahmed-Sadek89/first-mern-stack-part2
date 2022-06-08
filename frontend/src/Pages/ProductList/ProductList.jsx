import {memo} from 'react'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import ProductFilter from '../../Components/ProductFilter/ProductFilter'
// import Products from '../../Components/Products/Products'
import SADEK from '../../Components/SADEK/SADEK'

const ProductList = () => {
  console.log('hello i am ProductList page');
  return (
    <>
      <Navbar />
      <Announcement />

      <ProductFilter/>
      {/* <Products /> this component is inside ProductFilter components */}

      <Newsletter />
      <Footer />
      <SADEK />
    </>
  )
}

export default memo(ProductList)