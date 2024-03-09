import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListUser from '../ListUser/ListUser';
import CreateUser from '../CreateUser/CreateUser';
import EditUser from '../EditUser/EditUser';

const NavMenu = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="user/list">List User</Link>
          </li>
          <li>
            <Link to="user/create">Add User</Link>
          </li>
          <li>
            <Link to="user/edit">Edit User</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path="user/list" element={<ListUser />} />
      <Route path="user/create" element={<CreateUser />} />
      <Route path="user/:id/edit" element={<EditUser />} />
    </Routes>
    </BrowserRouter>

  )
}

export default NavMenu