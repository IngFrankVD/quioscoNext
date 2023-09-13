import { useEffect, useState } from "react";
import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers";

const ModalProducto = () => {
    const { producto , handleChangeModal , handleAgregarPedido , pedido} = useQuiosco();
    const [cantidad, setCantidad] = useState(1);
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        if(pedido.some((pedidoState) => pedidoState.id === producto.id)){
            const productoeEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id);
            setEdicion(true);
            setCantidad(productoeEdicion.cantidad);
        }
    }, [producto, pedido])
  return (
    <div className="md:flex gap-10" >
        <div className="md:w-1/3" >
            <Image
                width={300}
                height={400}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className="md:w-2/3" >
        <div className="flex justify-end" >
            <button
                onClick={handleChangeModal}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            </button>
        </div>
            <h1 className="text-3xl font-bold mt-5 " > 
                {producto.nombre}
            </h1>
            <p className="mt-5 font-black text-5xl text-amber-500" >
                {formatearDinero(producto.precio)}
            </p>

            <div className="flex gap-4 mt-5" >
                <button type="button" onClick={()=>{
                    if(cantidad<=1) return 
                    setCantidad(cantidad - 1)
                }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>

                <p className="text-3xl" >
                    {cantidad}
                </p>

                <button type="button" onClick={()=>{
                    if(cantidad>=5) return 
                    setCantidad(cantidad + 1)
                }} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                </button>
            </div>

            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5
                text-white font-bold uppercase"
                onClick={() => { handleAgregarPedido({...producto, cantidad}) }}
            >
                {edicion? "Guardar cambios" : "Añadir al pedido"}
            </button>

        </div>
    </div>
  )
}

export default ModalProducto