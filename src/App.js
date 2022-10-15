
import {Comments, Headers, Posts, Users} from "./components";
import {Link, Route,Routes} from "react-router-dom";


function App() {


  return (
    <div>
        <Headers/>
<Routes>
        <Route path={'/users'} element={<Users/>}/>
        <Route path={'/posts'} element={<Posts/>}/>
        <Route path={'/comments'} element={<Comments/>}/>
</Routes>


    </div>
  );
}

export default App;
