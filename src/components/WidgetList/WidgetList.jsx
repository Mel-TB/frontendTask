/* eslint-disable no-unused-vars */
import React from "react";
import Widget from "../Widget/Widget";

function WidgetList() {
  const widgetData = [
    {
      id: 1,
      action: "collects",
      amount: 100,
      type: "plastic bottles",
      active: true,
      linked: true,
      selectedColor: "blue",
    },
  ];

  return (
    <div>
      {widgetData.map((widget) => (
        <Widget
          key={widget.id}
          {...widget}
        />
      ))}
    </div>
  );
}

export default WidgetList;
