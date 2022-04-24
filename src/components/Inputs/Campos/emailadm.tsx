import { Container } from './styled.text';

const Emailadm = () => {
  return(
    <Container>
    <label>
      <p>
        E-mail do administrador <span>(digite um e-mail válido)</span>
      </p>
    </label>
    <input type="email" placeholder="digite o e-mail do administrador"/>
    </Container>
  )
}
export default Emailadm;