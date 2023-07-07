import { DuplaModel } from "./DuplaModel";

export class JogoModel{
    dupla1: DuplaModel;
    dupla2: DuplaModel;
    placar: string[];
    categoria: string;
    fase: string;
    grupo: string;

    constructor(dupla1: DuplaModel, dupla2: DuplaModel,placar: string[], categoria: string, fase: string, grupo: string){
        this.dupla1 = dupla1;
        this.dupla2 = dupla2;
        this.placar = placar;
        this.categoria = categoria;
        this.fase = fase;
        this.grupo = grupo;
    }
}