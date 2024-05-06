import React, { useRef, useEffect } from 'react';
import './css/App.css';
import Annoucement from './Announcement';
import MangaScreen from './MangaScreen';
import MangaHighlights from './MangaHighlights';
import logo from './img/header/logo.png';
import creatorBanner from './img/creators-banner.jpg';
import Footer from './Footer'
import Socials from './Socials';
import searchButton from './img/searchIcon.svg';


function App() {

  const targetDivRef = useRef(null);

  useEffect(() => {
    // Récupérer l'élément avec la référence siteStart
    const siteStartElement = document.querySelector('#siteStart');
    // Assigner l'élément récupéré à targetDivRef.current
    targetDivRef.current = siteStartElement;
    console.log(siteStartElement)
    console.log(targetDivRef)
  }, []); // Utilisation de useEffect avec un tableau de dépendances vide pour s'assurer que cela ne se produit qu'une seule fois


  const scrollToTarget = () => {
    console.log("ScrollToTarget lancé")
    // Vérifier si la div cible est montée
    if (targetDivRef.current && targetDivRef.current.offsetTop !== undefined) {
      console.log("Cible existante")
        // Défilement vers la position de la div cible
        window.location.href = "/#siteStart";
    } 
};
  
      function YellowHighlightOnEnter(divName) {
            const yellowDiv = document.getElementById('yellowHightlightID')
            console.log (yellowDiv)
        switch (divName) {


          case 'recent' :
            const recentDiv = document.querySelector('.recent'); 
            const recentRect = recentDiv.getBoundingClientRect();
            yellowDiv.style.top = 0;
            yellowDiv.style.left = `${recentRect.left-10}px`;
            yellowDiv.style.width = `${recentRect.width+20}px`;
            break;


            case 'enVedette' :
              const enVedetteDiv = document.querySelector('.enVedette'); 
              const enVedetteRect = enVedetteDiv.getBoundingClientRect();
              yellowDiv.style.top = 0;
              yellowDiv.style.left = `${enVedetteRect.left-10}px`;
              yellowDiv.style.width = `${enVedetteRect.width+20}px`;
              break;

              case 'listeDesMangas' :
                const listeDesMangasDiv = document.querySelector('.listeDesMangas'); 
                const listeDesMangasRect = listeDesMangasDiv.getBoundingClientRect();
                yellowDiv.style.top = 0;
                yellowDiv.style.left = `${listeDesMangasRect.left-10}px`;
                yellowDiv.style.width = `${listeDesMangasRect.width+20}px`;
                break;  

                case 'ranking' :
                  const rankingDiv = document.querySelector('.ranking'); 
                  const rankingRect = rankingDiv.getBoundingClientRect();
                  yellowDiv.style.top = 0;
                  yellowDiv.style.left = `${rankingRect.left-10}px`;
                  yellowDiv.style.width = `${rankingRect.width+20}px`;
                  break;  

            case 'creators' :
              const creatorsDiv = document.querySelector('.creators'); 
              const creatorsRect = creatorsDiv.getBoundingClientRect();
              yellowDiv.style.top = 0;
              yellowDiv.style.left = `${creatorsRect.left-10}px`;
              yellowDiv.style.width = `${creatorsRect.width+20}px`;
              break;

              case 'favoris' :
              const favorisDiv = document.querySelector('.favoris'); 
              const favorisRect = favorisDiv.getBoundingClientRect();
              yellowDiv.style.top = 0;
              yellowDiv.style.left = `${favorisRect.left-10}px`;
              yellowDiv.style.width = `${favorisRect.width+20}px`;
              break;

              case 'aProposDeNous' :
                const aProposDeNousDiv = document.querySelector('.aProposDeNous'); 
                const aProposDeNousRect = aProposDeNousDiv.getBoundingClientRect();
                yellowDiv.style.top = 0;
                yellowDiv.style.left = `${aProposDeNousRect.left-10}px`;
                yellowDiv.style.width = `${aProposDeNousRect.width+20}px`;
                break;
        }



      }

      function YellowHighlightOnLeave() {
        const yellowDiv= document.getElementById('yellowHightlightID')
          yellowDiv.style.top = '-5px';
          yellowDiv.style.width = '10px';

  }

        
  return (

    
   
    <div className="App">
      
      <header className="header">
      <div class="menu-mobile">
        <span></span>
        <span></span>
        <span></span>
      </div>
          <div className='logo'>
              <img src={logo}  alt='logo de Manga Plus'/>
          </div>

          <div className='menu' id='siteStart'>
              <ul  style={{ listStyleType: 'none' }}>
                <li className='recent'
                onMouseEnter={ ()=> YellowHighlightOnEnter('recent')}
                onMouseLeave={() => YellowHighlightOnLeave()}
                >RÉCENT</li>
                <li className='enVedette'
                                                onMouseEnter={()=> YellowHighlightOnEnter('enVedette')}
                                                onMouseLeave={() => YellowHighlightOnLeave()}
                >EN VEDETTE</li>


                <li className='ranking'
                                                onMouseEnter={()=> YellowHighlightOnEnter('ranking')}
                                                onMouseLeave={() => YellowHighlightOnLeave()}
                >RANKING</li>

                <li className='listeDesMangas'
                                onMouseEnter={()=> YellowHighlightOnEnter('listeDesMangas')}
                                onMouseLeave={() => YellowHighlightOnLeave()}
                >LISTE DES MANGAS</li>
                <li className='creators' 
                onMouseEnter={ ()=> YellowHighlightOnEnter('creators')}
                onMouseLeave={() => YellowHighlightOnLeave()}
                >
                  
                  CREATORS
                </li>
                <li className='favoris'
                onMouseEnter={ ()=> YellowHighlightOnEnter('favoris')}
                onMouseLeave={() => YellowHighlightOnLeave()}                
                >FAVORIS</li>

                <li className='hideOnSmallScreen aProposDeNous'
                                                onMouseEnter={()=> YellowHighlightOnEnter('aProposDeNous')}
                                                onMouseLeave={() => YellowHighlightOnLeave()}
                >À PROPOS DE NOUS</li>
              </ul>
          </div>

          <div className='searchBar'>
            <input type="text" 
              placeholder='Recherche par titre ou par auteur'
            />
              <img className='iconSearch' src={searchButton}/>

          </div>

          <div className='redHightlight'></div>
          <div className='yellowHightlight' id='yellowHightlightID'></div>
      </header>
      <Annoucement />

      <div className='body'>
        <div className='leftContainer'>
            <MangaScreen sendRef={ref => (targetDivRef.current = ref)} />
        </div>
        <div className='rightContainer'>
          <Socials />
          <img src={creatorBanner} alt='banner about creators' style={{ borderTopLeftRadius : '10px', borderBottomLeftRadius : '10px'}}/>
          <MangaHighlights />
        </div>
      </div>

          <Footer scrollToTarget={scrollToTarget}/>

    </div>
  );
}

export default App;
