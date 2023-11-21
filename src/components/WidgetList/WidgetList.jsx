/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import Widget from "../Widget/Widget";
import { FetchProductWidgets } from "../../services/FetchProductWidgets";

function WidgetList() {
  const [widgetsData, setWidgetData] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchProductWidgets();
        setWidgetData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {widgetsData.map((widget) => (
        <Widget
          key={widget.id}
          {...widget}
        />
      ))}
    </div>
  );
}

export default WidgetList;
