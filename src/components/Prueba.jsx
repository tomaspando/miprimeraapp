export const Prueba = () => {
    return(
        [
        <div>
            Hola Mundo
        </div>,
        <div>
            Buenos dias
        </div>
        ]
    )/* No podemos retornar más de un elemento pero sí un Array u Objeto; sin embargo, se usan los fragments de React */
}

//Fragments: Son piquitos vacios que sirven para devolver más de un elemento ya que reconoce todos los elementos que hay dentro como hijos. 

export const Prueba2 = () => {
    return (
        <>
        <div>
            Hola Mundo
        </div>
        <div>
            Buenos dias
        </div>
        </>
    )
}