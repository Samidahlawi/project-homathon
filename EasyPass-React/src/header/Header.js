import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
     {/* <Link to={`/employees/${user._id}/new`}>Create a New User</Link> */}
    <Link to="/employees">الموظفين</Link>
    <Link to="/change-password">تغيير الرقم السري</Link>
    <Link to="/sign-out">تسحيل الخروج</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">تسحيل حساب جديد</Link>
    <Link to="/sign-in">تسحيل الدخول</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">الصفحة الرئيسية</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>EasyPass</h1> 
    <nav>
      { user && <span>مرحباً, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
