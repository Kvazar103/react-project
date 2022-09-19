
export function LaunchTemplate(props){
    let {item}=props

    return(<div>
        <h2>{item['mission_name']}</h2>
        {item['launch_year']}<br/>
        <img src={item.links['mission_patch_small']}/>
    </div>)
}