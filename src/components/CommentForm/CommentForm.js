import {useForm} from "react-hook-form";

export const CommentForm = ({setComment}) => {

    const {register,handleSubmit}=useForm()

    function commentSubmit(data) {
        setComment(comment=>[...comment,data])
    }

    return(<form onSubmit={handleSubmit(commentSubmit)}>
        <input type={'text'} placeholder={'name'} {...register('name')}/>
        <input type={'text'} placeholder={'email'} {...register('email')}/>
        <button>Save</button>

    </form>)
}