import { checkPropTypes } from 'prop-types';
import { Container } from './styled.checkbox';

const Checkbox = () => {
  return(
    <Container>
    <label> <h1>Checkbox</h1></label>
    <input type="checkbox" name='checkbox'id='checkbox'></input>
    </Container>
  )
}
export default Checkbox;