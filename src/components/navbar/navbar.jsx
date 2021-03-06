import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'
import './navbar.css'

const NavLinks = () => (
  <>
    <p className="styled__nav-ptag current-styled__nav-ptag">
      <a href="#home">Home</a>
    </p>
    <p className="styled__nav-ptag">
      <a href="#whatamill">What is Amill</a>
    </p>
    <p className="styled__nav-ptag">
      <a href="#feautures">Case Studies</a>
    </p>
    <p className="styled__nav-ptag">
      <a href="#possibility">Experience Nature</a>
    </p>
  </>
)
const Signon = () => (
  <>
    <p className="styled__nav-ptag">Sign in</p>
    <button type="button">Sign up</button>
  </>
)
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <>
      <div className="amill__navbar">
        <div className="amill__navbar-links_logo">
          <span>
            <a href="#home"></a>Amill
          </span>
        </div>
        <div className="amill__navbar-links_container">
          <div className=" amill__navbar-links">
            <NavLinks />
          </div>
        </div>
        <div className="amill__navbar-sign">
          <Signon />
        </div>
        <div className="amill__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine onClick={() => settoggleMenu(!toggleMenu)} />
          ) : (
            <RiMenu3Line onClick={() => settoggleMenu(!toggleMenu)} />
          )}
        </div>
      </div>
      {toggleMenu && (
        <>
          <div
            className="amill__backdrop slide-right"
            onClick={() => settoggleMenu(!toggleMenu)}
          ></div>
          <div className="amill__navbar-menu_container slide-left">
            <div className="amill__navbar-menu mobilehamburger">
              {toggleMenu ? (
                <RiCloseLine onClick={() => settoggleMenu(!toggleMenu)} />
              ) : (
                <RiMenu3Line onClick={() => settoggleMenu(!toggleMenu)} />
              )}
            </div>
            <div className="amill__navbar-menu_container-links">
              <NavLinks />
              <Signon />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
