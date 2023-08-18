import { Provider } from "react-redux";
import { AppRouter } from "./components/routers/AppRouter"
import { store } from "../src/components/store/store";

function App() {
  return (
    <>
      <div className="wrapper">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    </>
  )
}

export default App
