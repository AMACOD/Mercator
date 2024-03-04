import React, { useState } from "react";
import { Link } from "react-router-dom";

import blog1 from '../assets/images/Dashboard Reports.png'
import blog2 from '../assets/images/Client Account Statement.png'
import blog3 from '../assets/images/Logistics Tracking Table.png'

export default function AgencyTab(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Mercator Guide</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Let's explore what Mercator has to offer:</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeIndex === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        <span className="block">Step 1</span>
                                        <span className="text-lg mt-2 block">Dashboard and Reports</span>
                                        
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        <span className="block">Step 2</span>
                                        <span className="text-lg mt-2 block">Client Account Statement</span>
                                       
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        <span className="block">Step 3</span>
                                        <span className="text-lg mt-2 block">Streamlined Logistics and Automated Tracking </span>
                                        
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden' }>
                                <img src={blog1} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Dashboard and Reports:</h5>
                                    <p className="text-slate-400 mt-4">Welcome to Mercator's dynamic dashboard, your gateway to real-time insights and data visualization. Our dashboard empowers traders with the information they need to make informed decisions and optimize their operations.</p>
                                    <p className="text-slate-400 mt-4">Mercator's dashboard is your command center, providing you with the tools to stay ahead in the competitive world of trading.</p>
                                   
                                  
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden' }>
                                <img src={blog2} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Client-Centric Accounts Management: </h5>
                                    <p className="text-slate-400 mt-4">Mercator makes managing client accounts a breeze, enabling you to provide exceptional service to your customers.</p>
                           
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden' }>
                                <img src={blog3} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Streamlined Logistics and Automated Tracking: </h5>
                                    <p className="text-slate-400 mt-4">Mercator's logistics tracking feature ensures that you have complete visibility into your supply chain.</p>
                                   
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
