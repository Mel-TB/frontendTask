/**
 * Sets the widgets.
 *
 * @param {Array} widgets - The widgets to be set.
 * @return {Object} - The action object with type "SET_WIDGETS" and payload as the widgets.
 */
export const setWidgets = (widgets) => {
  return {
    type: "SET_WIDGETS",
    payload: widgets,
  };
};

/**
 * Sets the active widget with the specified widget ID.
 *
 * @param {string} widgetId - The ID of the widget to set as active.
 * @return {Object} - The action object with the type "SET_ACTIVE_WIDGET" and the widget ID as the payload.
 */
export const setActiveWidget = (widgetId) => {
  return {
    type: "SET_ACTIVE_WIDGET",
    payload: widgetId,
  };
};

/**
 * Sets an error value.
 *
 * @param {any} error - The error value to be set.
 * @return {object} - An object with the type "SET_ERROR" and the provided error as the payload.
 */
export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};
