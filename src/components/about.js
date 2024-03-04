import React from "react";
import aboutImage from '../assets/images/AboutME.png'
import { Link } from "react-router-dom";
import aboutImage2 from '../assets/images/about.jpg'

import CountUp from 'react-countup';

export default function About(){
    return(
        <section className="relative md:py-24 py-16" id="about">
             <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <img src={aboutImage2} className="rounded-full shadow dark:shadow-gray-700" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                                    <div className="text-center">
                                        <span className="text-teal-500 text-2xl font-semibold mb-0 block"><CountUp className="counter-value text-6xl font-semibold" start={0} end={11}/>+</span>
                                        <span className="font-semibold block mt-2">Years <br/> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">Mercator in a Nutshell</h6>
                            <h3 className="font-semibold text-2xl leading-normal mb-4">At its core <br/> Mercator is your comprehensive solution for trader management. </h3>

                            <p className="text-slate-400 max-w-xl mb-6">It offers a range of essential functionalities designed to make your business operations smoother and more efficient.</p>

                       
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div className="container relative "  >
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                  

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">Who is Founder ?</h6>


                            <p className="text-slate-400 max-w-xl mb-6">Taleb Atoui, the visionary behind Mercator, is a seasoned entrepreneur with a deep understanding of the challenges traders face in today's competitive landscape. With a passion for innovation and a commitment to simplifying business processes, Taleb embarked on a journey to create Mercator, a groundbreaking SaaS solution tailored specifically for traders. <br/><br/>
                            Taleb's extensive experience in the industry, coupled with his dedication to excellence, has driven Mercator's development from its inception. His vision for Mercator is to empower traders worldwide, offering them a powerful tool to manage their accounting, logistics, and future analytics needs seamlessly.
                            <br/><br/>
                            As the driving force behind Mercator, Taleb Atoui continues to lead the way in revolutionizing how traders operate and thrive in an ever-evolving marketplace.


                            </p>

                       
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <img src={aboutImage} className="   shadow dark:shadow-gray-800 mt-5 " alt=""/>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}