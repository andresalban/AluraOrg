import {useState} from "react";
import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo,actualizarEquipo]=useState("")

    const manejarEnvio= (evento)=>{
        evento.preventDefault()
        let datosEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar)
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>
                    Rellena el formulario para crear el colaborador.
                </h2>
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingresar Nombre"
                    required={true}
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar Puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}

                />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingresar enlace de la Foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )

}

export default Formulario