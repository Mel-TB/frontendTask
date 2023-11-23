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
