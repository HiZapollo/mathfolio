import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar flex-row justify-end">
            <a className="btn text-white bg-orange-600 mx-1" to="#home">Home</a>
            <a className="btn text-white bg-orange-600 mx-1" to="#projects">Projects</a>
            <a className="btn text-white bg-orange-600 mx-1" to="#about">About</a>
            <a className="btn text-white bg-orange-600 mx-1" to="#contact">Contact</a>
        </nav>
    );
};

export default Navbar;