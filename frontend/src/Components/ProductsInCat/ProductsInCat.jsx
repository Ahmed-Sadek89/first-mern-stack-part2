import {memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ItemsLoading from '../../Assets/ItemsLoading/ItemsLoading';


const ProductsInCat = ({
  products, 
  catName, 
  filterdColorAndSize, 
  sortingData,
}) => {
  console.log('hello i am Products components');
  
  const {loading, data, error} = products;
  const [firstFilteredData, setFirstFilteredData ] = useState([])
  
  useEffect(() => {
    catName &&
    setFirstFilteredData(
      data?.products.filter((item) =>
        Object.entries(filterdColorAndSize).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [data?.products, catName, filterdColorAndSize]);

  useEffect(() => {
    {/*error is here */}
    if(sortingData === 'asc'){
      setFirstFilteredData(
        prev => {return prev?.sort((a, b) => b.price - a.price)}
      )
    } else if(sortingData === 'desc'){
      setFirstFilteredData(
        prev => {return prev?.sort((a, b) => a.price - b.price)}
      )
    } else {
      setFirstFilteredData(
        prev => {return prev?.sort((a, b) => b.createdAt - a.createdAt)}
      )
    }
  }, [sortingData, firstFilteredData])
  console.log(firstFilteredData);
  return (
    <div className='productsInCat'>
        <div className="container">
        {
          loading && <div className='loadingContent'><ItemsLoading /></div>
        }
          <div className="productsContent">
            {
              firstFilteredData?.length !== 0 ?
              firstFilteredData?.map(index => (
                <div className='content' key={index._id}>
                  <div className="productShow">
                    <img src={index.img} alt={index.title} />
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
              <h2 className='noProducts'>no products </h2>
            }
            {
              error && <h3 className='errorMSG'>something went error...</h3>
            }
          </div>
        </div>
    </div>
  )
}

export default memo(ProductsInCat)
