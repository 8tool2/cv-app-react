import {useState} from 'react'

function App(){

const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [email,setEmail] = useState("")
const [submittedData, setSubmittedData] = useState(null);
const [school,setSchool] = useState("")
const [study,setStudy] = useState("")
const [date,setDate] = useState("")
 


  const handleSubmit = (event) => {
  event.preventDefault();
  const formdata = { name: name,
   email: email,
   phone: phone,
    school: school,
    study: study,
    date: date,
  }
  setSubmittedData(formdata)
  console.log(formdata)
}
 



  const handleChange = (event) =>{
    const {id,value} = event.target
    switch(id){
      case "formName":
        setName(value);
        break;
      case "formEmail":
        setEmail(value);
        break;
      case "formPhone":
        setPhone(value);
        break;
      case "school":
        setSchool(value);
        break;
      case "study":
        setStudy(value);
        break;
      case "date":
        setDate(value);
        break; 
    }
  }


  return(
    <div style= {{ display: 'flex', margin: '20px', border: '1px solid black', padding: '10px' }}>
      <div>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="Name">Name:</label>
      <input type="text" 
      id = "formName" 
      onChange={handleChange}></input>
      </div>
      <div> 
      <label htmlFor="Email">Email:</label>
      <input type="text" 
      id = "formEmail" 
      onChange={handleChange}
      ></input> 
      </div>
      <div> 
      <label htmlFor="Phone Number">Phone Number:</label>
      <input type="text"  
      id = "formPhone" 
      onChange={handleChange}
      ></input>
       </div> 
      <button type="submit">Submit</button>
     
    </form>
    <br/>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="school">School:</label>
      <input type="text" 
      id = "school" 
      onChange={handleChange}></input>
      </div>
      <div> 
      <label htmlFor="study">Title of Study:</label>
      <input type="text" 
      id = "study" 
      onChange={handleChange}
      ></input> 
      </div>
      <div> 
      <label htmlFor="date">Date of Study:</label>
      <input type="date"  
      id = "date" 
      onChange={handleChange}
      ></input>
       </div> 
      <button type="submit">Submit</button>
     
    </form>
    </div>
    <br/>
  
    {submittedData && (
           <div>
            <h2>CV:</h2>
            <div style={{ display: 'flex', margin: '20px', border: '1px solid black', padding: '10px' }}>
            <p style={{ margin: '20px' }}>Name: {submittedData.name}</p>
            <p style={{ margin: '20px' }}>Email: {submittedData.email}</p>
            <p style={{ margin: '20px' }}>Phone: {submittedData.phone}</p>
            </div>
            <div style={{ display: 'flex', margin: '20px', border: '1px solid black', padding: '10px' }}>
            <p style={{ margin: '20px' }}>School: {submittedData.school}</p>
            <p style={{ margin: '20px' }}>Title: {submittedData.study}</p>
            <p style={{ margin: '20px' }}>Date: {submittedData.date}</p>
            </div>
           </div>
        )}
    </div>
  )
}

export default App