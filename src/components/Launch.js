import {useEffect, useState} from "react";
import {LaunchTemplate} from "./LaunchTemplate";


export function Launch(){

    let [ship,setShip]=useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setShip(value)
            })
    });

    return(<div>

        {ship.filter(value => value['launch_year']!="2020").map((value,index)=>
            (<LaunchTemplate item={value} key={index}/>))}
    </div>)
}