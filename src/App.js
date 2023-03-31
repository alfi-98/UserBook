import logo from './logo.svg';
import './App.css';
import useUsers from './hooks/useUsers';

function App() {
  const { users, isLoading, error } = useUsers();
  console.log("users", users)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {users}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
