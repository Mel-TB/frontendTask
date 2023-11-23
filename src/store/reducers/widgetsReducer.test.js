import widgetReducer from "./widgetsReducer";

const initialState = {
  widgetsData: [],
  activeWidgetId: null,
  error: null,
  selectedColor: "defaultColor",
};

test("widgets reducer with SET_WIDGETS action", () => {
  const action = {
    type: "SET_WIDGETS",
    payload: [{ id: 1, name: "Test Widget" }],
  };
  const expectedState = { ...initialState, widgetsData: action.payload };
  expect(widgetReducer(initialState, action)).toEqual(expectedState);
});

test("widgets reducer with SET_ACTIVE_WIDGET action", () => {
  const action = {
    type: "SET_ACTIVE_WIDGET",
    payload: 2,
  };
  const expectedState = { ...initialState, activeWidgetId: action.payload };
  expect(widgetReducer(initialState, action)).toEqual(expectedState);
});

test("widgets reducer with SET_ERROR action", () => {
  const action = {
    type: "SET_ERROR",
    payload: new Error("Test Error"),
  };
  const expectedState = { ...initialState, error: action.payload };
  expect(widgetReducer(initialState, action)).toEqual(expectedState);
});
