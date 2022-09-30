import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";

const CarForm = ({setCars,carForUpdate,setCarForUpdate}) => {

    const {register,handleSubmit,reset,setValue}=useForm({mode:"all"})
    useEffect(()=>{
        if(carForUpdate){
            setValue('model',carForUpdate.model)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate,setValue])

    const submit =async (car) => {
        if(carForUpdate){
           const {data}= await carService.updateById(carForUpdate.id,car)
            setCars((cars)=>{
                const foundCar=cars.find(value => value.id===carForUpdate.id)
                Object.assign(foundCar,data)
                setCarForUpdate(null)
                return[...cars]
            })
        }else {
            const {data}= await carService.create(car)
            setCars(cars=>[...cars,data])
        }

        reset()
    }

    return(<form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'model'} {...register('model')}/>
        <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true}) }/>
        <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
        <button>{carForUpdate?'Update':'Save'}</button>
    </form>)
}
export {CarForm}