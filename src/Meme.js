import React from "react";
import "./Meme.css";


const Meme = ({ url, topText, bottomText, id, remove }) => {

  // send the meme's id to the parent, it is then dispatched to the reducer
  const handleRemove = (e) => {
    remove(e.target.parentElement.id);
  }

  return (
    <div className="Meme" id={id}>
      <img src={url} onClick={handleRemove} />
      <p className="Meme-top" onClick={handleRemove}>{topText}</p>
      <p className="Meme-bottom" onClick={handleRemove}>{bottomText}</p>
    </div >
  )
}

export default Meme;
