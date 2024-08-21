import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import search from "@/assets/search.svg";
import explore from "@/assets/explore.svg";
import hobbies from "@/assets/hobbies.svg";
import bookmark from "@/assets/bookmark.svg";
import bell from "@/assets/bell.svg";
import cart from "@/assets/cart.svg";
import search2 from "@/assets/search2.svg";
import menuBar from "@/assets/menuBar.svg";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center" style={{height: "4rem"}}>
      <Image src={logo} alt="logo" className="ms-4 mx-lg-5" width={200} />
      <div className="d-none d-xl-flex justify-content-evenly align-items-center w-100 mx-5">
        <div className="d-flex align-items-center justify-content-center ">
          <input className="p-1 px-2 rounded-start border-0" style={{outline: "none", height: "38px", fontSize: "13px"}} type="text" placeholder="Search here" />
          <button className="border-0 rounded-end bg-transparent">
            <Image src={search} alt="search" />
          </button>
        </div>

        <div className="dropdown">
          <button
            className="text-black border-0 fw-bold d-flex align-items-center justify-content-evenly p-2 dropdown-toggle"
            style={{width: "130px"}}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image src={explore} alt="explore" />
            <span>Explore</span>
          </button>
          <ul style={{color: "red"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                People - Community
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Places - Venues
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Programs - Events
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Products - Store
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <button
            className="text-black border-0 fw-bold d-flex align-items-center justify-content-evenly p-2 dropdown-toggle"
            style={{width: "130px"}}
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image src={hobbies} alt="hobbies" />
            <span>Hobbies</span>
          </button>
          <ul style={{color: "#6D747A"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li>
              <a className="dropdown-item" href="#">
                Dancing
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Singing
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Reading
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Other
              </a>
            </li>
          </ul>
        </div>

        <Image src={bookmark} alt="bookmark" />
        <Image src={bell} alt="notification" />
        <Image src={cart} alt="cart" />
        <button className="border-2 rounded-2 fw-bold py-2 px-4" style={{color: "#8064A2", borderColor: "#8064A2"}}>Sign In</button>
      </div>

      <div className="d-flex d-xl-none w-50 justify-content-evenly">
        <Image src={search2} alt="search" width={30} />
        <Image src={bell} alt="notification" width={30} />
        <div>
          <Image src={menuBar} alt="menu bar" width={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
