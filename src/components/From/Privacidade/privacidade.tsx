import {Container} from '../../Inputs/Campos/styled.text';
import Emailadm from '../../Inputs/Campos/emailadm';
import Pass from '../../Inputs/Campos/pass';

import Check from '../../Inputs/Campos/check';

const Privacidade = () => {
  return(
    <Container>
    <form>
      <fieldset>
        <legend>
          <h3>Privacidade</h3>
        </legend>
        <Emailadm/>
        <Pass/>
        <Check/>
      </fieldset>
    </form>
    </Container>
 
  )
}
export default Privacidade;