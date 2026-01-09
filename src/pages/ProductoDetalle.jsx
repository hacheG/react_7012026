import { useParams, useNavigate } from "react-router-dom"

export function ProductoDetalle({productos}){
    // console.log(useParams());
    const { id } = useParams()
    const navigate = useNavigate();

    function handleGoBack(){
        navigate(-1);
    }

    function obtenerProducto(id, productos){
        // const productos = [
        //     {id:1, nombre:"Producto 1", precio:100},
        //     {id:2, nombre:"Producto 2", precio:200},
        //     {id:3, nombre:"Producto 3", precio:300},
        //     {id:4, nombre:"Producto 4", precio:400},
        //     {id:5, nombre:"Producto 5", precio:500},
        // ];

        return productos.find( prod => prod.id.toString() === id )
    };

    const myProducto = obtenerProducto(id, productos)
    
    return(
        <section>
            <h2>Producto detalle</h2>
            <h3>{`Nombre: ${myProducto.nombre}`}</h3>
            <h4>{`Costo: $ ${myProducto.precio}`}</h4>
            <button onClick={handleGoBack}>Atras</button>
        </section>
    )
}