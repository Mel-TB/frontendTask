/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import Widget from "../Widget/Widget";

import { FetchProductWidgets } from "../../services/FetchProductWidgets";

import "./WidgetList.scss";

function WidgetList() {
  const [widgetsData, setWidgetData] = useState([]);
  const [activeWidgetId, setActiveWidgetId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchProductWidgets();
        setWidgetData(data);

        const activeWidget = data.find((widget) => widget.active);
        if (activeWidget) {
          setActiveWidgetId(activeWidget.id);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  const handleToggle = (id) => {
    setActiveWidgetId(activeWidgetId === id ? null : id);
    // Optional: Update the API with the new active state
  };

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
