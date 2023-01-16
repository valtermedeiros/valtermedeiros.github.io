import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import VMLogoDark from '../storage/images/vm_logo_dark.svg';
import VMLogoLight from '../storage/images/vm_logo_light.svg';
import VMIconDark from '../storage/images/vm_icon_dark.svg';
import VMIconLight from '../storage/images/vm_icon_light.svg';



export default function Navbar({ darkMode, swapDarkMode }) {



    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        // Save the scroll position to the state
        setScrollPos(window.pageYOffset);

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

        function handleScroll() {
            setScrollPos(window.pageYOffset);
        }
    }, []);

    useEffect(() => {
        //? when scrollPos changes:

        // Restore the scroll position
        /* window.scrollTo(0, scrollPos); */

        /* console.log(scrollPos); */

    }, [scrollPos]);



    return (
        <>

            <nav className="nav flex flex-wrap sticky top-0 items-center justify-between px-4 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur">

                {/* <div className="ml-10 mr-3 flex flex-shrink-0 items-center">
                    <Link to="/">
                        <img style={{ height: '3rem' }} className="w-auto" src={darkMode ? VMLogoLight : VMLogoDark} alt="valtermedeiros" />
                    </Link>
                </div> */}

                <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
                    <img style={{ height: '2.5rem' }} className="w-auto" src={darkMode ? VMIconLight : VMIconDark} alt="valtermedeiros" />
                    <span class="text-lg text-neutral-900 dark:text-neutral-50 tracking-tight ml-2 hidden md:flex"><b className='font-extrabold'>Valter Medeiros</b></span>
                </div>

                {/* <div className="menu ml-auto mx-10 flex items-center">
                    {[
                        ['Home', '/'],
                        ['About', '/about'],
                        ['Projects', '/projects'],
                        ['Blog', '/blog'],
                        ['Contact', '/contact'],
                    ].map(([title, url]) => (
                        <Link to={url} className="rounded-lg px-3 py-2 h-10 font-medium dark:text-neutral-400 text-neutral-600  hover:bg-neutral-100 hover:text-neutral-900  dark:hover:bg-neutral-900 dark:hover:text-neutral-100">{title}</Link>
                    ))}
                </div> */}

                <input class="menu-btn hidden" type="checkbox" id="menu-btn"></input>
                <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span class="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul class="menu flex justify-end list-reset m-0 w-full md:w-auto md:space-x-1 mb-3 md:mb-0">

                    {[
                        ['Home', '/'],
                        ['About', '/about'],
                        ['Projects', '/projects'],
                        ['Blog', '/blog'],
                        ['Contact', '/contact'],
                    ].map(([title, url]) => (
                        <li class="">
                            {/* <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a> */}
                            <NavLink
                                to={url}
                                className={({ isActive }) => isActive ?
                                    'block rounded-lg px-3 py-2 h-10 font-bold dark:text-neutral-50 text-neutral-900' :
                                    'block rounded-lg px-3 py-2 h-10 font-medium dark:text-neutral-400 text-neutral-600  hover:bg-neutral-200 hover:text-neutral-900  dark:hover:bg-neutral-700 dark:hover:text-neutral-100'
                                }>
                                {title}
                            </NavLink>

                        </li>
                    ))}

                    <div className='mr-10 flex items-center '>
                        <label class="inline-grid items-center cursor-pointer">
                            <span onClick={swapDarkMode} className={`rounded-lg px-3 py-2 font-medium dark:text-blue-400 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900  dark:hover:bg-blue-900 dark:hover:text-blue-100`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                </svg>
                            </span>
                        </label>
                    </div>

                </ul>


            </nav>



        </>
    );
}