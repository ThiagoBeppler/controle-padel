import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AtualizarJogo from './components/AtualizarJogo/AtualizarJogo.tsx'
import ListarJogo from './components/ListarJogo/ListarJogo.tsx'
import { JogoModel } from './models/JogoModel.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <AtualizarJogo/>
    <ListarJogo {...new Array<JogoModel>} />
  </React.StrictMode>,
)
