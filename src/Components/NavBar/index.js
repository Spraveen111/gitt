
import './index.css'

function NavBar() {
  return (
    <nav className='Navar'>
        <div>
      <ul className='mainContainer'> 
        <li className='gap_between_lists'>
          Home
        </li>
        <li className='gap_between_lists'>
         About
        </li>
        <li className='gap_between_lists'>
          Schedules
        </li>
        <li className='gap_between_lists'>
          members
        </li>
        <li className='gap_between_lists'>
          Price
        </li>
      </ul>
      </div>
      <div className='navBar_Container'>
        <h1 className='offers'>Offers</h1>
        <button type='button' className='courses'>Courses</button>
      </div>
    </nav>
  );
}

export default NavBar;
