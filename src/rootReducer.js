

const initialState = { memes: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      // keep all memes, add the new meme from the payload
      return { memes: [...state.memes, action.payload] };
    case "REMOVE":
      // filter all memes, remove the one with the id matching the payload
      return { memes: state.memes.filter(m => m.id != action.payload) };
    default:
      return state;
  }
}

export default rootReducer;