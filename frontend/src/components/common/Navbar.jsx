import React, { lazy, useEffect, useState } from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Logo } from '../../assets';
import { NavbarLinks } from '../../data';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ProfileDropDown } from '../core/auth';
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/apis';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector('GET', categories.CATEGORIES_API);
      setSubLinks(result.data.data);
      console.log(result.data.data);
    } catch (err) {
      console.log('Could Not the fetch category list', err.message);
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className=" flex w-11/12 max-w-maxContent items-center justify-between text-white">
        <Link to={'/'}>
          <img src={Logo} alt="" width={160} height={42} loading="lazy" />
        </Link>
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => {
              return (
                <li className="" key={index}>
                  {link.title === 'Catalog' ? (
                    <div className="relative flex  items-center gap-2 group ">
                      <p>{link.title}</p>
                      <IoIosArrowDown />
                      <div className=" invisible absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[20%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]">
                        <div
                          className="absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded bg-richblue-5 
                        translate-y-[-30%]"
                        ></div>

                        {subLinks.length ? (
                          subLinks.map((subLink, index) => (
                            <Link to={`${subLink.name}`} key={index}>
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                        ) : (
                          <div> </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${matchRoute(link?.path) ? 'text-yellow-25' : 'text-richblack-25'}`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center">
          {user && user?.accountType != 'Instructor' && (
            <Link to={'/dashboard/cart'} className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link
              to={'/login'}
              className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md"
            >
              <button>Login </button>
            </Link>
          )}
          {token === null && (
            <Link to={'/signUp'}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign Up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
