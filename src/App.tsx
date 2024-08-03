import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import ShipmentTracker from "./Components/ShipmentTracker";
import NotFound from "./Components/NotFound";
import NoResults from "./Components/NoResults";
import ConnectionLost from "./Components/ConnectionLost";
import ShipmentInfo from "./Components/ShipmentInfo"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shipment-tracker" element={<ShipmentTracker />} />
          <Route path="*" element={<NotFound />} />
          <Route path="no-results" element={<NoResults />} />
          <Route path="connection-lost" element={<ConnectionLost />} />
          <Route path="shipment-info" element={<ShipmentInfo />} />
        </Routes>
      </Router>
  );
}

export default App;
