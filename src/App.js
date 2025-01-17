import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './componenets/Login';
import Home from './componenets/Home';
import AddMarche from './componenets/AddMarche';
import Todo from './componenets/Todo';
import WorkerInfo from './componenets/WorkerInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Add' element={<AddMarche />} />
        <Route path='/home/:id/:securityKey' element={<Home />} />
        <Route path='/WorkerInfo/:worker/:securityKey' element={<WorkerInfo />} />
        <Route path='/AddMarche/:id/:securityKey' element={<AddMarche />} />
        <Route path='/AddMarche/:id/:securityKey/Todo' element={<Todo/>} />
      </Routes>
    </div>
  );
}

export default App;
