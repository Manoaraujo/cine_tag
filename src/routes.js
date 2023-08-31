import Favoritos from "pages/Favoritos/Index";
import Inicio from "pages/Inicio/Index.js";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase/Index";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<PaginaBase />}>
               <Route index element={<Inicio />} />
               <Route path="favoritos" element={<Favoritos />} />
               <Route path=":id" element={<Player />} />
               <Route path="*" element={<NaoEncontrada />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}
export default AppRoutes;
