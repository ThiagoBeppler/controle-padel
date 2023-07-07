import { PontuacaoModel } from "../../models/PontuacaoModel";

export default function Pontuar(pontuacao: PontuacaoModel, duplaPontuar: number){

    let novaPontuacao = { ...pontuacao, placar: pontuacao.placar.map(item => item) } 
    novaPontuacao.pontuacaoBkp = {...pontuacao, placar: pontuacao.placar.map(item => item)}; 

    if(novaPontuacao.sets1 == 1  && novaPontuacao.sets2 == 1)
        return PontuarTieBreacao(novaPontuacao,duplaPontuar)

    if(novaPontuacao.games1 == 6 && novaPontuacao.games2 == 6)
        return PontuarTieBreak(novaPontuacao, duplaPontuar);

    if(duplaPontuar == 1){

        switch (novaPontuacao.pontos1) {
            case 0:
                novaPontuacao.pontos1 = 15
                break;
    
            case 15:
                novaPontuacao.pontos1 = 30
                break;
    
            case 30:
                novaPontuacao.pontos1 = 40
                break;
    
            case 40:
                novaPontuacao.pontos1 = 0 
                novaPontuacao.pontos2 = 0 
                novaPontuacao.games1 ++; 
                break;
        }
    
        if(novaPontuacao.games1 >= 6 && (Math.abs(novaPontuacao.games1 - novaPontuacao.games2) > 1)){
    
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)))
            novaPontuacao.games1 = 0
            novaPontuacao.games2 = 0
            novaPontuacao.sets1 ++

        }
        
    }
    else{

        switch (novaPontuacao.pontos2) {
            case 0:
                novaPontuacao.pontos2 = 15
                break;
    
            case 15:
                novaPontuacao.pontos2 = 30
                break;
    
            case 30:
                novaPontuacao.pontos2 = 40
                break;
    
            case 40:
                novaPontuacao.pontos2 = 0 
                novaPontuacao.pontos1 = 0 
                novaPontuacao.games2 ++; 
                break;
        }
    
        if(novaPontuacao.games2 >= 6 && (Math.abs(novaPontuacao.games1 - novaPontuacao.games2) > 1)){
    
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)))
            novaPontuacao.games2 = 0
            novaPontuacao.games1 = 0
            novaPontuacao.sets2 ++
        }
        
    }

    if(ValidarFinalJogo(novaPontuacao))
        novaPontuacao.jogoFinalizado = true;

    return(novaPontuacao)
}

function PontuarTieBreak(pontuacao: PontuacaoModel, duplaPontuar: number){

    let novaPontuacao = { ...pontuacao} 

    if(duplaPontuar == 1){

        novaPontuacao.tieBreak1 ++;
        if(novaPontuacao.tieBreak1 >= 7 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.games1 ++;
            novaPontuacao.sets1 ++;
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)));
            novaPontuacao.games1 = 0;
            novaPontuacao.games2 = 0;
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }

    }
    else{

        novaPontuacao.tieBreak2 ++;
        if(novaPontuacao.tieBreak2 >= 7 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.games2 ++;
            novaPontuacao.sets2 ++;
            novaPontuacao.placar.push(String(novaPontuacao.games1).concat("/", String(novaPontuacao.games2)));
            novaPontuacao.games1 = 0;
            novaPontuacao.games2 = 0;
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }
    }

    if(ValidarFinalJogo(novaPontuacao))
        novaPontuacao.jogoFinalizado = true;

    return(novaPontuacao);
}

function PontuarTieBreacao(pontuacao: PontuacaoModel, duplaPontuar: number){

    let novaPontuacao = { ...pontuacao} 

    if(duplaPontuar == 1){

        novaPontuacao.tieBreak1 ++;
        if(novaPontuacao.tieBreak1 >= 10 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.sets1 ++;
            novaPontuacao.placar.push(String(novaPontuacao.tieBreak1).concat("/", String(novaPontuacao.tieBreak2)));
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }

    }
    else{

        novaPontuacao.tieBreak2 ++;
        if(novaPontuacao.tieBreak2 >= 10 && Math.abs(novaPontuacao.tieBreak1 - novaPontuacao.tieBreak2) > 1 ){
            novaPontuacao.sets2 ++;
            novaPontuacao.placar.push(String(novaPontuacao.tieBreak1).concat("/", String(novaPontuacao.tieBreak2)));
            novaPontuacao.tieBreak1 = 0;
            novaPontuacao.tieBreak2 = 0;
        }
    }

    if(ValidarFinalJogo(novaPontuacao))
        novaPontuacao.jogoFinalizado = true;

    return(novaPontuacao)
}

function ValidarFinalJogo(pontuacao: PontuacaoModel)
{
    if(pontuacao.sets1 == 2 || pontuacao.sets2 == 2){
        return true;
    }

    else
        return false;
}