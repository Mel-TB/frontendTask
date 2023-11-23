const initialState = {
  widgetsData: [],
  activeWidgetId: null,
  error: null,
  selectedColor: "defaultColor",
};

function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WIDGETS":
      return { ...state, widgetsData: action.payload };
    case "SET_ACTIVE_WIDGET":
      return { ...state, activeWidgetId: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default widgetReducer;
