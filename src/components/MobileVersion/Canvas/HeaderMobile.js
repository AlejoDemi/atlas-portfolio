import React, {useEffect, useState} from 'react';
import logo from "../../../assets/Canvas/logo.png";
import "./HeaderMobile.css"

const HeaderMobile = () => {
    const [bright ,setBright] = useState(false);

    useEffect(() => {
        toggleBrightness()
    }, [bright]);



    const toggleBrightness=()=>{
        setTimeout(()=>setBright(true),1500)
    }

    return (
        <div className={"headerMobile"} style={{position:"relative",height:"100vh",zIndex:"1"}}>
            <img src={logo} className={bright?"logoBright":"logo"}/>
            <div className={"slogan"}>MOVING THE WORLD</div><div style={{color:"#FFB4D8",fontStyle:"italic"}} className={"slogan"}>FORWARD.</div>
        </div>
    );
};

export default HeaderMobile;
