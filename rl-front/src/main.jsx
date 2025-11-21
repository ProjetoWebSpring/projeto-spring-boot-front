import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cadastro from './pages/cadastro/cadastro'
import Lista from './pages/lista/lista'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lista />
  </StrictMode>,
)
