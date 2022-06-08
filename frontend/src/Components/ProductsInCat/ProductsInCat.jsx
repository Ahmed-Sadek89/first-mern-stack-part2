import {memo } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { popularProducts} from '../../Assets/Data'


const ProductsInCat = ({products, catName}) => {
  console.log('hello i am Products components');
  
  const {loading, data, error} = products;
  
  return (
    <div className='products'>
        <div className="container">
          <div className="productsContent">
            {
              data?.count != 0 ?
              data?.products.map(index => (
                <div className='content' key={index._id}>
                  <div className="productShow">
                    <img src={index.img} alt={index._id} />
                    <div className="productBtn">
                      <div className="icons">
                        <ShoppingCartOutlinedIcon/>
                      </div>
                      <div className="icons">
                        <Link to={`/product/${index._id}`}>
                          <SearchOutlinedIcon/>
                        </Link>
                      </div>
                      <div className="icons">
                        <FavoriteBorderOutlinedIcon/>
                      </div>
                    </div>
                  </div>
                </div>
              )) : 
              <h2>no products in {catName}</h2>
            }
          </div>
        </div>
    </div>
  )
}

export default memo(ProductsInCat)
