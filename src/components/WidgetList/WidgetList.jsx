/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setWidgets,
  setActiveWidget,
  setError,
} from "../../store/actions/widgetActions";

import Widget from "../Widget/Widget";
import { FetchProductWidgets } from "../../services/FetchProductWidgets";

import "./WidgetList.scss";
import mapSelectedColorToHex from "../../utils/mapSelectedColorToHex";

function WidgetList() {
  const dispatch = useDispatch();
  const { widgetsData, activeWidgetId, error } = useSelector(
    (state) => state.widgets
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchProductWidgets();
        const dataWithUpdatedColors = mapSelectedColorToHex(data);
        dispatch(setWidgets(dataWithUpdatedColors));

        const activeWidget = data.find((widget) => widget.active);
        if (activeWidget) {
          dispatch(setActiveWidget(activeWidget.id));
        }
      } catch (error) {
        dispatch(setError(error));
      }
    };

    fetchData();
  }, [dispatch]);

  if (error) return <div>Error: {error.message}</div>;

  const handleToggle = (id) => {
    dispatch(setActiveWidget(activeWidgetId === id ? null : id));
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <section>
      {widgetsData.map((widget) => (
        <Widget
          key={widget.id}
          {...widget}
          isActive={activeWidgetId === widget.id}
          onToggle={() => handleToggle(widget.id)}
        />
      ))}
    </section>
  );
}

export default WidgetList;
