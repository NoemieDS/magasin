import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

/* props est un argument récupérable*/
/* au lieu d'un props, on déconstruit panier*/
function Entete({panier}) {
 // console.log("le panier est un objet: ", panier);
 //console.log("les props de l'entête: ", props);
 // let panier = props.panier; si c'était function Entete(props)
  return(
    <header className="Entete">
      <h1>Magasin général</h1>
      <nav>
        <span>Produits</span>
        <span>À propos</span>
        {/* values donne les valeur associées à une étiquette */} 
        <span>
          <Badge badgeContent={Object.values(panier).length} color="secondary">
          <ShoppingCartIcon />
          </Badge>
          {/* Panier () */}
          </span>
      </nav>
    </header>
  );
}

export default Entete;