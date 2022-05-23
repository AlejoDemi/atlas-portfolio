import React from 'react';
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Techs from "../Techs/Techs";

const PageBinder = () => {
    return (
        <div style={{height:"300vh",display:"flex",justifyContent:"center",flexDirection:"column",background:"#000723"}}>
            <div style={{height:"100vh"}}>
                <AboutUs></AboutUs>
            </div>
            <div style={{height:"80vh"}}>
                <Techs></Techs>
            </div>
            <div style={{height:"100vh",display:"flex",justifyContent:"center"}}>
                <ContactUs></ContactUs>

            </div>

        </div>
    );
};

export default PageBinder;