import { logo } from '../../assets/images/index';
import { NavLinks } from '../../Constants/index';
import './Navbar.scss';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <img src={logo} alt="Agon" />
        <ul className={toggle ? 'active' : ''}>
          {NavLinks.map((nav) => (
            <li key={nav.id}><a href={`#${nav.title}`}>{nav.title}</a></li>
          ))}
        </ul>
        <a className='nav-btn' href='#About'>Get Started</a>
      <div className={`bars ${toggle ? 'active' : ''}`} onClick={
        () => {
          setToggle(!toggle)
        }
      }>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar