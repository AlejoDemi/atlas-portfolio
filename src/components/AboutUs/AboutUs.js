import React from 'react';
import "./AboutUs.css";

import rocketIcon from "../../assets/aboutUs/rocket.svg"
import awardIcon from "../../assets/aboutUs/award.svg"
import goalIcon from "../../assets/aboutUs/goal.svg"

const AboutUs = () => {


    return (


        <div className={"aboutUsContainer"} style={{zIndex:"1"}}>
            <h1 className={"title"}>ABOUT US</h1>
            <div className={"text"}>


                <div className={"card"}>
                    <div className={"image"}>
                        <img src={rocketIcon}/>

                    </div>
                    <div className={"p"}>
                        <p>We are a tailor-made software company with the drive and skills necessary to take your business to the next level. </p>

                    </div>
                </div>

                <div className={"card1"} >
                    <div className={"image"}>
                        <img src={awardIcon}/>
                    </div>
                    <div className={"p"}>
                        <p>Born and founded by excellence-driven Software Engineering students, with the philosophy of achieving top-tier quality in all aspects.
                            We seek to fully unleash the power of new, innovative technologies, along with the stability provided by fundamental classics. </p>
                    </div>
                </div>

                <div className={"card"}>
                    <div className={"image"}>
                        <img src={goalIcon}/>
                    </div>
                    <div className={"p"}>
                        <p>Our goal is to cater for the needs of our clients, for we believe that together, we will make the world move forward. </p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AboutUs;