import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Movies from "./../../Pages/Movies/Movies";
import Favorites from "./../../Pages/Favorites/Favorites";
import Home from "./../../Pages/Home/Home";
import { changeLanguage } from "../../store/slices/LanguageSlice";
import "./Navbare.css";
function Navbare() {
  const lang = useSelector((state) => state.language.language);
  const favoritesLength = useSelector((state) => state.favoriteMovies.favoriteMovies.length);
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    dispatch(changeLanguage(lang == "en" ? "ar" : "en"));
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="mb-5 "
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-danger text-decoration-none mx-3 "
                    : "mx-3  text-decoration-none text-dark "
                }
                style={{ fontWeight: "500" }}
              >
                Movies
              </NavLink>
              <NavLink
                to="/Favorites"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-danger text-decoration-none mx-3"
                    : "mx-3  text-decoration-none text-dark "
                }
                style={{ fontWeight: "500" }}
              >
                Favorites <span className="badge bg-secondary">{favoritesLength}</span>
              </NavLink>
              <NavLink
                to="/Home"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-danger text-decoration-none mx-3"
                    : "mx-3  text-decoration-none text-dark "
                }
                style={{ fontWeight: "500" }}
              >
                Home
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                to="/Login"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-danger text-decoration-none mx-3"
                    : "mx-3  text-decoration-none text-dark"
                }
                style={{ fontWeight: "500" }}
              >
                Login
              </NavLink>
              <NavLink
                to="/Register"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-danger text-decoration-none mx-3"
                    : "mx-3  text-decoration-none text-dark"
                }
                style={{ fontWeight: "500" }}
              >
                Register
              </NavLink>
              <button
                className="btn btn-primary"
                onClick={() => {
                  toggleLanguage();
                }}
              >
                language:{lang}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbare;
