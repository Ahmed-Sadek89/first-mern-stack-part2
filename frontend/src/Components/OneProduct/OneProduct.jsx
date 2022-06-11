import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { memo, useState } from 'react';
import { SpanColor } from './Styles';

const OneProduct = ({productState}) => {
    console.log('hello i am OneProduct components');
    const {loading, data, error} = productState
    const {product} = data ? data : {} 
    console.log({loading, product, error});
    
    // setState and its fn
    
    
    return (
        <div className='oneProduct'>
            <div className="container">
                {
                product &&
                <div className="productContent">
                    <div className="productImg">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="productInfo">
                        <h2>{product.title}</h2>
                        <p className="desc">
                            {product.desc}
                        </p>
                        <p className="price">$ {product.price}</p>
                        <div className="productFiltering1">
                            <div className="colorFiltering">
                                <span className='titleColor'>color</span>
                                {
                                    product?.color.map(i => (
                                        <SpanColor
                                            className='spanColor' 
                                            key={i} 
                                            color={i} 
                                        />
                                    ))
                                }
                            </div>
                            <div className="sizefiltering">
                                <span>Size</span>
                                <select>
                                {
                                    product?.size.map(i => (
                                        <option key={i}>{i}</option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                        <div className="productFiltering2">
                            <div className="chooseCount">
                                <button>
                                    <AddIcon />
                                </button>
                                <input/>
                                <button>
                                    <RemoveIcon />
                                </button>
                            </div>
                            <button className='add'>
                                add to cart
                            </button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default memo(OneProduct)