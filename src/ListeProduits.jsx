import "./ListeProduits.scss";
import Produit from "./Produit";
import produits from "./data/produits.json";

export default function ListeProduits({panier, setPanier}) {
  return (
    <section className="ListeProduits">
      <h2>Liste des produits</h2>
      <section className="produits">
        {

          //fonction fléchée produits.map((prd) => prd.nom)
          /* map() = fonction qui fait correspondre chaque élément du tableau va passer dans 
            la fonction. c'est comme une boucle sans écrire une boucle
           produits.map(function(prd) {
           return console.log("Les produits :", prd.nom);
        });*/
          produits.map(function (prd) {
            return (
                <Produit
                panier={panier}
                setPanier={setPanier}
                key={prd.id}
                nom={prd.nom}
                prix={prd.prix}
                pid={prd.id}
              />
            );
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
}
