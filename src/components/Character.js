
export function Character(props){
    let {item}=props
    return(<div>
        <h1>{item.name}</h1>
        <h2>{item.species}----{item.status}</h2>

    </div>)
}