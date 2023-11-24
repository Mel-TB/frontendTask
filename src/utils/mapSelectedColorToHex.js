/**
 * Maps the selected color of each widget in the given array to its corresponding hexadecimal value.
 *
 * @param {Array} widgets - An array of widgets.
 * @return {Array} - The array of widgets with the selected color mapped to its hexadecimal value.
 */
function mapSelectedColorToHex(widgets) {
  return widgets.map((widget) => {
    switch (widget.selectedColor) {
      case "blue":
        return { ...widget, selectedColor: "#2E3A8C" };
      case "green":
        return { ...widget, selectedColor: "#3B755F" };
      case "black":
        return { ...widget, selectedColor: "#212121" };
      default:
        return widget;
    }
  });
}

export default mapSelectedColorToHex;
