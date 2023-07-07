import { JogoModel } from "../../models/JogoModel"

import setJogo from "../util/JogoUtil"

import "./ListarJogo.css"

function ListarJogo(listaJogos: Array<JogoModel>){


    if(Object.keys(listaJogos).length === 0){

        let auxList = new Array<JogoModel>;

        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());
        auxList.push(setJogo());

        listaJogos = auxList;
    }

    return(

        <div>

            <div className="main">
                <h2>Listagem Jogos</h2>
            </div>

            <div className="container" >

                {listaJogos.map((jogo)=> {
                    return(

                        <div className="jogo">
                            <div className="jogoMain">
                                <div className="dupla">
                                    <p> Dupla1: </p>
                                    <p>{jogo.dupla1.jogador1} </p> 
                                    <p>{jogo.dupla1.jogador2} </p> 
                                </div>

                                <div className="placar">

                                    {jogo.placar.map((p) => {
                                        return (
                                            <p> {p}  </p>
                                        );
                                    })}
                        
                                </div>

                                <div className="dupla">
                                    <p>Dupla2: </p>
                                    <p>{jogo.dupla2.jogador1} </p> 
                                    <p>{jogo.dupla2.jogador2} </p> 
                                </div>

                            </div>

                            <div className="jogoDesc">
                                <p>Categoria: {jogo.categoria}</p>
                                <p>Fase: {jogo.fase} | {jogo.grupo}</p>
                            </div>
                        </div>
                    )
                })}

                
            </div>

        </div>
        
    )
}

export default ListarJogo