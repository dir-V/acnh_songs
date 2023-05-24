import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongContainer = () => {

    const [songs, setSongs] = useState([]);

    const getAllSongs = async () => {
        const resposne = await fetch("http://acnhapi.com/v1/songs")
        const data = await resposne.json();
        setSongs(data);
    }
    useEffect(() => {
        getAllSongs();
    }, []);


    return ( 
    <div className="container"> 
            <h1 id = "top"> ACNH: Song List </h1>
        <SongList songs = {songs} />
    </div>
    );
}
 
export default SongContainer;