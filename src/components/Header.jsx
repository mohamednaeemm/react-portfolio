import React, {useState} from "react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

return (
    <header>
        <nav>
            <a href="#home" className="logo">Mohamed Naeem</a>
            <div>
                <button className="list" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
                </ul>
                <button>Hire me!</button>
            </div>
        </nav>
    </header>
);
};

export default Header;
