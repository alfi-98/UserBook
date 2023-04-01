import useUsers from './hooks/useUsers';
import Header from './components/common/Header';
import './styles/main.css';

function App() {
  const { users, isLoading, error } = useUsers();
  console.log("users", users)
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
