import {useState} from "react"
import {Button} from "./components/Button"
import {Radio} from "./components/Radio"
import { Modal } from "./components/Modal"

const users = [
    {name: "Adrian", lastname: "Perez"},
    {name:"Agustin", lastname: "Gomez"}
]

function App() {

    const rta =users.map(user => {
        return {...user /* Agarro nombre y apellido */, country: "Argentina" /* Le agrego country */ }
    })

    console.log(rta)

   return users.map(user => {
    return(
    <ul>
        <li><strong>Nombre:</strong> {user.name}</li>
        <li><strong>Apellido:</strong> {user.lastname}</li>
    </ul>
    )
   })
}



export default App;