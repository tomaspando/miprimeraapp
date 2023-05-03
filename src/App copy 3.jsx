import {useState} from "react"
import {Button} from "./components/Button"
import {Radio} from "./components/Radio"
import { Modal } from "./components/Modal"



function App() {

    const [showRadio, setShowRadio] = useState(false)
    const toggleRadio = () => {
        setShowRadio(!showRadio)
    }
   return(
    <>
        <Button text="Activar Radio" className="btn btn-primary" onClick={toggleRadio} />
        <br />

       {showRadio && <Radio/>}

     
    </>
   )
}



export default App;