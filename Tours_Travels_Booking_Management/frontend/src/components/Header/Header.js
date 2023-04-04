import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Button, Nav } from "reactstrap";
import logo1 from "../../assets/images/logo1.jpg";
import './Header.css'

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="logo">
                <img src={logo1} alt="Logo" />
              </div>
              {/* Logo End */}

              {/* Menu  */}
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  {nav__links.map((item, index) => {
                    return (
                      <li className="nav__item" key={index}>
                        <NavLink to={item.path}
                        className= {navClass => 
                          navClass.isActive ? "active__link": ""
                        }
                        >
                          {item.display}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Menu End */}

              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav_btns d-flex align-items-center gap-4">
                  <Button className="btn secondary__btn" style={{marginLeft:"100px"}}>
                    <Link to="/login">  <strong>Login</strong> </Link>
                  </Button>
                  <Button className="btn primary__btn">
                    <Link to="/register"> <strong>Register</strong> </Link>
                  </Button>
                </div>
                <span className="mobile__menu">
                <i className="fa-solid fa-bars"></i>
                </span>
              </div>


            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
