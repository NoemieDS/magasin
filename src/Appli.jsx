import "./Appli.scss";
import Entete from "./Entete";
import ListeProduits from "./ListeProduits";
import Pied2page from "./Pied2page";
import { useEffect, useState } from "react"; //Importer la fonction

function Appli() {
  
  /****************************************************************************** exemples JS */
  /* sans react serait ..... id produit, prix, quantité mis par l'utilisateur
  dans un objet JS / tableau associatif, pas un array avec position []
  panier = {
    prd0001: {prix: 15, qte: 12},
    prd0002: {prix: 15, qte: 02},
    prd0003: {prix: 15, qte: 17},
  }
  let panier = {}  mais on utilise plutôt useState({}) en React
*/

/********************************************************************************* useState */
  //On utilise la fonction HOOK useState({}) pour surveiller l'état du panier
  //useState({}) Retourne un tableau avec 2 valeurs, un objet et une fonction

  //on part un objet vide pour y mettre les articles choisis par l'utilisateur
  /*
  let panier= etatPanier[0]; // c'est le {} dans le useState({})
  let setPanier = etatPanier[1]; //position 1 est une fonction qui surveille l'état
*/

/* On utilise const car on ne modifie pas la variable d'état (aurait pu être let 
    mais c pas la manière de faire react)*/
//je veux maintenir le panier dans un objet JS surveillé par React
    const [panier, setPanier] = useState({});
    
    /******************************************************************************* localStorage */   
    //Fonction de rappel
    //Action de sauvegarder dans le panier
    //useEffect prend 2 param :un call back et un tableau de dépendance
    /******************************************************************************** useEffect */   
    useEffect(
      () => localStorage.setItem('panier-ls', JSON.stringify(panier))
      , [panier] //le tableau des dépendances / mettre nom de la variable d'état de useState
      ); //sans le tableau des dépendances, le useEffect du compteur de clic va augmenter !

/***************** Local Storage démo au long sans useEffect() **** */
  //Récupérer le panier du local storage
/*   const [panier, setPanier] = useState({
    function() {
      let panierLs = window.localStorage.getItem("panier-ls");
      if (panierLs) {
        return JSON.parse(panierLs);
      } else {
        return {}; //retourne objet vide si le local storage est vide
      }
    },
  });
 */
/*   //Ecriture plus simple
  const [panier, setPanier] = useState(function() {
          return JSON.parse(localStorage.getItem('panier-ls')) || {};
});
 */

//useState avec une fonction d'initialisation
//EN plus simple fléchée (une seule instruction, pas de return, pas d'accolade)
/*   const [panier, setPanier] = useState(
    () => JSON.parse(localStorage.getItem('panier-ls')) || {}
);
 */
 /****************************************************************************** localStorage FIN */ 

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
