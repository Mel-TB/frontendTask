import { WidgetList } from "./components";
import "./styles/global.scss";

function App() {
  return (
    <div className='app'>
      <h1>Per product widgets</h1>
      <hr />
      <WidgetList />
    </div>
  );
}

export default App;
