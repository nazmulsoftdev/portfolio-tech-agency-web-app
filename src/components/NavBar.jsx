"use client";
import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import AssetsImage from "../assets/AssetsImage";
import { Link, NavLink } from "react-router-dom";
import AppointmentMessageModal from "./AppointmentMessageModal/AppointmentMessageModal";

function NavBar() {
  const [open, setOpen] = useState(false);

  // open modal handler

  const openModalHandler = () => {
    setOpen(true);
  };

  // close modal handler

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <div className="fixed top-0 z-10 w-full bg-white ">
      <div className="w-[100%] m-auto md:w-[100%] md:m-auto lg:w-[95%] lg:m-auto xl:w-[95%] xl:m-auto ">
        <Navbar className="shadow-none w-full p-5">
          <Link to="/">
            <img
              src={AssetsImage.NavLogo}
              className="mr-3 w-[100px] md:w-[100px] lg:w-[120px] xl:w-[120px]"
              alt="Goditectlogo.png"
            />
          </Link>
          <div className="flex md:order-2">
            <Button onClick={openModalHandler} gradientDuoTone="purpleToBlue">
              Book Appointment
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink
              className="bg-[#ffffff] shadow-lg p-2 md:shadow-none lg:shadow-none"
              to="/"
              id="RouterNavLink"
              style={({ isActive }) => {
                return {
                  fontSize: "16px",
                  color: isActive ? "#F451A2" : null,
                  fontWeight: isActive ? "bold" : null,
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="bg-[#ffffff] shadow-lg p-2 md:shadow-none lg:shadow-none"
              to="/about"
              id="RouterNavLink"
              style={({ isActive }) => {
                return {
                  fontSize: "16px",
                  color: isActive ? "#F451A2" : null,
                  fontWeight: isActive ? "bold" : null,
                };
              }}
            >
              About
            </NavLink>
            <NavLink
              className="bg-[#ffffff] shadow-lg p-2 md:shadow-none lg:shadow-none"
              to="/service"
              id="RouterNavLink"
              style={({ isActive }) => {
                return {
                  fontSize: "16px",
                  color: isActive ? "#F451A2" : null,
                  fontWeight: isActive ? "bold" : null,
                };
              }}
            >
              Service
            </NavLink>
            <NavLink
              className="bg-[#ffffff] shadow-lg p-2 md:shadow-none lg:shadow-none"
              to="/price"
              id="RouterNavLink"
              style={({ isActive }) => {
                return {
                  fontSize: "16px",
                  color: isActive ? "#F451A2" : null,
                  fontWeight: isActive ? "bold" : null,
                };
              }}
            >
              Pricing
            </NavLink>
            <NavLink
              className="bg-[#ffffff] shadow-lg p-2 md:shadow-none lg:shadow-none"
              to="/contact"
              id="RouterNavLink"
              style={({ isActive }) => {
                return {
                  fontSize: "16px",
                  color: isActive ? "#F451A2" : null,
                  fontWeight: isActive ? "bold" : null,
                };
              }}
            >
              Contact
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <AppointmentMessageModal
        open={open}
        closeModalHandler={closeModalHandler}
      />
    </div>
  );
}

export default NavBar;
