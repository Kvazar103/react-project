import './Post.css'
export default function Post(props){
    let {posts}=props

    return(<div className='forPost'>
       Id  :{posts.id}<br/>
       title  :{posts.title}<br/>
       body  :{posts.body}
    </div>)
}