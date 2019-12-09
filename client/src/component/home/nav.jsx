
import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  function handleClick() {
    axios.delete('http://localhost:3015/users/logout', {
      headers: {
        'x-auth' : localStorage.getItem('authToken')
      }
    })
    .then(response => {
      console.log(response)
      alert(response.data.notice)
      localStorage.removeItem('authToken')
      //window.location.reload()
     // window.location.href = "/"
     this.props.history.push('/')
    })
  }

  return (
    <div className={classes.root}>
           <AppBar>
             <marquee dir="ltr" style={{width:"15rem",position:"absolute",left:0,right:0,margin:"auto"}}>
             <div className="header-title">
             <h3>Welcome to  science circle</h3>
             </div>
             </marquee>
            
             <Toolbar>          
                 <Typography variant="h6" className={classes.title}>
                 <Button color="inherit" component={Link} to="/">About</Button>
                 <Button color="inherit" component ={Link} to="/course" >Course</Button>
                 <Button color="inherit" component ={Link} to="/test" > Test series</Button>
                 <Button color="inherit" component ={Link} to="/crash">Crash course</Button>
                
               </Typography>
               {localStorage.getItem('authToken') ? (
                       <Button color="inherit" onClick = {handleClick} component={Link} to="#">Logout</Button>
                       ):(
                       <div>
                       <Button color="inherit" component={Link} to="/users/register">New Register</Button>
                       <Button color="inherit"  component ={Link} to="/login">Login</Button>      
                       </div> )}
             
             </Toolbar>
           </AppBar>
         </div>
  );
}
