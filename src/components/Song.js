import { useRef, useState } from "react";

const Song = ({song}) => {

    return ( 
        <div className="song">
        
          <p id ="songName"> {song.name["name-EUen"]} </p>
            <img className="pics" src={song.image_uri} width = "100" height = "100"/>

            <audio controls>
                <source src = {song.music_uri} type = "audio/mpeg"/>
            </audio>
        
        </div>
     );
}

export default Song;