import { Link } from "react-router-dom";

export function Productos({productos}){
    // const productos = [
    //     {id:1, nombre:"Producto 1", precio:100},
    //     {id:2, nombre:"Producto 2", precio:200},
    //     {id:3, nombre:"Producto 3", precio:300},
    //     {id:4, nombre:"Producto 4", precio:400},
    //     {id:5, nombre:"Producto 5", precio:500},
    // ];
    return(
        <section>
            <h1>Productos</h1>
            <ul>
                {productos.map( prod=> (
                    <li key={prod.id}>
                        <Link to={`/productos/${prod.id}`}>{prod.nombre} </Link>
                    </li>) )}
            </ul>
        </section>
    )
}