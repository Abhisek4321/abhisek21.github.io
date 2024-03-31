import {useState} from "react"
import axios from "axios"
import style from "./home.module.css"


const Createuser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  
  let nameData=(e)=>{
    setName(e.target.value)
  }

  let salaryData=(e)=>{
    setSalary(e.target.value)
  }

  let companyData=(e)=>{
    setCompany(e.target.value)
  }
  
  let formHandle=(e)=>{
    e.preventDefault()
    let payLoad={name,salary,company}
    
    axios.post("http://localhost:3000/users",payLoad)
  

    .then(()=>{
      console.log("data has been added")
    })
    
    .catch(()=>{
      console.log("SOMETHING IS FISHY");
    })
  }

  return (
    <div id={style.myForm} >
      
            <form action="" >
              <tr>
                <th colSpan="2"><h4>user Details</h4></th>
              </tr>


            <tr>
                    <td><label htmlFor="">Name  </label></td>
                    <td>    <input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">    Salary </label></td>
                    <td>    <input type="text" value={salary} onChange={salaryData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">  company  </label></td>
                    <td> <input type="text" value={company} onChange={companyData}/></td>
                </tr>
                <tr>
                    <th colSpan="2" onClick={formHandle}><button>submit</button></th>
                    
                </tr>
               
            </form>
         
      

    </div>
  )
}

export default Createuser