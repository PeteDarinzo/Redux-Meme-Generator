import React, { useState } from "react";
import "./NewMemeForm.css";


const NewMemeForm = ({ addMeme }) => {

  const initialState = ({ url: "", topText: "", bottomText: "" })
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeme(formData.url, formData.topText, formData.bottomText)
    setFormData(initialState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="NewMemeForm">
        <h1>ADD MEME</h1>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="topText">Top Text</label>
          <input
            type="text"
            id="topText"
            name="topText"
            value={formData.topText}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bottomText">Bottom Text</label>
          <input
            type="text"
            id="bottomText"
            name="bottomText"
            value={formData.bottomText}
            onChange={handleChange}
          />
        </div>
        <button>SUBMIT MEME</button>
      </form>
    </div>

  )

}

export default NewMemeForm;