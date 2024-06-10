import React, { useState, useEffect } from 'react';
import { VscMenu, VscClose } from "react-icons/vsc";
import '../Navbar/Navbar.css';
import logo from '../../assets/pet-expo-logo.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(id);
            setMenuOpen(false); // Close menu on link click
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['types', 'about', 'contact-us'];
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveLink(section);
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='homepage-navbar'>
            <img src={logo} alt="logo" />
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <VscClose /> : <VscMenu />}
            </div>
            <ul className={menuOpen ? 'menu-open' : ''}>
                <li><a href="#types" onClick={(e) => handleScroll(e, 'types')} className={activeLink === 'types' ? 'active' : ''}>Pet Types</a></li>
                <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className={activeLink === 'about' ? 'active' : ''}>About</a></li>
                <li><a href="#contact-us" onClick={(e) => handleScroll(e, 'contact-us')} className={activeLink === 'contact-us' ? 'active' : ''}>Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
