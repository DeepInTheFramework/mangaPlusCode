import React, { useRef } from 'react';
import './css/App.css';
import Annoucement from './Announcement';
import MangaScreen from './MangaScreen';
import logo from './img/header/logo.png';
import creatorBanner from './img/creators-banner.jpg';


function App() {

  
  return (

    
    <div className="App">
      
      <header className="header">
          <div className='logo'>
              <img src={logo}  alt='logo de Manga Plus'/>
          </div>

          <div className='menu'>
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
            <MangaScreen />
        </div>
        <div className='rightContainer'>
          <img src={creatorBanner} alt='banner about creators' style={{ borderTopLeftRadius : '10px', borderBottomLeftRadius : '10px'}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
