import { Routes, Route } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import UploadImage from "./components/UploadImage";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<UploadImage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
