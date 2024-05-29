import './ListaOpciones.css'

const ListaOpciones = () => {

    //metodo map -> arreglo.map( (equipos,index) =>{
    // return <option></option>})
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Innocación y Gestión"
    ]



    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select>
                {equipos.map((equipo, index) =>
                    { return <option key={index}>{equipo}</option> }
                )}
            </select>
        </div>
    )
}

export default ListaOpciones