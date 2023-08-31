import FavoritosProvider from "Contextos/Favoritos";
import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container/Index";
import Rodape from "componentes/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
   return (
      <main>
         <Cabecalho />
         <FavoritosProvider>
            <Container>
               <Outlet />
            </Container>
         </FavoritosProvider>
         <Rodape />
      </main>
   );
}
export default PaginaBase;
