import "./Canvas.css";
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import {ParticlesStars} from "./Particles";
import Header from "./Header.js";
//import AboutUs from "../AboutUs/AboutUs";
//import ContactUs from "../ContactUs/ContactUs";
import {useEffect, useRef, useState} from "react";
import PageBinder from "../Binder/PageBinder";
import layer1 from "../../assets/Canvas/layer1-icon.svg";
import layer2 from "../../assets/Canvas/layer2.svg";
import layer3 from "../../assets/Canvas/layer3.svg";
import layer4 from "../../assets/Canvas/layer4.svg";
import layer5 from "../../assets/Canvas/layer5.svg";
import layer6 from "../../assets/Canvas/layer6.svg";

// used https://es.imgbb.com/ to upload the image and use it (line 25) - Pedro

const Canvas = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 600);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    const ref=useRef();

    const styles = {
        layer1: {
            backgroundImage: `url(${layer1})`,
            backgroundPosition: 'center 90%',
            repeat:"true"
        },
        layer2: {
            backgroundImage: `url(${layer2})`,
            backgroundPosition: 'center 70%',
            repeat:"true"
        },
        layer3: {
            backgroundImage: `url(${layer3})`,
            backgroundPosition: 'center 40%',
            repeat:"true"
        },
        layer4: {
            backgroundImage: `url(${layer4})`,
            backgroundPosition: 'center 50%',
            repeat:"true"
        },
        layer5: {
            backgroundImage: `url(${layer5})`,
            backgroundPosition: 'center 70%',
            repeat:"true"
        },
        layer6: {
            backgroundImage: `url(${layer6})`,
            backgroundPosition: "center 0%",
            repeat:"true"
        }

    };


    return (
        <Parallax ref={ref} config={{tension:10000,clamp:true}} pages={4} className="parallax" style={{backgroundColor:"#000723",scrollBehavior:"smooth"}}>

            <ParallaxLayer speed={-0.35} offset={0} style={{display:"flex",flexDirection:"column",backgroundSize:"contain", repeat:"true"}}>
                <ParticlesStars style={{height:"10px",width:"10px", position: "absolute"}} interact={isDesktop}/>
            </ParallaxLayer>

            <ParallaxLayer speed={-0.35} offset={0.1} style={styles.layer1}>
            </ParallaxLayer>            
            <ParallaxLayer speed={-0.25} offset={0.23} style={styles.layer2}>
            </ParallaxLayer>
            <ParallaxLayer speed={-0.2} offset={0.25} style={styles.layer3}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.1} offset={0.25} style={styles.layer4}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.15} offset={0.25} style={styles.layer5}>
            </ParallaxLayer>
            <ParallaxLayer speed={0.5} offset={0.6} style={styles.layer6}>
            </ParallaxLayer>

            <ParallaxLayer speed={0.5} offset={0.9} style={{background:"#000723"}}>
                <div style={{background:"#000723"}}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.35} offset={1.8} style={{background:"#000723"}}>
                <div style={{background:"#000723"}}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.3} offset={0.9}>
                <section id="scrollIcon" >
                    <scrollIcon/>
                </section>
            </ParallaxLayer>



            <ParallaxLayer sticky={{start:0,end:2}} >
                <Header goToContact={()=>ref.current.scrollTo(4)}
                        goToAboutUs={()=>ref.current.scrollTo(1)}
                        goToTop={()=>ref.current.scrollTo(0, {behavior:'auto'})}/>
            </ParallaxLayer>


            <ParallaxLayer id="whoWeAre" offset={1} >
                <PageBinder></PageBinder>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Canvas;
