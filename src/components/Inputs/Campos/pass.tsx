import {Container} from './styled.text';

const Pass = () =>{
  return(
    <Container>
      <label>
        <p>Senha de acesso para os participantes</p>
      </label>
      <input type="password" placeholder='Senha'/>
    </Container>
  )
}
export default Pass; 