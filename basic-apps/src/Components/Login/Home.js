import './Home.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Home = ({ username }) => {
  const [note, setNote] = useState();

  return (
    <div  >
      <header className="Home-header">
        <p>Hi {note}</p>
        <input style={{ width: '380px', marginLeft: '40px', marginRight: '20px', marginTop: '0%' }}
          variant="outlined"
          margin="normal"
          id=""
          name="username"
          label="Username"
          type="text"
          onChange={(e) => setNote(e.target.value)}
        />
        <Button style={{ width: '10%', color: 'white', backgroundColor: "#06759F", marginTop: '20%' }}
          href="/login"
        > Log out
        </Button>
      </header>
    </div>
  );
}

export default Home;
