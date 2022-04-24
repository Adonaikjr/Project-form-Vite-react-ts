import {Container} from './styled.text';

const Text = () => {
  return(
    <Container>

      <label> 
      <p>Titulo do evento (Minimo 8 caracteres)</p>
      </label>
      
      <input type="text" name="Titulo" id="Titulo" placeholder='Titulo do evento'/>
     
      </Container>
  )
};
 
export default Text;