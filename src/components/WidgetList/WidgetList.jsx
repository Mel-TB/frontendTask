import { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  setWidgets,
  setActiveWidget,
  setError,
} from "../../store/actions/widgetActions";

import Widget from "../Widget/Widget";
import { fetchProductWidgets } from "../../services/FetchProductWidgets";
import mapSelectedColorToHex from "../../utils/mapSelectedColorToHex";

import "./WidgetList.scss";

/**
 * Initializes and renders a list of widgets.
 *
 * @return {JSX.Element} The rendered widget list.
 */

function WidgetList() {
  const dispatch = useDispatch();
  const { widgetsData, activeWidgetId, error } = useSelector(
    (state) => state.widgets
  );

  useEffect(() => {
    /**
     * Fetches data from the FetchProductWidgets API and updates the state with the fetched data.
     *
     *
     */

    const fetchData = async () => {
      try {
        const widgets = await fetchProductWidgets();
        const widgetsWithUpdatedColors = mapSelectedColorToHex(widgets);
        dispatch(setWidgets(widgetsWithUpdatedColors));
        const activeWidget = widgets.find((widget) => widget.active);
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

  /**
   * Handles the toggle action for a specific ID.
   *
   * @param {number} id - The ID of the widget.
   *
   */

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

WidgetList.propTypes = {
  widgetsData: PropTypes.array,
  activeWidgetId: PropTypes.number,
  error: PropTypes.object,
};
export default WidgetList;
