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
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required={true}/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required/>
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de la Foto" required/>
                <ListaOpciones/>
                <Boton>
                    Crear
                </Boton>
            </form>
        </section>
    )

}

export default Formulario