import React from 'react';
import "./AboutUs.css";




// techs missing: prisma

const AboutUs = () => {


    return (


        <div className={"aboutUsContainer"} style={{zIndex:"1"}}>
            <h1 className={"title"}>ABOUT US</h1>
            <div className={"text"}>


                <div className={"card"}>
                    <div className={"image"}>
                        <img src={"https://i.pinimg.com/originals/b3/2d/65/b32d659e36e50e459e00ed3957a10551.png"}/>

                    </div>
                    <div className={"p"}>
                        <p>We are a tailor-made software company with the drive and skills necessary to take your business to the next level. </p>

                    </div>
                </div>

                <div className={"card1"} >
                    <div className={"image"}>
                        <img src={"https://cdn2.iconfinder.com/data/icons/elections-linear-black/2048/4552_-_Award-512.png"}/>
                    </div>
                    <div className={"p"}>
                        <p>Born and founded by excellence-driven Software Engineering students, with the philosophy of achieving top-tier quality in all aspects.
                            We seek to fully unleash the power of new, innovative technologies, along with the stability provided by fundamental classics. </p>
                    </div>
                </div>

                <div className={"card"}>
                    <div className={"image"}>
                        <img src={"https://www.iconpacks.net/icons/2/free-target-and-goal-icon-2852-thumb.png"}/>
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