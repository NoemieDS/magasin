import "./Produit.scss";

export default function Produit({panier, setPanier, nom, prix, pid}) {
 // let panier = props.panier;  avec Produit(props)
 // let setPanier = props.setPanier;

  //Ajouter au panier....
  function ajouterPanier() {
    //Premièrement il faut obtenir une copie conforme du panier / un clone
    // let clonerPanier = JSON.parse(JSON.stringify(panier));
    //let clonePanier = {... panier }; //... est un spread operator et ça clone
    let clonePanier = Object.assign({}, panier); //autre façpon de cloner, prend les valeurs de panier et met dans new objet

    //On doit ajouter le produit au panier
    if (clonePanier[pid]) {
      clonePanier[pid].qte++;
    } else {
      clonePanier[pid] = {prix: prix, qte: 1};
    }

    //Puis on doit donner à setPanier la nouvelle valeur du panier
    setPanier(clonePanier);
  }

  return (
    <article className="Produit">
      <img src={"images-produits/" + pid + ".webp"} alt="{.nom}" />
      <span className="nom">{nom}</span>
      <span className="prix">{prix}</span>
      <button onClick={ajouterPanier}>Ajouter au panier</button>
    </article>
  );
}
