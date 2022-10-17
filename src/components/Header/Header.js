import {useSelector} from "react-redux";


const Header = () => {

    const {currentUser}=useSelector(state => state.userReducer)
    return(<div>
        {currentUser&&currentUser.name||`click button in order to show user name`}

    </div>)
}
export {
    Header
}