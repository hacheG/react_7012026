import { Link } from "react-router-dom";

export function ServiciosLista({servicios}){
    return(
        <>
            <h2>Lista de Servicios</h2>
            <ul>
                { servicios.map( serv=> (
                    <li key={serv.id}>
                        <Link to={`/servicios/${serv.id}`} >{serv.nombre}</Link>
                    </li>) )}
            </ul>
        </>
    )
}