import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {

    const{register, handleSubmit, reset, formState: {errors, isValid}, setValue} =useForm()

    const submit = async (data) => {
        setUsers(user=>[...user,data])
    };

    return(<form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={"name"} {...register('name')}/>
        <input type="text" placeholder={"username"} {...register('username')}/>
        <button>Save</button>
    </form>)
}
export {UserForm}