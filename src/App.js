import React, { useRef, useEffect } from 'react';
import './css/App.css';
import Annoucement from './Announcement';
import MangaScreen from './MangaScreen';
import MangaHighlights from './MangaHighlights';
import logo from './img/header/logo.png';
import creatorBanner from './img/creators-banner.jpg';
import Footer from './Footer'


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
        document.querySelector('body').scrollTo(0,0);
    } 
};
  
  return (

    
    
    <div className="App">
      
      <header className="header">
          <div className='logo'>
              <img src={logo}  alt='logo de Manga Plus'/>
          </div>

          <div className='menu' id='siteStart'>
              <ul>
                <li>RÉCENT</li>
                <li>EN VEDETTE</li>
                <li>LISTE DES MANGAS</li>
                <li>CREATORS</li>
                <li>FAVORIS</li>
                <li>À PROPOS DE NOUS</li>
              </ul>
          </div>

          <div className='searchBar'>
            <input type="text" 
              placeholder='Recherche par titre ou par auteur'
            />
          </div>
      </header>
      <Annoucement />

      <div className='body'>
        <div className='leftContainer'>
            <MangaScreen sendRef={ref => (targetDivRef.current = ref)} />
        </div>
        <div className='rightContainer'>
          <img src={creatorBanner} alt='banner about creators' style={{ borderTopLeftRadius : '10px', borderBottomLeftRadius : '10px'}}/>
          <MangaHighlights />
        </div>
      </div>

          <Footer scrollToTarget={scrollToTarget}/>

    </div>
  );
}

export default App;
