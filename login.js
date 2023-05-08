// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  }

  return (
    <form onSubmit={handleSubmit} className='login'>
      <label className='username'>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label className='pswd'>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
