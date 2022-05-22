import React from 'react';
import PageBinder from "../../Binder/PageBinder";
import AboutUs from "../../AboutUs/AboutUs";
import ContactUs from "../../ContactUs/ContactUs";
import "./CanvasMobile.css"
import {ParticlesStars} from "../../Canvas/Particles";
import logo from '../../../assets/Canvas/logo.png';
import Techs from "../../Techs/Techs";

const CanvasMobile = () => {

    return (

        <div >
            <div className={"navbar"}></div>
            <div style={{width:"100%",background:"none",height:"360vh",display:"flex",justifyContent:"center",textAlign:"center"}}>
                <ParticlesStars></ParticlesStars>
                <div >
                    <div className={"headerMobile"} style={{position:"relative",height:"100vh",zIndex:"1",background:"#000723"}}>
                        <img className={"logo"} src={logo}/>
                    </div>
                    <div style={{height:"90vh",background:"deeppink",position:"relative",zIndex:1,opacity:0.9}}>
                        <AboutUs></AboutUs>

                    </div>
                    <div style={{height:"80vh",background:"wheat",position:"relative",zIndex:1,opacity:0.9}}>
                        <Techs></Techs>
                    </div>
                    <div style={{height:"100vh",display:"flex",justifyContent:"center",background:"darkblue",position:"relative",zIndex:1,opacity:0.9}}>
                        <ContactUs></ContactUs>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default CanvasMobile;