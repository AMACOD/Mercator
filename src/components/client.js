import React from "react";
import imageQ from "../assets/images/bg/q&a.png"
import 'tiny-slider/dist/tiny-slider.css';

export default function Client(){

    return(
        <section className="relative md:py-24 py-16" id="review">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal ">Question and Answer Session</h3>

              
            </div>

            <div className="grid grid-cols-1 mt-6">
                <div className="tiny-three-item">
            
                            <div className="tiny-slide text-center">
                             
                                    <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-800 before:origin-top-left">
                                      
                                        <p className="text-slate-400">It's time for your questions! Feel free to ask anything about Mercator and how it can benefit your business.
</p>
                                    
                                    </div>
                                    
                                    <div className="text-center mt-5">
                                        <img src={imageQ} className="size-80 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt=""/>
                                    
                                    </div>
                               
                            </div>
                
                </div>
            </div>
        </div>
    </section>
    )
}