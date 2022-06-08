import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useProductsInCatHook from '../../Hooks/useProductsInCatHook';
import { getAllProductsInCat } from '../../Redux/API_Slice/ProductsInCat.slice';
import ProductsInCat from '../ProductsInCat/ProductsInCat';

const ProductFilter = () => {
  console.log('hello i am ProductFilter components');
  const dispatch = useDispatch()
  const productsInCatState = useSelector(state => state.productsInCat);
  
  const location = useLocation();
  const catName = location.pathname.split('/')[2];
  useEffect(() => {
    dispatch(getAllProductsInCat(catName))
  }, [dispatch, catName])
  console.log(catName);
  console.log(productsInCatState);
  return (
    <>
      <div className='productFilter'>
        <div className="container">
            <h2>{catName}</h2>
            <div className="filterOptions">
              <div className="filterDetails">
                <span>filter products</span>
                <div className="select">
                  <select className='colorSelect'>
                    <option disabled >
                      Color
                    </option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                  </select>
                  <select>
                    <option disabled >
                      Size
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
              <div className="filterSort">
                <span>sort products</span>
                <select>
                  <option >Newest</option>
                  <option>Price (asc)</option>
                  <option>Price (desc)</option>
                </select>
              </div>
            </div>
        </div>
      </div>
      <ProductsInCat
        products={productsInCatState}
        catName={catName}
      />
    </>
  )
}

export default memo(ProductFilter)
