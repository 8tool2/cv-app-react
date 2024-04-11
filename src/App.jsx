import {useState} from 'react'

function App(){

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phoneNumber: ''
  });


  const handleSubmit = (event) =>{
    event.preventDefault;
    console.log(formData,event.target.value);
  }
  
  const handleChange = (event) =>{
    console.log(event.target)

  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Name:</label>
      <input type="text" 
      id = "formName.value" 
      onChange={handleChange}></input>
      <label htmlFor="Email">Email:</label>
      <input type="text" 
      id = "formEmail.value" 
      onChange={handleChange}
      ></input>
      <label htmlFor="Phone Number">Phone Number:</label>
      <input type="text"  
      id = "formPhone.value" 
      onChange={handleChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App