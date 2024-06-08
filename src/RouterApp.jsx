import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Paginas";
import LoginPage from "./Paginas/Login";
import Projeto from "./Paginas/Lixeiras";
import Lixeiras from "./Paginas/Lixeiras";
import Coletor from "./Paginas/Coletor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lixeiras" element={<Lixeiras />} />
        <Route path="/coletor" element={<Coletor />} />
      </Routes>
    </BrowserRouter>
  );
}
