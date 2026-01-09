import { useNavigate, useParams } from "react-router-dom";

export function ServicioDetalle({servicios}){

    const {id} = useParams();
    const navigate = useNavigate();

    function handleGoBack(){
        navigate(-1)
    };

    const myServicio = servicios.find( serv => serv.id.toString() === id )
    return(
        <>
            <h2>Detalle de servicios</h2>
            <h3>{`Servicio: ${myServicio.nombre}`}</h3>
            <h3>{`Costo: $ ${myServicio.precio}`}</h3>
            <button onClick={handleGoBack}>Atras</button>
        </>
    )
}