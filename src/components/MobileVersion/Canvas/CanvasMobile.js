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
            <div style={{width:"100%",background:"none",height:"400vh",display:"flex",justifyContent:"center",textAlign:"center"}}>

                <ParticlesStars></ParticlesStars>
                <div >
                    <HeaderMobile></HeaderMobile>
                    <div style={{height:"120vh",position:"relative",zIndex:1,opacity:0.9, background:"#2F305E"}}>
                        <AboutUs></AboutUs>

                    </div>
                    <div style={{height:"80vh",position:"relative",zIndex:1,opacity:0.9}}>
                        <Techs></Techs>
                    </div>
                    <div style={{height:"100vh",display:"flex",justifyContent:"center",position:"relative",zIndex:1,opacity:0.9}}>
                        <ContactUs></ContactUs>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default CanvasMobile;