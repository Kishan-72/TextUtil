import PropTypes from 'prop-types';
//import { useEffect } from 'react';
//import { useState } from 'react';

const Navbar = ({ title, abouttext, darkMode, navClassNames, setDarkMode }) => {

    const navClass = `text-white p-3 sm:p-4 md:p-5 lg:p-6
     ${navClassNames}`;

    //  useEffect(()=>{
    //     console.log(darkMode)
    //  })

    return (
        <nav className={navClass}>
            <div className="flex justify-between items-center">
                <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-7 px-4 sm:px-8 cursor-pointer text-sm sm:text-base md:text-lg">
                    <li>{title}</li>
                    <li>{abouttext}</li>
                    <li>Contact Us</li>
                </ul>

                {/* Dark Mode Toggle Button */}
                <button onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 rounded-md text-sm bg-gray-400
                     dark:bg-gray-700 dark:text-white">

                    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}


                </button>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string,
    darkMode: PropTypes.bool,
    setDarkMode: PropTypes.func,
    navClassNames: PropTypes.string
};

export default Navbar;
