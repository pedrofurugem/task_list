import Titulo from '../../Components/Titulo'
import HomeImg from '../../img/icone-do-planejador-3d.png'

import { MainContainer, 
         Container, 
         LeftContainer,
         Botao,
         Image
        } from './styles'

export default function component(){
    return(<>
        <MainContainer>
          <Container>
            <LeftContainer>
               <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
               <Botao>Iniciar</Botao>
            </LeftContainer>
            <Image src={HomeImg} alt="imagem Home"/>
          </Container>
        </MainContainer>
    </> )
}
