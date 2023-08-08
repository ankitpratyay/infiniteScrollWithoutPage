import { useEffect, useState } from "react";
import axios from 'axios'
import Card from "./Card";
const Photos=()=>{
    const[photos, setPhotos] = useState([])
    const [page,setPage]= useState(1);
    const postPerPage= 10;
    const getData=async ()=>{
        const data = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
       // console.log(data.data)
        setPhotos(data.data)
    }
    const handleScroll=()=>{
        try {
            if(window.innerHeight + document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight)
            {
                setPage((prev)=>prev+1)
            }
            
        } catch (error) {
            
        }
    }
    const lastPostIndex = page* postPerPage;
    const getPost= photos.slice(0,lastPostIndex)
    //console.log(getPost)
    useEffect(()=>{
        getData();
        window.addEventListener("scroll", handleScroll)
    },[])
    return (
        <div className="container">
        {
            getPost.map((photo, ind)=> <Card key ={ind} photo={photo}/>)
        }
           
        </div>
    )
}
export default Photos;