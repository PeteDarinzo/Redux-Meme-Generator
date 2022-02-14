import './App.css';
import Meme from "./Meme";
import NewMemeForm from './NewMemeForm';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from "uuid";


function App() {

  // initialze hooks to retreive memes, and dispatch add and remove actions
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  // dispatch an ADD action to the router, include the new meme information as payload
  const addMeme = (url, topText, bottomText) => {
    const id = uuid();
    dispatch({ type: "ADD", payload: { url, topText, bottomText, id } });
  }

  // dispatch a REMOVE action to the router, include the meme's id as payload
  const removeMeme = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  }

  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme} />
      <div>
        {memes.map(m => (
          <Meme
            key={m.id}
            id={m.id}
            url={m.url}
            topText={m.topText}
            bottomText={m.bottomText}
            remove={removeMeme}
          />))}
      </div>
    </div>
  );
}

export default App;
