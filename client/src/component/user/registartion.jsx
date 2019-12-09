import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import swal from 'sweetalert';
import axios from 'axios'

export default class Registration extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        name: '',
        mobile:'',
        email:'',
        password:'',
        classs:'',
        board:'',
        school:'',
        adhar:''
      }
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const formData = {
          name: this.state.name,
          email: this.state.email,
          mobile:this.state.mobile,
          password: this.state.password,
          classs:this.state.classs,
          board:this.state.board,
          school:this.state.school,
          adhar:this.state.adhar
      }
      axios.post('http://localhost:3015/users/register',formData)
     .then((response)=>{
         console.log(formData)
         if(response.data.hasOwnProperty('error')){
             alert(response.data.message)
         }else{
             this.props.history.push('/login')
         }
     })
     .catch((err)=>{
         console.log(err)
     })
    //this.props.history.push('/login')
    console.log(formData)

    swal({
      title: "Registration done!",
      text: "You clicked the button!",
      icon: "success",
    });
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
      return(
        <div className="reg-form">
                   <h2> Registration form</h2>
                 <Form onSubmit={this.handleSubmit} >
                   <FormGroup>
                   <Label for="exampleName">Name</Label>
                   <Input type="text" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
                 </FormGroup>
                 <FormGroup>
                   <Label for="exampleMobile">Mobile</Label>
                   <Input type="text" name="mobile" id="mobile" placeholder="Your Mobile Number" maxLength="10" value={this.state.mobile} onChange={this.handleChange} maxLength='10' />
                 </FormGroup>
                 <FormGroup>
                   <Label for="exampleEmail">Email</Label>
                   <Input type="email" name="email" id="email" placeholder="abc@xyz.com" value={this.state.email} onChange={this.handleChange} />
                 </FormGroup>
                 <FormGroup>
                  <Label for="examplePassword">Password </Label><br/>
                  <Input  type="password" name="password" value={this.state.password}  onChange={this.handleChange}/>
                 </FormGroup>            
                 <FormGroup>
                 <Label for="exampleSelect">Class</Label>
                 <Input type="select" name="classs" id="classs" onChange={this.handleChange} value={this.state.classs}>
                   <option>8</option>
                   <option>9</option>
                   <option>10</option>
                   <option>11</option>
                   <option>12</option>
                   <option>JEE MAIN/ADVANCE</option>
                   <option>OLYMPIAD</option>
                   <option>NEET</option>
                   <option>NTSE/NETSE</option>
                 </Input>
               </FormGroup>
               <FormGroup>
                 <Label for="exampleSelect">Board</Label>
                 <Input type="select" name="board" id="board" value={this.state.board} onChange={this.handleChange}>
                   <option>CBSE</option>
                   <option>ICSE</option>
                   <option>STATE BOARD</option>
                  
                 </Input>
               </FormGroup>
               <FormGroup>
                   <Label for="exampleSchool">School</Label>
                   <Input type="text" name="school" id="school" placeholder="Your School Name" onChange={this.handleChange} />
                 </FormGroup>
                 <FormGroup>
                   <Label for="exampleAdhar">Aadhar Number</Label>
                   <Input type="text" name="adhar" id="adhar" placeholder="Your Aadhar Number" maxLength="12" value={this.state.adhar} onChange={this.handleChange} />
                 </FormGroup>
                 <Button  className="btn-lg btn-dark btn-block">Submit</Button>
               </Form>
              </div>
      )
  }
}