import { Routes, Route } from 'react-router-dom';
import useUsers from './hooks/useUsers';
import Header from './components/common/Header';
import UserListPage from './components/pages/UserListPage';
import UserInfoPage from './components/pages/UserInfoPage';
import About from './components/pages/About';

import './styles/main.css';

function App() {
  const users = useUsers();

  return (
      <div className="App">
        <Header />
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={ <UserListPage users={users} />}/>
        <Route path="/users/:userId" element={<UserInfoPage users={users} />}/>
        </Routes>
      </div>
  );
}

export default App;
