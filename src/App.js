import {useState} from "react";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";

function App() {
    const [mostrarFomulario,actulizarMostrar]=useState(true)
    //ternario condicion ? seMuestas:NoSemuestra
    //condicion && seMuestra
    const cambiarMostrar = ()=>{
        actulizarMostrar(!mostrarFomulario)
}
    return (
        <div>
            <Header/>
            {/*{mostrarFomulario  ? <Formulario /> : <> </>}*/}
            {mostrarFomulario && <Formulario/> }
            <MiOrg cambiarMostrar={cambiarMostrar}/>
        </div>
    );
}

export default App;
