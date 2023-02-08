import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import Pied2page from './Pied2page';
import {useState} from 'react';

function Appli() {

  //On utilise la fonction HOOK useState() pour surveiller l'état du panier
  //Retourne un tableau avec 2 valeurs, un objet et une fonction 
  const etatPanier = useState({}); 
  let panier= etatPanier[0];
  let setPanier = etatPanier[1];
  
  return (
    <div className="Appli">
     <Entete panier={panier}/>
     <ListeProduits panier ={panier} setPanier={setPanier}/>
     <Pied2page/> 
    </div>
  );
}

export default Appli;
