import { memo, useState } from "react"
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
        <h1>Hola Mundo</h1>
        <Button text="Activar Radio" className="btn btn-primary" onClick={toggleRadio} />
        <br />

       {showRadio && <Radio/>}

       <Modal title="Soy un Modal" className="" id="">
        <div>Soy un DIV</div>
        <ul>
            <li>Soy un Item list</li>
        </ul>
        <table>
            <tr>
                <th>

                    Soy un Table Head
                </th>
            </tr>
        </table>
       </Modal>
    </>
   )
}



export default App;