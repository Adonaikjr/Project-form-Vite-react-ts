import { Container } from './styled.number';

const Number = () =>{
  return(
    <Container>
      <label for='number'> <h1>Number</h1> </label>
      <input type="number" placeholder='number' name='number' id='number' />
    </Container>
  )
}
export default Number;