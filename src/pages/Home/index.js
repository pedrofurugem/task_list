import Titulo from '../../Components/Titulo'
import HomeImg from '../../img/icone-do-planejador-3d.png'
import { useNavigate } from 'react-router-dom'

import { MainContainer, 
         Container, 
         LeftContainer,
         Botao,
         Image
        } from './styles'

export default function component(){
  const navigate = useNavigate()
  function AcessRoute(){
    alert('acessando o todolist')
    navigate('/todolist/')
  }

    return(<>
        <MainContainer>
          <Container>
            <LeftContainer>
               <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
                <Botao onClick={AcessRoute}>Iniciar</Botao>
            </LeftContainer>
            <Image src={HomeImg} alt="imagem Home"/>
          </Container>
        </MainContainer>
    </> )
}
