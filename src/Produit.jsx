import "./Produit.scss";

export default function Produit(props) {
  let panier = props.panier;
  let setPanier = props.setPanier;

  //Ajouter au panier....
  function ajouterPanier() {
    //Premièrement il faut obtenir une copie du panier / un clone
    // let clonerPanier = JSON.parse(JSON.stringify(panier));
    //let clonePanier = { ...panier }; //... est un splash et ça clone
    let clonePanier = Object.assign({}, panier);


    //On doit ajouter le produit au panier
    if (clonePanier[props.pid]) {
      clonePanier[props.pid]++;
    } else {
      clonePanier[props.pid] = {prix: props.prix, qte: 1};
    }

    //Puis on doit donner à setPanier la nouvelle valeur du panier
    setPanier(clonePanier);
  }

  return (
    <article className="Produit">
      <img src={"images-produits/" + props.pid + ".webp"} alt="{props.nom}" />
      <span className="nom">{props.nom}</span>
      <span className="prix">{props.prix}</span>
      <button onClick={ajouterPanier}>Ajouter au panier</button>
    </article>
  );
}
