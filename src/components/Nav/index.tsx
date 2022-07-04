import "./style.css";
const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a href='/'>React App</a>
      </li>
      <li className='nav-item'>
        <a href='/vue'>Vue App</a>
      </li>
      <li className='nav-item'>
        <a href='/angular'>Angular App</a>
      </li>
    </ul>
  );
};

export default Nav;
