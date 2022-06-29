import { Route, Routes } from "react-router-dom";

import CountryLanding from "./components/Pages/CountryLanding";
import CountryDetails from "./components/Pages/CountryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryLanding />} />
      <Route path="/countries/:countryId" element={<CountryDetails />} />
    </Routes>
  );
}

export default App;
