import { Container, Content, Main } from './styled';
import Text from '../Inputs/Campos/event';
import Links from '../Inputs/Campos/link';
import Number from '../Inputs/Campos/number';
import Extra from '../Inputs/Campos/extras';
import Categoria from '../Inputs/Campos/categoria';
import Privacidade from './Privacidade/privacidade';
import Day from './day/index';
import Footer from '../footer/index';

const Form = () =>{
  return(
      <Container>
        
        
        <Content>
          <main>
        <form>
          
          <fieldset>
            <legend> 
              <h3>Informações do Evento</h3>
            </legend>
              <Text/>
              <Links/>
              <Number/>
              <Extra/>
              <Categoria/>
          </fieldset>
          <Privacidade/>
          <Main>
          <Day/>
          </Main>
          <Footer/>
        </form>
          </main>
          
        </Content>
        
        
         
      
      </Container>
      
  )
} 
export default Form;