import { Container } from './styled.password';

const Password = () =>{
  return(
    <Container>

       <label for="password"> <h1>Password</h1> </label>
      
      <input type="password" name="Password" id="Password" placeholder='Password'/>

    </Container>
  )
}

export default Password;