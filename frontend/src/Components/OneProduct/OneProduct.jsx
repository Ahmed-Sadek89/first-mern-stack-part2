import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { memo } from 'react';
import { SpanColor } from './Styles';

const OneProduct = () => {
 console.log('hello i am OneProduct components');

  return (
    <div className='oneProduct'>
        <div className="container">
            <div className="productContent">
                <div className="productImg">
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="productImg"/>
                </div>
                <div className="productInfo">
                    <h2>Denim Jumpsuit</h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </p>
                    <p className="price">$ 20</p>
                    <div className="productFiltering1">
                        <div className="colorFiltering">
                            <span className='titleColor'>color</span>
                            <SpanColor className='spanColor' color='black'></SpanColor>
                            <SpanColor className='spanColor' color='darkblue'></SpanColor>
                            <SpanColor className='spanColor' color='gray'></SpanColor>
                        </div>
                        <div className="sizefiltering">
                            <span>Size</span>
                            <select>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
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
        </div>
    </div>
  )
}

export default memo(OneProduct)