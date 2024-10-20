import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Zachary Eckenrode. All Rights Reserved.</p>
            <div className="social-links">
                <a href="/">GitHub</a>
                <a href="/">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer;