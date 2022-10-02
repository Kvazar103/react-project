
export function Album(props) {
    let {album}= props

    return(<div>
        <hr/>
        userId:{album.userId}<br/>
        id:{album.id}<br/>
        title:{album.title}
        <hr/>
    </div>)
}