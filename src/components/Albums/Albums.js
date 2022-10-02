import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import {Album} from "../Album/Album";


export function Albums(){

    let [albums,setAlbum]=useState([])

    useEffect(()=>{
        albumsService.getAllAlbums().then(value => {
            setAlbum(value.data)
        })
    },[])

    return(<div>
        <hr/>
        Albums
        <hr/>
        {albums.map(album => <Album album={album} key={album.id}/>)}
    </div>)
}