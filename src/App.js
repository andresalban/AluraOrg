import {useState} from "react";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
    //estados
    const [mostrarFomulario, actulizarMostrar] = useState(false)
    const [colaboradores, actualizarColaboradores] = useState([
        {
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor"
        },
        {
            equipo: "Programación",
            foto: "https://github.com/genesysrm.png",
            nombre: "Genesys Rondón",
            puesto: "Desarrolladora de software e instructora"
        },
        {
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam"
        },
        {
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor"
        },
        {
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack"
        }

    ])

    //ternario condicion ? seMuestas:NoSemuestra
    //condicion && seMuestra
    const cambiarMostrar = () => {
        actulizarMostrar(!mostrarFomulario)
    }

//registrar colaborador
    const registrarColaborador = (colaborador) => {
        console.log("nuevo Colaborador", colaborador)
        //spread operatior
        actualizarColaboradores([...colaboradores, colaborador])
    }
//Eliminar Colaborador
    const eliminarColaboraodor = () =>{
        console.log("Eliminar colaborador");

    }

//lista de equipos
    const equipos = [
        {
            titulo: "Programación",
            colorPrimario: "#57C278",
            colorSecundario: "#D9F7E9"
        },
        {
            titulo: "Front End",
            colorPrimario: "#82CFFA",
            colorSecundario: "#E8F8FF"
        },
        {
            titulo: "Data Science",
            colorPrimario: "#A6D157",
            colorSecundario: "#F0F8E2"
        },

        {
            titulo: "Devops",
            colorPrimario: "#E06B69",
            colorSecundario: "#FDE7E8"
        },

        {
            titulo: "UX y Diseño",
            colorPrimario: "#DB6EBF",
            colorSecundario: "#FAE9F5"
        },
        {
            titulo: "Móvil",
            colorPrimario: "#FFBA05",
            colorSecundario: "#FFF5D9"
        },
        {
            titulo: "Innovación y Gestión",
            colorPrimario: "#FF8A29",
            colorSecundario: "#FFEEDF"
        },

    ]

    return (
        <div>
            <Header/>
            {/*{mostrarFomulario  ? <Formulario /> : < > </>}*/}
            {
                mostrarFomulario && <Formulario
                    equipos={equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                />
            }

            <MiOrg cambiarMostrar={cambiarMostrar}/>
            {
                equipos.map((equipo) => <Equipo
                        key={equipo.titulo}
                        datos={equipo}
                        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                        eliminarColaborador={eliminarColaboraodor}
                    />
                )
            }
            <Footer/>
        </div>
    );


}

export default App;
