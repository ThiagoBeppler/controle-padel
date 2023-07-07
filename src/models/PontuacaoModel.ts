export class PontuacaoModel{
    pontos1: number;
    games1: number;
    sets1: number;
    pontos2: number;
    games2: number;
    sets2: number;
    placar: string[];
    tieBreak1: number;
    tieBreak2: number;
    jogoFinalizado: boolean;
    pontuacaoBkp: PontuacaoModel | null;

    constructor( pontos1: number, games1: number, sets1: number, pontos2: number, games2: number, sets2: number, placar: string[],tieBreak1: number, tieBreak2: number, jogoFinalizado: boolean){
        this.pontos1 = pontos1;
        this.games1 = games1;
        this.sets1 = sets1;
        this.pontos2 = pontos2;
        this.games2 = games2;
        this.sets2 = sets2;
        this.placar = placar;
        this.tieBreak1 = tieBreak1;
        this.tieBreak2 = tieBreak2;
        this.jogoFinalizado = jogoFinalizado;
        this.pontuacaoBkp = null;
    }

}