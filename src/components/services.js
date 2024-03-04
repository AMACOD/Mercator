import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/data";

export default function Services(){
    return(
        <section className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="services">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal  text-teal-400 ">Mercator Overview  </h3>
                   


                    <p className="text-slate-400 max-w-xl mx-auto text-left"> Let's explore what Mercator has to offer:</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    {servicesData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-80" key={index}>
                                <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                                    <Icon className="size-6 rotate-45"></Icon>
                                </div>
        
                                <div className="content mt-6 relative z-1">
                                    <Link to="" className="title text-lg font-semibold hover:text-teal-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                    
                                </div>
        
                                <div className="absolute bottom-0 -end-16">
                                    <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></Icon>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}