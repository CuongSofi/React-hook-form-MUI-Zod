import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="App mt-20">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
