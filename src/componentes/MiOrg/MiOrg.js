import './MiOrg.css'
const MiOrg = (props)=>{
    //estados - hooks
    //useState
    //useStade()
    //const [nombreVariable,FuncionActuliza]=useState(valorInicial)
    // const [mostrar,actulizarMostrar]= useState(true)
    // const manejarClick = ()=>{
    //     console.log("mostar/ocultar",!mostrar)
    //     actulizarMostrar(!mostrar)
    // }

    return (
    <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
    )
}

export default MiOrg;