import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler( req , res ){

    const ordenes = await prisma.orden.findMany({
        where:{
            estado: false
        }
    });
    res.status(200).json(ordenes)

    if(req.method === "POST"){
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha
            }
        });
        res.json({orden});
    }
}