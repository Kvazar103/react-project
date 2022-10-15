import {Link} from "react-router-dom";


const Headers = () => {

    return(<div>
        <ul>
            <li><Link to={'/users'}>Users</Link></li>
            <li><Link to={'/posts'}>Posts</Link></li>
            <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
    </div>)
}
export {
    Headers
}