import "./App.css";
import { Application } from "./components/Application/application";
import { useEffect } from "react";
import { Counter } from "./components/Counter/counter";
import { AppProviders } from "./providers/app-provider";
import { MuiMode } from "./components/Mui/mui-mode";
function App() {
  const url = "https://api.datalastic.com/api/v0/report";
  const apiKey = "e7fd6bed-c6f4-4241-9dd4-c916a676685e";
  useEffect(() => {
    const fetcher = () => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "api-key": apiKey,
          report_type: "vessel_list",
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    };
    fetcher();
  }, []);

  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Application />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
