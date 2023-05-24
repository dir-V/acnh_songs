import { useState } from "react";
import Song from "./Song";

const SongList = ({songs}) => {

    const [filter, setFilter] = useState("");

    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };
  
    const filteredSongs = Object.values(songs).filter((song) =>
      song.name["name-EUen"].toLowerCase().includes(filter.toLowerCase())
    );
  
    const songItems = filteredSongs.map((song) => (
      <Song key={song.id} song={song} />
    ));

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }


    // const allSongs = Object.values(songs).map((song) => <Song key = {song.id} song={song} />);

    return ( 
        <div>
        
        <form className="search" onSubmit = {handleFormSubmit}>
                <input 
                type = "text" 
                placeholder="Search a song!"
                value = {filter}
                onChange = {handleFilterChange}
                 /> 
            </form>
            <div className="songs">
                    {songItems} 
            </div>
        </div>
     );
}
 
export default SongList;