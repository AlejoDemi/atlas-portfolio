import './App.css';
import Canvas from "./components/Canvas/Canvas";
import {useEffect, useState} from "react";
import CanvasMobile from "./components/MobileVersion/Canvas/CanvasMobile";
import {PacmanLoader} from "react-spinners";

function App() {

  const [timer, setTimer] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setTimer(false),2500)
  },[])

  const [isDesktop, setDesktop] = useState(window.innerWidth > 900);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 900);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

  return (
      timer?
          <Spinner></Spinner>
          :
            isDesktop?
                <Canvas></Canvas>

           : <CanvasMobile></CanvasMobile>




  );
}

export default App;

const Spinner =()=>{
    return(
        <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignContent:"center",background:"#001027"}}>
            <div style={{margin:"auto"}}>
                <PacmanLoader  color={"#E392BE"}  size={20} />

            </div>
        </div>
    );
}
