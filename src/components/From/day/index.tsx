import {Container} from '../../Inputs/Campos/styled.text';




const Day = () =>{
  return(

    <Container>
    
      <form>
        <fieldset>
        <legend>
          <h3>Dia e hora</h3>
        </legend>
      
          <label><p>Data</p></label>
          
          <input type='date'/>
          
          <label><p>Hora</p></label>
          <input type='time'/>
      
          <label><p>Até</p></label>
        
          <input type='time'/>
          
        </fieldset>
      </form>
    </Container>

    
  )
}
export default Day;