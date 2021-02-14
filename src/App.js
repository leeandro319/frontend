import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
