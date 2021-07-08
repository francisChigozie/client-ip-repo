import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }

  return (
    <div>
        <nav>
            <Link style={navStyle} to="/home"><h3>Logo(Home)</h3></Link>
            <ul className="nav-link">
                <Link style={navStyle} to="/about" >
                    <li>About Us</li>
                </Link>
                <Link style={navStyle} to="/showIP" >
                    <li>Client IP</li>
                </Link>
                <Link style={navStyle} to="/news" >
                    <li>Hacker News</li>
                </Link>
            </ul>
        </nav>
      
    </div>
  );
}
export default Nav;