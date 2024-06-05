import './Footer.css'

const Footer =() =>{
    return (
    <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/afalban/'>
                <img src="/img/linkedin.png" alt='Linkedin' />
            </a>
            <a target="_blank" rel="noreferrer" href='https://github.com/andresalban'>
                <img src="/img/github.png" alt='GitHub' />
            </a>
            <a  target="_blank" rel="noreferrer" href='https://www.instagram.com/afalban/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Andrés Alban</strong>
    </footer>

    )
}

export default Footer