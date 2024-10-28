
import { useState } from 'react';
import Link from '../Link/Link'
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";

const Navber = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "NotFound" }
    ];
    return (
        <nav className='text-black bg-purple-500 p-6'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        < RiCloseLargeFill
                            className='text-2xl'
                        ></ RiCloseLargeFill>
                        : <TiThMenu
                            className='text-2xl'
                        ></TiThMenu>
                }

            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-16' : '-top-60'} bg-purple-500 px-7 `}>
                {
                    routes.map(route => <Link
                        key={route.id} route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;