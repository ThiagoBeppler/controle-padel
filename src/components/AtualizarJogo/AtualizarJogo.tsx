import { useState } from "react";

import Pontuar from "../util/PontuarUtil";
import { PontuacaoModel } from "../../models/PontuacaoModel";

import "./AtualizarJogo.css"

function AtualizarJogo(){
    
    const [pontuacao, setPontuacao] = useState(new PontuacaoModel(0, 0, 0, 0, 0, 0, [], 0, 0, false));

    return(
        <div className="main">

            <h2>Atualizar Jogo</h2>

            <p> Pontuação: {pontuacao.pontos1} / {pontuacao.pontos2}</p>
            <p> Game: {pontuacao.games1} / {pontuacao.games2}</p>
            <p> Set: {pontuacao.sets1} / {pontuacao.sets2}</p>
            { (pontuacao.tieBreak1 > 0  || pontuacao.tieBreak2 >0 ) && 
            <span>
                Tie Break: {pontuacao.tieBreak1} / {pontuacao.tieBreak2}
            </span> }
            <p> Placar: {pontuacao.placar.map((p) => {
                return (
                    <span>{p}, </span>
                );
            })}</p>

            <span>
                {pontuacao.jogoFinalizado == false ?
                <span>
                    <button onClick= {() => setPontuacao( Pontuar(pontuacao, 1))} disabled = {pontuacao.jogoFinalizado}>Pontuar Dupla 1</button> &nbsp;  &nbsp;
                    <button onClick= {() => setPontuacao( Pontuar(pontuacao, 2))} disabled = {pontuacao.jogoFinalizado}>Pontuar Dupla 2</button> <br />
                </span> :
                <span>
                    Jogo Finalizado
                </span>}
                <br />
            </span>

            <div>
                {pontuacao.pontuacaoBkp !== null &&
                <button onClick={() => setPontuacao(Desfazer(pontuacao) ?? pontuacao)}> Desfazer</button>
                }
                <br />
            </div>
            <hr />

        </div>
    )
}

function Desfazer(pontuacao: PontuacaoModel)
{
    let novaPontuacao = { ...pontuacao, placar: pontuacao.placar.map(item => item) } 
    novaPontuacao.pontuacaoBkp = {...novaPontuacao}; 

    return({...pontuacao.pontuacaoBkp ?? novaPontuacao} )
}

export default AtualizarJogo