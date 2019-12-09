import React from 'react'
import axios from 'axios'
//import swal from 'sweetalert'
//import './App.css'
import { FormGroup} from 'reactstrap'
class Log extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }

        
    }

    handleEmail=(e)=>
    {
        const email=e.target.value
        this.setState({email})
    }

     handlePassword=(e)=>{
         const password=e.target.value
         this.setState({password})
     }

     handleSubmit=(e)=>{
         e.preventDefault()
         const data={
             email:this.state.email,
             password:this.state.password
         }
         axios.post('http://localhost:3015/users/login',data)
        .then((response)=>{
            console.log(data)
           
            if(response.data.hasOwnProperty('error')){
                alert(response.data.message)
                console.log(response.data)
            }else{
                const token=response.data.token
               // console.log(token)
                localStorage.setItem('authToken',token)
                console.log(token)
                this.props.history.push('/')
                //window.location.reload()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        //this.props.history.push('/')
        
     }


     render(){
   
         return(
             <div>
                 <form className="login-form" onSubmit={this.handleSubmit}>
                     <h1>
                     <span className="font-weight-bold">Login</span></h1>
                     <FormGroup>
                     <label>Email </label><br/>
                     <input  type="email" name="email" value={this.state.email} onChange={this.handleEmail}/>
                     </FormGroup>
                     <FormGroup>
                     <label>Password </label><br/>
                     <input  type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                     </FormGroup>
                     
                     <button className="btn-lg btn-dark btn-block">submit</button>
                     
                 </form>
                 </div>
             
         )
     }
}
export default Log