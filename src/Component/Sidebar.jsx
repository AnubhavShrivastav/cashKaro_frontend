import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import "../App.css"


function Sidebar() {

  return (
    <Menu customBurgerIcon={<img src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/mobile_toggle.svg" />} className='menu'>
      <h1 className='heading'>Category</h1>
      <Link className="menu-item" to="/">Most Popular Retailers</Link>
      <Link className="menu-item" to="/">Retailers by Category</Link>
      <Link className="menu-item" to="/">Top Product Deals</Link>

      <hr className='horizontal-line' /> 

      <Link className="menu-item" to="/">Mobiles</Link>
      <Link className="menu-item" to="/">Headphones</Link>
      <Link className="menu-item" to="/">Laptops</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" to="/">Men Fashion</Link>
      <Link className="menu-item" to="/">Women Fashion</Link>
      <Link className="menu-item" to="/">Men Shoes</Link>
      <Link className="menu-item" to="/">Women shoes</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" to="/">Beauty</Link>
      <Link className="menu-item" to="/">Grocery</Link>
      <Link className="menu-item" to="/">Diapers</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" to="/">Sell all Categories</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" to="/">All Stores</Link>
      <Link className="menu-item" to="/">All Brands</Link>
      <Link className="menu-item" to="/">All Categories</Link>

    </Menu>
  );
};


export default Sidebar