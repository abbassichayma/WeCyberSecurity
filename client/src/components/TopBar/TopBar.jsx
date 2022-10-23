import React from 'react'
import './TopBar.css'
const TopBar = () => {
  return (
	<div className="tetiere">

	<div className="bandeau">
		<span className="titreHeader">Compte ameli</span>
	</div>
	<a className="r_lien_image" href="https://assure.ameli.fr:443/PortailAS/appmanager/PortailAS/assure?_nfpb=true&amp;_pageLabel=as_accueil_page" 
	title="Accéder à l'accueil">
		
	<img src="https://assure.ameli.fr/PortailAS/ShowProperty/WLP%20Repository/images/logosRegimes/logo_regime_general" className="logoam"  alt="Logo du régime d'assurance maladie"/>
	</a>
</div>
  )
}

export default TopBar