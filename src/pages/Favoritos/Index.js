import Banner from "componentes/Banner/Index";
import styles from "./Favoritos.module.css";
import Titulo from "componentes/Titulo/Index";
import Card from "componentes/Card/Index";
import { useFavoritoContext } from "Contextos/Favoritos";

function Favoritos() {
   const { favorito } = useFavoritoContext();
   return (
      <>
         <Banner imagem="favoritos" />
         <Titulo>
            <h1>Meus favoritos</h1>
         </Titulo>
         <section className={styles.container}>
            {favorito.map((fav) => {
               return <Card {...fav} key={fav.id} />;
            })}
         </section>
      </>
   );
}

export default Favoritos;
