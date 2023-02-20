import "./Entete.scss";
import PanierSommaire from './PanierSommaire';



/* props est un argument récupérable*/
/* au lieu d'un props, on déconstruit panier*/
function Entete({panier}) {
  console.log("Le panier : ", panier);
  let tabValPanier =Object.values(panier);
  console.log("Le tableau des valeurs dans le panier : ", tabValPanier)

 // console.log("le panier est un objet: ", panier);
 //console.log("les props de l'entête: ", props);
 // let panier = props.panier; si c'était function Entete(props)

 // Calcul le nombre d'articles dans le panier(avec boucle - 2 instructions)
/* let nbArticles = 0;
 for (let i = 0; i < tabValPanier.length; i++) {
  nbArticles+= tabValPanier[i].qte;
 }  */

 // Avec la méthode reduce() des tableaux, une seule expression
 //Zéro est la valeur initiale
/* const nbArticles = tabValPanier.reduce((valInitiale, eltSuivant.qte) => valInitiale + eltSuivant, 0); */

  return(
    <header className="Entete">
      <h1>Magasin général</h1>
      <nav>
        <span>Produits</span>
        <span>À propos</span>
        <span>
       <PanierSommaire panier={panier} />
          </span>
      </nav>
    </header>
  );
}

export default Entete;