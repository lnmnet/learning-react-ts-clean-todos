import { Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Contact from './frameworks-and-drivers/ui/pages/contact/lib/contact';
import TodoList from './frameworks-and-drivers/ui/pages/todo-list/lib/todo-list';

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li> 
            <Link to="/contact">Contract</Link>
          </li>
        </ul>
        <main>
          <Routes>
            <Route path="/todos" element={<TodoList />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
