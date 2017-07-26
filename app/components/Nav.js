import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/battle'> Battle </Link>
        </li>
        <li>
          <Link to='/items'> Items </Link>
        </li>
      </ul>
    </nav>
  )
}

module.exports= Nav;
