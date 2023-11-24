const initialState = {
  widgetsData: [],
  activeWidgetId: null,
  error: null,
  selectedColor: "defaultColor",
};

/**
 * Reduces the state of the widget based on the given action.
 *
 * @param {Object} state - The current state of the widget.
 * @param {Object} action - The action to be performed on the widget state.
 * @return {Object} The new state of the widget after the action is performed.
 */
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
