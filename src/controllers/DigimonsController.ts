import { Request, Response } from "express";
import DigimonsService from "../services/DigimonsService";

export function getAll(_: any, res: Response) {
    const digimons = DigimonsService.getAll();
    res.status(200).json(digimons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.get(id);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
export function getName(req:Request, res:Response){
    try{
        const name= req.params.name && req.params.name|| undefined;
        if(!name){ throw "Se requiere el nombre del Pokemon."} 
        const pokemones = DigimonsService.getName(name);
        res.status(200).json(pokemones);
    }catch(error){
        res.status(400).send(error);
    }
}
export function getType(req:Request, res:Response){
    try{
        const type= req.params.type && req.params.type|| undefined;
        if(!type){ throw "Se requiere el tipo del Pokemon."} 
        const pokemones = DigimonsService.getType(type);
        res.status(200).json(pokemones);
    }catch(error){
        res.status(400).send(error);
    }
}
export function getCrear(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        const name = req.params.name && req.params.name;
        const tipo = req.params.nameType && req.params.nameType ;
        const fuerte = req.params.strong && req.params.strong ;
        const debil = req.params.weak && req.params.weak ;
        const img = req.params.img && req.params.img ;
        if(!id){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.getCrear(id,name,tipo,fuerte,debil,img);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
export function getFuerte(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        if(!name){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.getFuerte(name);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
export function getDebil(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        if(!name){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.getDebil(name);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
