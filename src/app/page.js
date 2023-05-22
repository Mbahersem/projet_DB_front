import './style.css';


function Header() {
  return(
    <header className="header">
      <div>
        <span>🙍🏾 {}</span>
      </div>
      <div>
        <span>Deconnexion 🚪</span>
      </div>
    </header>
  );
}

function NavBar() {
  return(
    <nav className="navbar">
      <ul>
        <li>🏠 Facturation</li>
        <li>🧮 Catégories</li>
        <li>📅 Produits</li>
        <li>❔ A propos</li>
      </ul>
    </nav>
  );
}

function Menu() {
    
    return(
      <div className="menu-container">
      <div className="item1">
        <span>📞 </span>
        <input type="text" placeholder="Téléphone Client" />
      </div>
      <div className="item2">
        <span>Mode de paiement : </span>
        <input type="checkbox" name="cash" id="cash" />
        <label htmlFor="cash">  Cash :</label>
      </div>
      <div className="item3">
      <span>✏️ </span>
        <input type="text" placeholder="Code Produit " />
      </div>
      <div className="item4">
        <span>Quantité </span>
        <input type="text" />
      </div>
      <div className="item5">
        <span>➖ </span>
        <input type="text" placeholder="Remise Max=40.0" />
        <span>%</span>
      </div>
      <div className="item6">
        <span>Quantité en Stock :</span>
        <span> {} </span>
        <button className='btn-add'>+</button>
      </div>
    </div>
  );
}

function MenuFooter() {
  return(
    <div className="menu-footer-container">
      <div>
        <span>Total (Fcfa) :</span>
        <span> {}</span>
      </div>
      <div>
        <span>Net A Payer (Fcfa) :</span>
        <span> {}</span>
      </div>
      <div>
        <input type="text" placeholder="Montant remis" />
        <span>Reliquat :</span>
        <span> {}</span>
      </div>
    </div>
  );
}

function Table() {
  return(
    <div className='table'>
      <table>
        <tr>
          <th>Code Produit</th>
          <th>Prix Unitaire</th>
          <th>Quantité</th>
          <th>Sous-Total</th>
        </tr>
      </table>
    </div>
  );
}

function Footer() {
  return(
    <footer>
      <div>
        <button>Recette Journalière</button>
      </div>
      <div className='four-buttons'>
        <button className = "btn-supp">Supprimer</button>
        <button>Annuler</button>
        <button>Aperçu</button>
        <button>Valider</button>

      </div>
    </footer>
  );
}

export default function Home() {

  const baseTest = [
    {codePro:100414, prixUni: 10500},
    {codePro:100757, prixUni: 10000},
    {codePro:100884, prixUni: 7500}
  ];

  return(
    <div className="home">
      <Header />
      <NavBar />
      <div className='facture'>
        <Menu />
        <div className="afficher"></div>
      </div>
      <hr />
      <MenuFooter />
      <Table />
      <Footer />
    </div>
  );
}