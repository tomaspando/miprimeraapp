import {Button} from "./Button"
import { useEffect, useState } from "react";

export const Radio = () => {

    const [memo, setMemo] = useState("93.3")
    const changeMemo = (value) => {
     setMemo(value)
    };
/*     console.log("Render")
 */    

//useEffect: Es una funcion que recibe dos parametros: el primero es una funcion y el segundo es un Array de Dependencias. En las llaves de la funcion resuelvo lo que yo quería. El Array de Dependencias me sirve para decirle al useEffect en qué casos se tiene que ejecutar.  De entrada, la primera vez, se ejecuta siempre; pero podemos hacer que se vuelva a ejecutar en algún momento sin que haya dejado de existir el componente. "Si este dato cambia, volvé a ejecutarte". Que el array quede vacio, quiere decir que no depende de ningún valor, se ejecuta la primera vez. El useEffect lo podemos ejecutar cuando el componente se monta, cuando se actualiza o cuando deja de existir, eso lo podemos capturar en el return de la funcion. Me da la posibilidad de ejecutar un bloque de codigo antes de que  el componente desaparezca del DOM. 

    useEffect(() => {
        console.log("Render")

        return () => {
            console.log("El componente se va a desmontar")
        }
    }, [])











return(
        <>
        <div>
            {memo}
        </div>

        <Button text="Radio 1" value="97.1" className="btn" onClick={changeMemo}/>
        <br />
        <Button text="Radio 2" value="95.1" className="btn" onClick={changeMemo}/>
        <br />
        <Button text="Radio 3" value="99.1" className="btn" onClick={changeMemo}/>
        </>
    )
};
