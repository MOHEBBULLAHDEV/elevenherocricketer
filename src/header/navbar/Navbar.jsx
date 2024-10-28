
import PropTypes from 'prop-types';
import logo from "../../assets/images/logo.png";
import coin from "../../assets/images/dollar.png";


const Navbar = ({currentBalance}) => {
  return (
    <div className="navbar">
    <div className="navbar-start">
      <a className="text-xl"><img src={logo}></img></a>
    </div>
    <div className="navbar-end">
    <ul className="menu menu-horizontal px-1 text-lg">
        <li><a>Home</a></li>
        <li>
        <a>Fixture</a>
        </li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
      <span className="px-8 ml-4 py-1 border border-black rounded-md flex gap-2 text-xl font-bold items-center">{currentBalance} Coin <img className='w-5 h-5' src={coin} alt="" /></span>
    </div>
  </div>
  )
}

Navbar.propTypes = {}

export default Navbar