import { Container } from './styled.text';

const Number = () =>{
  return(
    <Container>
      <label > <p>Whatsapp para Contato   <span>(somente números)</span></p>
      </label>

      <input type="number" placeholder='Numero' name='number' id='number' />
    </Container>
  )
}
export default Number;