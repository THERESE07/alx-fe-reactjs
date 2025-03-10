import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    display: 'flex',
    gap: '20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
