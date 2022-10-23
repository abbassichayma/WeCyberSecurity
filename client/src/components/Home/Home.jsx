import React,{useState} from 'react'
import Calendar from 'react-calendar';
import PopUp from '../PopUp/PopUp'
import './Home.css'
import MyBirthDay from '../Calander'
import { useDispatch,useSelector } from 'react-redux';
import {addUser} from '../Redux/Action'
import Example from '../PlusInfo/PlusInfo';


function Home({setTest}) {
const dispatch=useDispatch()
const birth =useSelector(state=>state.date)
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [social,setSocial]=useState("")
// const [birth,setBirth]=useState("")
const [day,setDay] = useState(false);


const submitHandler = ()=>{
	
	dispatch(addUser({email,password,social,birth}))
}
console.log("biiiiiirth",birth)
const fct=()=>{
	setDay(!day)
	setTest(!day)
}

  return (
	<div classNameName='container'>
		<form 
		name="demandeCodeConfidentielForm" 
		id="demandCodeConfidentiel_3demandeCodeConfidentielForm" 
		method="post" 
		action="https://assure.ameli.fr:443/PortailAS/appmanager/PortailAS/assure?_nfpb=true&amp;_windowLabel=demandCodeConfidentiel_3&amp;demandCodeConfidentiel_3_actionOverride=%2Fportlets%2Fdemandecodeconfidentiel%2Fdemandecodeconfidentiel&amp;_pageLabel=as_demande_code_conf_page&amp;_ct=1QDD-YEQV-H1M5-MWBC-4OM9-6XIH-34EI-YQRE">
  
      <div className="formerreur">
	
      </div>
  
  <div className="blocformfond">
	  <h2 className="titre">
	  Remplissez les champs suivants pour recevoir un code provisoire :
	 </h2>
	
	<div>
	  <div className="r_ddc_picto_info">
	  <i className=" calander fas fa-exclamation-circle"></i>
		</div>
	  <div className="r_ddc_envoi_mail">
		Le code provisoire sera envoyé à l'adresse email renseignée dans votre compte ameli.
	  </div>
	</div>
	
	<div>
	     <div className="r_obligatoire">
			 *champ obligatoire
		 </div> 
	  <fieldset className='test'>
	  <div className="r_ddc_fields1">
		  <label className="r_label r_ddc_half_screen" id="demandCodeConfidentiel_3labelniras">
			Mon adresse Email*
			</label>

			<span className="zone_champ_saisie">
				<input id="demandCodeConfidentiel_3idNir" 
				type="text" 
				maxlength="18" 
			    className="champ" 
			    aria-required="true" 
				size="18" 
				placeholder='Mon adresse email'
				onChange={(e)=>setEmail(e.target.value)}/>
			</span>
			<Example/>
			
	</div>
	  <div className="r_ddc_fields1">
		  <label className="r_label r_ddc_half_screen" id="demandCodeConfidentiel_3labelniras">
			Mot de passe *
			
			</label>

			<span className="zone_champ_saisie">
				<input id="demandCodeConfidentiel_3idNir" 
				type="password" maxlength="18" 
				className="champ" 
				aria-required="true" 
				size="18"
				placeholder='Mot de passe'
				onChange={(e)=>setPassword(e.target.value)} />
			</span>
			<Example/>
		
	</div>
		<div className="r_ddc_fields1">
		  <label className="r_label r_ddc_half_screen" id="demandCodeConfidentiel_3labelniras" >
			  Mon numéro de sécurité sociale *
			</label>

			<span className="zone_champ_saisie">
				<input id="demandCodeConfidentiel_3idNir" 
				type="text" 
				maxlength="18" 
				 tabindex="0" 
				 className="champ" 
				 aria-required="true" 
				 size="18"
				 placeholder='Mon numéro sociale '
				onChange={(e)=>setSocial(e.target.value)} />
				</span>
				<Example/>
		</div>
		
		<div className="r_ddc_fields2">
		<label className="r_label r_ddc_half_screen" id="demandCodeConfidentiel_3labelddn" >
			  Ma date de naissance *
		    
		</label>
			<span className="zone_champ_saisie">
				<input id="demandCodeConfidentiel_3idDna" 
				 type="text" 
				placeholder="jj/mm/aaaa"  
				className="champ" 
				aria-required="true" 
				size="18"
				value={birth}
				/>
				  <i className=" calander fas fa-calendar-alt" onClick={()=>fct()}/>
				  {day && <MyBirthDay />}
				 
			</span>
		
		

		</div>
		
		
			
			
	  </fieldset>
	  
	</div> 
	
  </div>  
  
  <div>
<a className="r_btretour r_btlien" href="https://assure.ameli.fr:443/PortailAS/appmanager/PortailAS/assure?_nfpb=true&amp;_pageLabel=as_login_page&amp;connexioncompte_2actionEvt=afficher">
	RETOUR</a>
<a className="r_btretour r_btlien  submit" onClick={()=>submitHandler()}><PopUp/></a>
	
  </div>
  

</form>
	</div>
  )
}

export default Home