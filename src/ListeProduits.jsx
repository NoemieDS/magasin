import './ListeProduits.scss';
import Produit from "./Produit";
import produits from "./data/produits.json";

export default function ListeProduits(props) {

  return (
    <section className="ListeProduits">
      <h2>Liste des produits</h2>
      <section className="produits"> 
      {
        //fonction fléchée produits.map((prd) => prd.nom)
        produits.map(function (prd) {
        return <Produit panier={props.panier} setPanier={props.setPanier} key={Produit.id} nom={prd.nom} prix={prd.prix} pid={prd.id}/>;
        })
      }
      </section>
    </section>
  );

  /*
  Exemple 2
      console.log("Les produits", produits)

// boucle dans le tableau json - Pas la manière REACT
      let composantsProduit = [];
      for(let prd of produits) {
            composantsProduit.push(<Produit nom={prd.nom} prix={prd.prix} />);
      }

      return(
            <section>
         {composantsProduit}
                  </section>
            ) 
            */
  /*
Exemple 1

console.log("Les propriétés :", props)
return(
<section>
        <h2>Liste des produits</h2>
     <Produit nom="Chemise bleu en cotton" prix="99.99$"/>
     <Produit nom="Jeans rouge" prix="150.85$"/>
     <Produit nom="Bottes en cuir" prix="200.00$"/>

      </section>
) */
}
