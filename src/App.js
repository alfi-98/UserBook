import useUsers from './hooks/useUsers';
import Header from './components/common/Header';
import UserListPage from './components/pages/UserListPage';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserListPage/>
    </div>
  );
}


export default App;
