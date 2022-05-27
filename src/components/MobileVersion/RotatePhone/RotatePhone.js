import React from 'react';
import layer1 from "../../../assets/Canvas/layer1-icon.svg";
import layer2 from "../../../assets/Canvas/layer2.svg";
import layer3 from "../../../assets/Canvas/layer3.svg";
import layer4 from "../../../assets/Canvas/layer4.svg";
import layer5 from "../../../assets/Canvas/layer5.svg";
import layer6 from "../../../assets/Canvas/layer6.svg";


const styles = {
    layer1: {
        backgroundImage: `url(${layer1})`,
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

const RotatePhone = () => {
    return (
        <div style={{height:"100vh",width:"100vw"}}>
            <div style={styles.layer1}></div>
            <div style={styles.layer2}></div>
            <div style={styles.layer3}></div>
            <div style={styles.layer4}></div>
            <div style={styles.layer5}></div>
            <div style={styles.layer6}></div>

        </div>
    );
};

export default RotatePhone;
