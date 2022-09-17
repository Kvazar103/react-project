
export default function Simpson(props){

    let {item:simpsons}=props

    return(<div>
        <h1>{simpsons.name} {simpsons.surname}</h1>
        <h3>{simpsons.age} years old</h3>
        <p>{simpsons.info}</p>
        <img src={simpsons.photo}/>
    </div>)

}