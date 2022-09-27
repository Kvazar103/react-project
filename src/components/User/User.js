import css from './UserStyle.module.css'

export const User = (props) => {
  let {user}= props

    return(<div className={css.UserStyle}>
     name: {user.name}<br/>
      username: {user.username}
    </div>)
}