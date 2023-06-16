import "../styles/add.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";


const AddVideo = () => {

    let navigate = useNavigate()

    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = (e) => {
        e.preventDefault() //prevents the page from reloading
        let data = {
            thumbnail:thumbnail.current.value,
            title:title.current.value,
            channel:channel.current.value,
            views:views.current.value
        }
        fetch('http://localhost:4000/videos',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('video uploaded successfully') 
        navigate('/')

        
    }


    return ( 
        <div className="addvideo">
            <h1>Add Video</h1>

            <div className="form">
                <div className="photo">
                    <img src="https://www.freeiconspng.com/thumbs/sonic-png/sonic-png-11.png" alt="" />
                </div>
                    <div className="fill">
                <form action="" onSubmit={upload}>
                <h1>Welcome to YouTube</h1>
                Thumbnail : <br /> <input ref={thumbnail} type="url" /><br /><br />
                Title : <br /> <input ref={title} type="text" /><br /><br />
                Channel : <br /> <input ref={channel} type="text" /><br /><br />
                Views : <br /> <input ref={views} type="text" /><br /><br />
               <button>Upload video</button>
               </form>
               </div>
            </div>
        </div>
     );
}
 
export default AddVideo