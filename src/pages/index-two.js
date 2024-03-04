import React from "react";

import TinySlider from "tiny-slider-react";
import bg from '../assets/images/bg/bg4.png'

import NavLight from "../components/navLight";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Footer from "../components/footer";
import Switcher from "../components/switcher";


import '../../node_modules/react-modal-video/scss/modal-video.scss';
import GetInTouch from "../components/getInTuoch";

export default function IndexTwo(){

    

    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        navPosition: "bottom",
        speed: 500,
        gutter: 12,
        responsive: {
            992: {
                slide: 3
            },

            767: {
                slide: 2
            },

            320: {
                slide: 1
            },
        },
      };
    const slides = [
        {
       
          description: 'Welcome to Mercator, the ultimate solution designed to simplify the lives of traders. In a world where accounting and logistics can be complex and time-consuming, Mercator is here to streamline your operations, increase efficiency, and provide you with the insights you need to succeed.'
        
        },
        {
            description:'Our mission is clear - to empower traders with a comprehensive Software as a Service (SaaS) platform that encompasses accounting, invoicing, logistics, and advanced analytics capabilities and much more.'
        },
        {
            description:'With Mercator, you can focus on what truly matters - growing your business and serving your clients - while we handle the complexities behind the scenes.'
        }
    ]
    return(
        <>
        <NavLight/>
        <section className="relative table w-full py-36 lg:py-64 overflow-hidden" id="home">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute image-wrap  min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}></div>
            </div>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                 
   
                    <h2 className="text-white font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl   ">
                    Welcome to Mercator's</h2>
                        <br/>  <p className="text-white/100 text-lg  max-w-xl mx-auto">Introducing Mercator - Your Trader's Solution</p>
                    <p className="text-white/100 text-lg   max-w-xl mx-auto">Software as a Service for Traders</p> 
                    <br/>
                                    
                   
               <TinySlider settings={settings}>
                    
                    
              {slides.map((slide, index) => (
                <div key={index} >
              
                  <p className="text-white/70   max-w-xl mx-auto">{slide.description}</p>
                </div>
              ))}
           </TinySlider>
               
                </div>
            </div>
        </section>
        <div className="relative">
            

            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <About/>
        <Services/>
        <AgencyTab/>
        <Cta/>
        <Client/>
        <GetInTouch/>
   
        <Footer/>
        <Switcher/>
        </>
    )
}