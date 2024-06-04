import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Header = () => {

return (

<>
<header>
                    <h1>GitHub Student List</h1>
                    <nav>
                        <div className='navbar'>
                            <div className='nav-links'>
                            <Link to="/home" className='nav-links'>Home</Link>
                            </div>
                            <div className='nav-links'>
                            <Link to="/about" className='nav-links'>About</Link>
                            </div>
                            <div className='nav-links'>
                            <Link to="/students" className='nav-links'>Students</Link>
                            </div>
                        </div>
                    </nav>
            </header>
</>

)


}

export default Header