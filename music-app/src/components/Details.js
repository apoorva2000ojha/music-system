import React from 'react'

 function Details(props) {
  return (
    <div className="Details">
     <div className="ImageDetails">
      <img src={props.song.img_src}/>
      <h3 className="SongTitle">{props.song.title}</h3>
      <h3 className="ArtistTitle">{props.song.artist}</h3>
     </div>
      </div>
  );
}
export default Details;