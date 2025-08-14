import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import "../App.css"


function Sidebar() {

  return (
    <Menu customBurgerIcon={<img src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/mobile_toggle.svg" />} className='menu'>
      <h1 className='heading'>Category</h1>
      <Link className="menu-item" href="">Most Popular Retailers</Link>
      <Link className="menu-item" href="">Retailers by Category</Link>
      <Link className="menu-item" href="">Top Product Deals</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" href="">Mobiles</Link>
      <Link className="menu-item" href="">Headphones</Link>
      <Link className="menu-item" href="">Laptops</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" href="">Men Fashion</Link>
      <Link className="menu-item" href="">Women Fashion</Link>
      <Link className="menu-item" href="">Men Shoes</Link>
      <Link className="menu-item" href="">Women shoes</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" href="">Beauty</Link>
      <Link className="menu-item" href="">Grocery</Link>
      <Link className="menu-item" href="">Diapers</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" href="">Sell all Categories</Link>

      <hr className='horizontal-line' />

      <Link className="menu-item" href="">All Stores</Link>
      <Link className="menu-item" href="">All Brands</Link>
      <Link className="menu-item" href="">All Categories</Link>

    </Menu>
  );
};


export default Sidebar