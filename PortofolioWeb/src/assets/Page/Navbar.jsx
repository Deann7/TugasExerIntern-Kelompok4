import { useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const content = <>
    <div className="bg-blue-950 w-full flex flex-row drop-shadow-2xl border-b-slate-700 border-b-2 border-opacity-50 absolute">
        <ul>
          <Link spy={true} smooth={true} to="Home">
            <li className="text-2xl font-bold text-blue-100 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:bg-blue-900 duration-300 p-5">
            Home
            </li>
          </Link>
        </ul>
        <ul>
          <Link spy={true} smooth={true} to="AboutMe">
            <li className="text-2xl font-bold text-blue-100 p-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:bg-blue-900 duration-300">
            About Me
            </li>
          </Link>
        </ul>
        <ul>
          <Link spy={true} smooth={true} to="ContactMe">
            <li className="text-2xl font-bold text-blue-100 p-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:bg-blue-900 duration-300">
            Contact
            </li>
          </Link>
        </ul>
      </div>
  </>
 return(
    <nav>
      <div className="bg-blue-950 w-full flex flex-row drop-shadow-2xl border-b-slate-700 border-b-2 border-opacity-50 absolute">
        <ul>
          <Link spy={true} smooth={true} to="Home">
            <li className="text-2xl font-bold text-blue-100 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:bg-blue-900 duration-300 p-5">
            Home
            </li>
          </Link>
        </ul>
        <ul>
          <Link spy={true} smooth={true} to="AboutMe">
            <li className="text-2xl font-bold text-blue-100 p-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:bg-blue-900 duration-300">
            About Me
            </li>
          </Link>
        </ul>
        <ul>
          <Link spy={true} smooth={true} to="ContactMe">
            <li className="text-2xl font-bold text-blue-100 p-5 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:bg-blue-900 duration-300">
            Contact
            </li>
          </Link>
        </ul>
        <div>
          {click && content}
        </div>
      </div>
    </nav>  
 )   
}

export default Navbar