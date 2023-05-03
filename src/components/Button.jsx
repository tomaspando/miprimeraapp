//Al componente lo creamos como si fuera una funcion. Por lo general, el componente lleva el mismo nombre que el archivo. 

import { useState } from "react";

//JSX es parecido a HTML

export const Button = ({id, className, type, style, onClick, text, value}) => {

    //const [value, setValue] = useState()/* Como es una FUNCION tiene que ser invocado, por ende parentesis al final. Value: El valor del estado; SetValue: Lo que me permite modificar el estado  */
    
    //const {id, className, type, style, onClick, text} = props /* Todo lo que esta a la izquierda del = podría ir en reemplazo del props y la app seguiría funcionando */
    
    return ( /* Parentesis para escribir codigo en varias lineas */

        <button 
            id={id}
            className={className}
            type={type}
            style={style}
            onClick={() =>onClick(value)} 
        >{/* En react es muy común poner los atributos de un elemento de esta manera */}

           {text} {value}
        </button>
    )
};


//Todos los atributos pueden ser dinámicos. Por lo tanto, las props que llegan como parametro pueden ser todos esos datos, para que cuando alguien quiera usar ese boton manden esos datos por medio de esos props. Para eso destructuramos props. 

//Las props las recibe como un objeto como parametro, por eso lo podemos destructurar el objeto para usar las props y darle caracteristicas al boton 

//Un componente va a devolver siempre JSX porque es algo que queremos mostrar en pantalla, lo que no queremos mostrar no sería un componente, puede ser una funcion, pero si queremos devolver JSX se va a tratar de un componente. Ademas los componentes reciben un parametro que se llame props