

export const User = (props) => {

    let {user}=props

    return(<div>
        <hr/>
        {user.id} -- {user.name}<br/>
       username- {user.username}<br/>
       email- {user.email}
        <hr/>
    </div>)
}