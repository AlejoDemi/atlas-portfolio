import React, {useEffect, useState} from 'react';
import PageBinder from "../../Binder/PageBinder";
import AboutUs from "../../AboutUs/AboutUs";
import ContactUs from "../../ContactUs/ContactUs";
import "./CanvasMobile.css"
import {ParticlesStars} from "../../Canvas/Particles";
import logo from '../../../assets/Canvas/logo.png';
import Techs from "../../Techs/Techs";
import HeaderMobile from "./HeaderMobile";

const CanvasMobile = () => {



    return (


        <div >
            <div style={{width:"100vw",height:"400vh",display:"flex",justifyContent:"center",textAlign:"center",position:"relative"}}>
                <ParticlesStars ></ParticlesStars>
                <div >
                    <HeaderMobile></HeaderMobile>
                    <div style={{height:"120vh",position:"relative",zIndex:1,opacity:0.95,background:"  linear-gradient(180deg, rgba(0,7,35,1) 80%, rgba(42,41,71,1) 100%)"}}>
                        <AboutUs></AboutUs>

                    </div>
                    <div style={{height:"80vh",position:"relative",zIndex:1,opacity:0.95,background:"linear-gradient(180deg, rgba(42,41,71,1) 80%, rgba(88,72,109,1) 100%)"}}>
                        <Techs></Techs>
                    </div>
                    <div style={{height:"100vh",display:"flex",justifyContent:"center",position:"relative",zIndex:1,opacity:0.95,background:"linear-gradient(180deg, rgba(88,72,109,1) 35%, rgba(138,105,146,1) 100%)"}}>
                        <ContactUs></ContactUs>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default CanvasMobile;