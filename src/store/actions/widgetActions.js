export const setWidgets = (widgets) => {
  return {
    type: "SET_WIDGETS",
    payload: widgets,
  };
};

export const setActiveWidget = (widgetId) => {
  return {
    type: "SET_ACTIVE_WIDGET",
    payload: widgetId,
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};
