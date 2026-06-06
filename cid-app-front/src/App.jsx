import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import RequestsPage from "./pages/RequestsPage";
import DashboardGestor from "./pages/DashboardGestor";
import DashboardServidor from "./pages/DashboardServidor";
import DashboardCidadao from "./pages/DashboardCidadao";
import SearchProtocolPage from "./pages/SearchProtocolPage";
import NewRequestPage from "./pages/NewRequestPage";
import TrackRequestPage from "./pages/TrackRequestPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/gestor"
        element={
          <PrivateRoute>
            <DashboardGestor />
          </PrivateRoute>
        }
      />

      <Route
  path="/usuarios"
  element={
    <PrivateRoute>
      <UsersPage />
    </PrivateRoute>
  }
/>
<Route
  path="/solicitacoes"
  element={
    <PrivateRoute>
      <RequestsPage />
    </PrivateRoute>
  }
/>
<Route
  path="/busca-protocolo"
  element={
    <PrivateRoute>
      <SearchProtocolPage />
    </PrivateRoute>
  }
/>
<Route
  path="/nova-solicitacao"
  element={
    <PrivateRoute>
      <NewRequestPage />
    </PrivateRoute>
  }
/>

<Route
  path="/acompanhar"
  element={
    <PrivateRoute>
      <TrackRequestPage />
    </PrivateRoute>
  }
/>

      <Route
        path="/servidor"
        element={
          <PrivateRoute>
            <DashboardServidor />
          </PrivateRoute>
        }
      />

      <Route
        path="/cidadao"
        element={
          <PrivateRoute>
            <DashboardCidadao />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;