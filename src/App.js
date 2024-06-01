import {useState} from "react";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";

function App() {
    const [mostrarFomulario,actulizarMostrar]=useState(false)
    //ternario condicion ? seMuestas:NoSemuestra
    //condicion && seMuestra
    const cambiarMostrar = ()=>{
        actulizarMostrar(!mostrarFomulario)
}

//lista de equipos

    const equipos = [
        {
            titulo:"Programacion",
            colorPrimario:"#57C278",
            colorSecundario:"#D9F7E9"
        },
        {
            titulo:"Front End",
            colorPrimario:"#82CFFA",
            colorSecundario:"#E8F8FF"
        },
        {
            titulo:"Data Science",
            colorPrimario:"#A6D157",
            colorSecundario:"#F0F8E2"
        },

        {
            titulo:"Devops",
            colorPrimario:"#E06B69",
            colorSecundario:"#FDE7E8"
        },

        {
            titulo:"UX y Diseño",
            colorPrimario:"#DB6EBF",
            colorSecundario:"#FAE9F5"
        },
        {
            titulo:"Móvil",
            colorPrimario:"#FFBA05",
            colorSecundario:"#FFF5D9"
        },
        {
            titulo:"Innovación y  Gestión",
            colorPrimario:"#FF8A29",
            colorSecundario:"#FFEEDF"
        },

    ]

    return (
        <div>
            <Header/>
            {/*{mostrarFomulario  ? <Formulario /> : <> </>}*/}
            {mostrarFomulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} />}
            <MiOrg cambiarMostrar={cambiarMostrar}/>
            {
                equipos.map( (equipo)=>
                     <Equipo key={equipo.titulo} datos={equipo} />
                )
            }

        </div>
    );
}

export default App;
