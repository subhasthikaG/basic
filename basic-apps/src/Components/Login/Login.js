import React, { useState } from "react";
import './Login.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const admin = {
  user: "testUser",
  password: "abc123"
}

const Login = ({ setUsername }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    console.log(password)

    if (user === admin.user && password === admin.password) {
      alert("logged in ");
      setUsername(user)
    }else {
      alert("Invalid username or password");
    }
  }
  return (
    <header className="Log-header">
      <div className='LoginForm'>
        <h4>Sign In</h4> <br />
        <form onSubmit={(e) => handleSubmit(e)} >
          <TextField style={{ width: '380px', marginLeft: '40px', marginRight: '20px', marginTop: '0%' }}
            variant="outlined"
            margin="normal"
            rules={[{ required: true, message: 'Please input your username!' }]}
            value={user}
            id=""
            name="username"
            label="Username"
            onChange={(e) => setUser(e.target.value)}
            type="text"
          />
          <br />
          <TextField style={{ width: '380px', marginLeft: '40px', marginRight: '20px' }}
            variant="outlined"
            margin="normal"
            rules={[{ required: true, message: 'Please input your password!' }]}
            id=""
            label="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <br />
          <Button style={{ width: '380px', marginLeft: '40px', marginRight: '20px' }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </header>
  );
}

export default Login;