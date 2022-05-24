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
            <div style={{width:"100vw",background:"none",height:"400vh",display:"flex",justifyContent:"center",textAlign:"center"}}>

                <ParticlesStars></ParticlesStars>
                <div >
                    <HeaderMobile></HeaderMobile>
                    <div style={{height:"120vh",position:"relative",zIndex:1,opacity:0.95, background:"#706E90"}}>
                        <AboutUs></AboutUs>

                    </div>
                    <div style={{height:"80vh",position:"relative",zIndex:1,opacity:0.95, background:"#464564"}}>
                        <Techs></Techs>
                    </div>
                    <div style={{height:"100vh",display:"flex",justifyContent:"center",position:"relative",zIndex:1,opacity:0.95, background:"#1E1F3B"}}>
                        <ContactUs></ContactUs>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default CanvasMobile;