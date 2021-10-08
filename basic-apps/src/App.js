import './App.css';
import { useState } from 'react';
import Home from './Components/Login/Home';
import Login from './Components/Login/Login';

const App = () => {
  const [username, setUsername] = useState();

return (
    <div className="App">
      {username ? <Home username={username} /> : <Login setUsername={setUsername} />}
    </div>
  );
}

export default App;