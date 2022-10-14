
import {Comments, Posts, Users} from "./components";
import {Link, Route,Router,Routes} from "react-router-dom";


function App() {


  return (
    <div>
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
<Routes>
    <Route path={'/users'} element={<Users/>}/>
    <Route path={'/posts'} element={<Posts/>}/>
    <Route path={'/comments'} element={<Comments/>}/>

</Routes>


    </div>
  );
}

export default App;
