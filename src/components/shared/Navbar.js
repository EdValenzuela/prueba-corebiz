import React from 'react';
import {Link} from 'react-router-dom';
import { SOURCE } from '../../const';

const Navbar = () => {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 flex items-center">
                <img src={SOURCE.account} style={{width: '15px', height: '15px'}} alt="img_account" />
                <p className="hover:text-black text-gray-500 ml-2">Minha Conta</p>
            </div>
        </nav>
    )
}

export default Navbar
