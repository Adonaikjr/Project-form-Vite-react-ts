import { Container } from './styled';
import Form from '../From/index';

const Topo = () =>{
  return(
    <Container>
      <header>
        <section>
        <p>
          O primeiro passo, é preencher esse formulário de inscrição.
        </p>
        <br/>
        <h1> Crie e compartilhe seu evento</h1>
        </section>
      </header>
      <Form/>
      
    </Container>

  );
}
 export default Topo;