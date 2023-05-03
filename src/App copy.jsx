import {Button} from "./components/Button"

const primary = "#123456"

function App() {
    console.log("Hola Mundo")

    const styles = {
        backgroundColor: primary,
        color: "white",
        fontSize: 10
    }

    return (
        <div className="app">
            <header style = {styles}>
                <h1>Mi primera App</h1>
            </header>

            <p>Hola mundo</p>

            <img src="" alt="" />
            <span>Hola</span>

            <Button id="contact-button" className="btn btn-primary" text="Enviar" style={{backgroundColor: "red"}} onClick = {() => {console.log("Click al buton")}} />
            <Button id="signup-button" className="btn btn-secondary" text="Crear cuenta" style={{backgroundColor: "green"}} onClick = {() => {console.log("Click al buton signup")}} />
        </div>
    )
}

/* Tenemos dos botones que son el usan el mismo componente, pero tienen distinta apariencia, son reutilizables.  */

export default App;