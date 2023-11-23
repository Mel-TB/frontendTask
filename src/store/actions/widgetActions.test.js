import { setWidgets, setActiveWidget, setError } from "./widgetActions";

test("setWidgets action", () => {
  const widgets = [{ id: 1, name: "Test Widget" }];
  const expectedAction = {
    type: "SET_WIDGETS",
    payload: widgets,
  };
  expect(setWidgets(widgets)).toEqual(expectedAction);
});

test("setActiveWidget action", () => {
  const widgetId = 1;
  const expectedAction = {
    type: "SET_ACTIVE_WIDGET",
    payload: widgetId,
  };
  expect(setActiveWidget(widgetId)).toEqual(expectedAction);
});

test("setError action", () => {
  const error = new Error("Test Error");
  const expectedAction = {
    type: "SET_ERROR",
    payload: error,
  };
  expect(setError(error)).toEqual(expectedAction);
});
