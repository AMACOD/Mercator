import React from "react";
import bg from '../assets/images/bg/bg6.png'
export default function Cta(){
   
    return(
        <section className="relative table w-full py-36 lg:py-64 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute image-wrap  min-w-full w-auto min-h-full h-80 overflow-hidden m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}></div>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container relative">
            <div className="grid grid-cols-1 text-center">
             

                <h4 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-2"> In Conclusion
                <p className="text-white/100 text-lg max-w-xl mx-auto my-5 text-left">Mercator is not just software; it's a solution that empowers traders to thrive in the dynamic world of commerce. Our commitment to simplifying your accounting, logistics, and future needs is unwavering.</p>
                                
                 </h4>
                 
               
 
            </div>
        </div>
    </section>
    )
}