import "./Produit.scss";
import Badge from '@mui/material/Badge';

export default function Produit({panier, setPanier, nom, prix, pid}) {
 // let panier = props.panier;  //avec Produit(props)
 // let setPanier = props.setPanier;

  //Ajouter au panier....
  function ajouterPanier() {
    
     //Premièrement il faut obtenir une copie conforme du panier / un clone
    // let clonerPanier = JSON.parse(JSON.stringify(panier));
    //let clonePanier = {... panier }; //... est un spread operator et ça clone
    let clonePanier = Object.assign({}, panier); //autre façon de cloner, prend les valeurs de panier et met dans new objet

    //On doit ajouter le produit au panier
    if (clonePanier[pid]) {
      clonePanier[pid].qte++;
    } else {
      clonePanier[pid] = {prix: prix, qte: 1};
    }

    //Puis on doit donner à setPanier la nouvelle valeur du panier
    setPanier(clonePanier);

     //LocalStorage demo (JS pas React - il faut se rappeller d'effetuer cet effet secondaire
     // après chaque opéraion qui modifie le p)
    //Le panier à étét modifié, donc on sauvegarde son dernier état dans localStorage
 /*    window.localStorage.setItem('panier-ls', JSON.stringify(clonePanier)); */
  }

  return (
    <article className="Produit">
      <img src={"images-produits/" + pid + ".webp"} alt="{.nom}" />
      <span className="nom">{nom}</span>
      <span className="prix">{prix}</span>
      <Badge color='success' badgeContent={(panier[pid]) ? panier[pid].qte : 0}>
      <button onClick={ajouterPanier}>Ajouter au panier</button>
      </Badge>
    </article>
  );
}
