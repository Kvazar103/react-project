import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import {Albums, CommentPost, Comments, Home, Todos} from "./components";


function App() {
  return (
    <div>
      <ul>
        <li><Link to={'/home'}>Home page</Link></li>
        <li><Link to={'/todos'}>Todos page</Link></li>
          <li><Link to={'/albums'}>Albums page</Link></li>
          <li><Link to={'/comments'}>Comments page</Link></li>
        <hr/>
      </ul>
      <Routes>
        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/todos'} element={<Todos/>}/>
          <Route path={'/albums'} element={<Albums/>}/>
          <Route path={'/comments'} element={<Comments/>}/>

        <Route path={'/comments/commentsPost'} element={<CommentPost/>}/>

      </Routes>
    </div>
  );
}

export default App;
