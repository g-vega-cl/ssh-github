import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SSH_PRIVATE_KEY = the private key -----BEGIN OPENSSH PRIVATE KEY------ absdbwiqudbasjdbkwu</p>
        <p>SSH_HOST = heroku.com</p>
        <p>GIT = git@heroku.com:ssh-github.git    the ssh-github is the heroku app name</p>
      </header>
    </div>
  );
}

export default App;
