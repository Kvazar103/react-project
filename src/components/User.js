
export default function User(props){

    let {item,info}=props

    return (<div>
        <h3>{item.name} <br/>id {item.id}</h3>
        <button onClick={()=>{
            info(`${item.address['street']} ${item.address['suite']}`);
        }}>details</button>
    </div>)
}