import css from './CarStyle.module.css'

 const Car = (props) => {

    let {car,del,setCarForUpdate}= props

     return(<div className={css.Car}>
        id: {car.id}<br/>
       model:  {car.model}<br/>
        year: {car.year}<br/>
        price: {car.price}<br/>
         <button onClick={()=>{
             del(car.id)
         }} >Delete</button>
         <button onClick={()=>{
             setCarForUpdate(car)
         }}>Update</button>
     </div>)

}
export {Car}