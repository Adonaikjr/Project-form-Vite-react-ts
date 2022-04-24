import { Container, Content } from './styled.text';
const Extra = () =>{
  return(
    <Container>
      <label>
      <p>Informações extras</p>
      </label>
      <Content>
      <input type="text" id='extra' placeholder='Digite sua mensagem Aqui :)'/>
      </Content>
    </Container>
  )
}
export default Extra;