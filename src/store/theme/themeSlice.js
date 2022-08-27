const initialState = "dark"

export default function themeReducer (state = initialState, action) {
  switch (action.type) {
    case "theme/swithTheme": {
      if(state === "dark")
        return "light"
      else return "dark"
    }
    default:
        return state
  }
}
