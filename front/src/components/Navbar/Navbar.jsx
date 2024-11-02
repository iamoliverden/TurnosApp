import {Container, ButtonContainer} from "./styled.js"

const Navbar = () => {

    const appButton = () => {
        console.log("Botón para redirigir a agenda de turno");
    };

    const profileButton = () => {
        console.log("Botón para redirigir al perfil");
    };

    const aboutUsButton = () => {
        console.log("Botón para redirigir a 'sobre nosotros'");
    };

    return (
        <Container>
            <h2>TurnosApp</h2>
            <ButtonContainer>
                <button onClick={appButton}>Agenda turno</button>
                <button onClick={profileButton}>Perfil</button>
                <button onClick={aboutUsButton}>Sobre nosotros</button>
            </ButtonContainer>
        </Container>
    );
};

export default Navbar
