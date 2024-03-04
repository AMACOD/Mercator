import React from "react";
import { Link } from "react-router-dom";
import logoLight from '../assets/images/LogoM.png'
import { FiMail, FiPhoneCall, FiServer} from '../assets/icons/vander'

export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center">
                           
                                <img src={logoLight} className="mx-auto md:me-auto md:ms-0" alt=""/>
                        
                        </div>

                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()}  by MERCATOR</p>
                        </div>

                        <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">

                            <li className="inline"><Link to="https://www.mercatorapp.com/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiServer className="size-4 align-middle" title="Mercator"/></Link></li>
                            <li className="inline"><Link to="mailto:support@mercatorapp.com" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiMail className="size-4 align-middle" title="email"/></Link></li>
                            <li className="inline"><Link to="tel:961 71 676 721" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiPhoneCall className="size-4 align-middle" title="Phone"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}