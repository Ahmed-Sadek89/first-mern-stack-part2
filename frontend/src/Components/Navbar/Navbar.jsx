import { Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { memo } from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  console.log('hello i am Header components');
  return (
    <div className='navbar container'>
        <div className="part1">
          <select>
            <option>en</option>
            <option>ar</option>
          </select>
          <div className='search'>
            <input type='text' placeholder='Search..'/>
            <SearchIcon className='SearchIcon'/>
          </div>
        </div>
        <div>
          <Link to='/' className="part2">sadek.</Link>
        </div>
        <div className="part3">
          <button>
            <Link to='/register'>register</Link>
          </button>
          <button>
            <Link to='/login'>login</Link>
          </button>
          <Link to='/cart'>
            <Badge
              badgeContent={4} 
              color="primary" 
              className='badge' 
              overlap="rectangular"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </div>
    </div>
  )
}

export default memo(Header)