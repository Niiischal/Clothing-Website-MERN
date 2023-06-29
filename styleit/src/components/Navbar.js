import React from 'react'
import Footer from './Footer'
const Navbar = () => {
  return (
<>
<nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{ fontFamily: "Ysabeau SC" }}>
      StyleIt<span style={{ color: "#006600", fontSize: "1rem" }}>.</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title"
          id="offcanvasNavbarLabel"
          style={{ fontSize: "1.5rem", color: "#006600" }}
        >
          Navigation
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul
          className="navbar-nav justify-content-end flex-grow-1 pe-3"
          style={{ fontSize: "1.5rem", margin: "2rem 0 2rem 0", padding: "0 0 1.8rem 0" }}
        >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/product">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/profile">
              Profile
            </a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ex, in deserunt
          error unde accusamus omnis neque quasi deleniti beatae eos necessitatibus culpa
          delectus molestiae accusantium odit esse voluptas obcaecati?
        </p>
        <Footer />
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
