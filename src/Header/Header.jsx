import {Link} from 'react-router-dom'
const Header = () =>
{
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to='/admin/dashboard'>Dashboard</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/login'>Login</Link>
      <Link to='/order'>My Orders</Link>
      <Link to='/blog'>Blog</Link>
    </nav>
  )
}
export default Header;