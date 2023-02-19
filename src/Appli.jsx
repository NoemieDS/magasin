import "./Appli.scss";
import Entete from "./Entete";
import ListeProduits from "./ListeProduits";
import Pied2page from "./Pied2page";
import { useState } from "react"; //Importer la fonction

function Appli() {
  /* sans react serait ..... id produit, prix, quantité mis par l'utilisateur
dans un objet JS / tableau associatif, pas un array avec position []
  panier = {
    prd0001: {prix: 15, qte: 12},
    prd0002: {prix: 15, qte: 02},
    prd0003: {prix: 15, qte: 17},
  }
  let panier = {}  mais on utilise plutôt useState({}) en React
*/
  //On utilise la fonction HOOK useState({}) pour surveiller l'état du panier
  //useState({}) Retourne un tableau avec 2 valeurs, un objet et une fonction
  //On initiale le panier avec useState
  const etatPanier = useState({});
  //on part un objet vide pour y mettre les articles choisis par l'utilisateur
  /*
  let panier= etatPanier[0]; // c'est le {} dans le useState({})
  let setPanier = etatPanier[1]; //position 1 est une fonction qui surveille l'état
*/
  /* peut être écrit en une ligne 
    on utilise const car on ne modifie pas la variable d'état (aurait pu être let 
    mais c pas la manière de faire)*/
  //je veux maintenir le panier dans un objet JS surveillé par React
  const [panier, setPanier] = useState({});

  /*1er panier de Entete = un attribut qu'on vient de créer pour attrapper
     la variable qui contient le panier (props.panier dans Entete.jsx) */
  return (
    <div className="Appli">
     {/* <Entete panier={panier} ali={'baba'} chose='been'/> */}
      <Entete panier={panier} />
      <ListeProduits panier={panier} setPanier={setPanier} />
      <Pied2page />
    </div>
  );
}

export default Appli;
