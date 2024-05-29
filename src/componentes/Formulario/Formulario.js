import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {

    const manejarEnvio= (evento)=>{
        evento.preventDefault()
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>
                    Rellena el formulario para crear el colaborador.
                </h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto"/>
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la Foto"/>
                <ListaOpciones/>
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )

}

export default Formulario