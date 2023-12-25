import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Home } from "./pages/Home/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import Dashboard from "./components/Dashboard/index.jsx";

export function App() {
  return (
    <LocationProvider>
      <div class="home flex flex-row justify-start ">
        <Dashboard />
        <div class="p-4 flex flex-col w-full h-screen dark:bg-slate-900 bg-slate-600">
          <Router>
            <Route path="/" component={Home} />
            <Route default component={NotFound} />
          </Router>
        </div>
      </div>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
