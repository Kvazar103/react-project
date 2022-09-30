import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

 const Cars = () => {

    let[cars,setCars]=useState([])
     let[carForUpdate,setCarForUpdate]=useState(null)

     const del =async (id) => {
         await carService.deleteById(id)
         setCars(cars=>{
             const index=cars.findIndex(value => value.id===id)
             cars.splice(index,1)
             return [...cars]
         })
     }

    useEffect(()=>{
        carService.getAllCars().then(({data}) =>setCars(data))
    },[])

     return(<div>
         <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
         <hr/>
         {cars.map(car=><Car car={car} key={car.id} del={del} setCarForUpdate={setCarForUpdate}/>)}
     </div>)
}
export {Cars}