import React from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { FaPersonBreastfeeding } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-gray-500/10 hidden md:block'>
                <ul className='flex justify-between w-9/12 mx-auto py-5'>
                    <li>Budget friendly</li>
                    <li> No. 1 in Europe</li>
                    <li>On your first order</li>
                    <li className='bg-red-500  rounded-full px-2 py-1'> 30% OFF</li>
                    <li>For all products buy now get the office</li>
                    <li>
                        user Friendly
                    </li>
                    <li>24/7 Service</li>

                </ul>
            </nav>
            <div className="navbar md:w-9/12 mx-auto  shadow-sm py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src='../../public/Materiel/Frame.gif' alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex bg-gray-500/10 rounded-full ">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About us</a></li>
                        <li>
                            <details>
                                <summary>Service</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>White label </a></li>
                        <li><a>Contact us </a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <span><BsCartCheck size={25} /></span>
                    <span><FaPersonBreastfeeding size={25} />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Navbar;