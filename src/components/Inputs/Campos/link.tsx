import {Container} from './styled.text';

const Links = () => {
  return(
    <Container>

      <label> 
      <p>Link do Evento (começe com https://)</p>
      </label>
      
      <input type="text" name="Titulo" id="Titulo" placeholder='https://example.com'/>
      </Container>
  )
};
 
export default Links;