import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Navbar() {


    const navbarLinks = [
        {
            name: 'קולקציות',
            url: '/collection',
        },
        {
            name: 'אודות המותג',
            url: '/about',
        }

    ];


    const [menuClicked, setMenuClicked] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the clicked element is outside the menu
            if (menuClicked && !event.target.closest('.your-menu-container')) {
                setMenuClicked(false);
            }
        };

        // Add mousedown event listener to the document
        document.addEventListener('mousedown', handleOutsideClick);


        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };





    }, [menuClicked, prevScrollPos]);

    return (
        <nav className={`navbar ${menuClicked ? 'navbar__active' : ''} ${visible ? 'navbar__visible' : 'navbar__hidden'}`} >
            <Link className="navbar__logo"

                to={'/home'}


            >
                <svg viewBox="0 0 512 512">
                    <path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z">
                    </path>
                </svg>
            </Link>
            {menuClicked ? (
                <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
            ) : (
                <FiMenu
                    size={25}
                    className={"navbar__menu"}
                    onClick={toggleMenuClick}
                />
            )}
            <ul
                className={
                    menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
                }
            >
                {navbarLinks.map((item, index) => (

                    <li className="navbar__item" key={index} >

                        <Link
                            className="navbar__link"

                            to={item.url}


                        >
                            {item.name}
                        </Link>
                    </li>

                ))}
            </ul>
        </nav>
    );
}