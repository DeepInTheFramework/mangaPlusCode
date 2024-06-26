import React, { useRef, useEffect, useState } from 'react';
import './css/App.css';
import Annoucement from './Announcement';
import MangaScreen from './MangaScreen';
import MangaHighlights from './MangaHighlights';
import logo from './img/header/logo.png';
import creatorBanner from './img/creators-banner.jpg';
import Footer from './Footer'
import Socials from './Socials';
import searchButton from './img/searchIcon.svg';
import Mysocials from './Mysocials';


/**
 * The App component is the basic component that render all of the other.
 * 
 */

function App() {

  const targetDivRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //Keep track of wheter or not the mobile menu is open

  useEffect(() => {
    const siteStartElement = document.querySelector('#siteStart');
    targetDivRef.current = siteStartElement;
  }, []);


  const scrollToTarget = () => {
    if (targetDivRef.current && targetDivRef.current.offsetTop !== undefined) {
      window.location.href = "/#siteStart";
    }
  };


  function openMobileMenu() { //Set the mobile menu state to true
    setIsMobileMenuOpen(true);
  }

  function closeMobileMenu() { //Set the mobile menu state to false
    setIsMobileMenuOpen(false);
  }


  function YellowHighlightOnEnter(divName) {
    /* This function allow is used to set the yellow bar on top of the menu element hovered.
     * We track the elements hovered by the user.
     * We get its cordinates and size.  
     * We then modify the attributes of the yellowDiv (Yellow Bar) to appear larger than the element and on top of it 
    */

    const yellowDiv = document.getElementById('yellowHightlightID')

    switch (divName) {
      case 'recent':
        const recentDiv = document.querySelector('.recent');
        const recentRect = recentDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${recentRect.left - 10}px`;
        yellowDiv.style.width = `${recentRect.width + 20}px`;
        break;


      case 'enVedette':
        const enVedetteDiv = document.querySelector('.enVedette');
        const enVedetteRect = enVedetteDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${enVedetteRect.left - 10}px`;
        yellowDiv.style.width = `${enVedetteRect.width + 20}px`;
        break;

      case 'listeDesMangas':
        const listeDesMangasDiv = document.querySelector('.listeDesMangas');
        const listeDesMangasRect = listeDesMangasDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${listeDesMangasRect.left - 10}px`;
        yellowDiv.style.width = `${listeDesMangasRect.width + 20}px`;
        break;

      case 'ranking':
        const rankingDiv = document.querySelector('.ranking');
        const rankingRect = rankingDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${rankingRect.left - 10}px`;
        yellowDiv.style.width = `${rankingRect.width + 20}px`;
        break;

      case 'creators':
        const creatorsDiv = document.querySelector('.creators');
        const creatorsRect = creatorsDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${creatorsRect.left - 10}px`;
        yellowDiv.style.width = `${creatorsRect.width + 20}px`;
        break;

      case 'favoris':
        const favorisDiv = document.querySelector('.favoris');
        const favorisRect = favorisDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${favorisRect.left - 10}px`;
        yellowDiv.style.width = `${favorisRect.width + 20}px`;
        break;

      case 'aProposDeNous':
        const aProposDeNousDiv = document.querySelector('.aProposDeNous');
        const aProposDeNousRect = aProposDeNousDiv.getBoundingClientRect();
        yellowDiv.style.top = 0;
        yellowDiv.style.left = `${aProposDeNousRect.left - 10}px`;
        yellowDiv.style.width = `${aProposDeNousRect.width + 20}px`;
        break;
    }
  }

  function YellowHighlightOnLeave() {
    // Function that hide back the yellowDiv when a menu element is not hovered anymore
    const yellowDiv = document.getElementById('yellowHightlightID')
    yellowDiv.style.top = '-5px'; //The div is just hide outside of the viewport
    yellowDiv.style.width = '10px';
  }


  return (



    <div className="App">

      <div className="menu-mobile"
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>



        <div className='headerOfMobileMenu'>


          <div class="menu-mobile-language">
            <div className='menu-mobile-language-left-part'>

              <div class="menu-mobile-close-icon "
                onClick={() => closeMobileMenu()}
              >
                <span className='barLeft'></span>
                <span className='barRight'></span>
              </div>

              <p>LANGUE :</p>

            </div>

            <div className='menu-mobile-language-right-part'>
              <p>Français</p>
              <span></span>
            </div>

          </div>

        </div>

        <ul className='menuListOnMobile' style={{ listStyleType: 'none' }}>
          <li className='recentMobile'
          >RÉCENT</li>
          <li className='enVedetteMobile'
          >EN VEDETTE</li>


          <li className='rankingMobile'
          >RANKING</li>

          <li className='listeDesMangasMobile'
          >LISTE DES MANGAS</li>

          <li className='creatorsMobile'
          >

            CREATORS
          </li>
          <li className='favorisMobile'
          >FAVORIS</li>

          <li className='aProposDeNousMobile'
          >À PROPOS DE NOUS</li>
        </ul>

        <div className='footerInMobileMenu'>
          <ul className='footerListOnMobile' style={{ listStyleType: 'none' }}>
            <li className='aideMobile'>Aide / FAQ</li>
            <li className='actualitesMobile'>Actualités et Événements</li>
            <li className='suggestionsMobile'>Suggestions</li>
            <li className='conditionsMobile'>Conditions d'Utilisation</li>
            <li className='evaluationsMobile'>Évaluations</li>
            <li className='copyrightMobile'>Copyright</li>
          </ul>
        </div>
      </div>


      <header className="header" id='siteStart'>
        <div class="menu-mobile-icon" onClick={() => openMobileMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </div>


        <div className='logo' >
          <img src={logo} alt='logo de Manga Plus' />
        </div>


        <div className='iconSearchOnMobile'>
          <img src={searchButton} />
        </div>


        <div className='menu' >
          <ul style={{ listStyleType: 'none' }}>
            <li className='recent'
              onMouseEnter={() => YellowHighlightOnEnter('recent')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >RÉCENT</li>
            <li className='enVedette'
              onMouseEnter={() => YellowHighlightOnEnter('enVedette')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >EN VEDETTE</li>


            <li className='ranking'
              onMouseEnter={() => YellowHighlightOnEnter('ranking')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >RANKING</li>

            <li className='listeDesMangas'
              onMouseEnter={() => YellowHighlightOnEnter('listeDesMangas')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >LISTE DES MANGAS</li>
            <li className='creators'
              onMouseEnter={() => YellowHighlightOnEnter('creators')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >

              CREATORS
            </li>
            <li className='favoris'
              onMouseEnter={() => YellowHighlightOnEnter('favoris')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >FAVORIS</li>

            <li className='hideOnSmallScreen aProposDeNous'
              onMouseEnter={() => YellowHighlightOnEnter('aProposDeNous')}
              onMouseLeave={() => YellowHighlightOnLeave()}
            >À PROPOS DE NOUS</li>
          </ul>
        </div>


        <div className='searchBar'>
          <input type="text"
            placeholder='Recherche par titre ou par auteur'
          />
          <img className='iconSearch' src={searchButton} />
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
          <img src={creatorBanner} alt='banner about creators' style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', cursor: 'pointer' }} />
          <MangaHighlights />
        </div>
      </div>

      <Footer scrollToTarget={scrollToTarget} />
      <Mysocials />

    </div>
  );
}

export default App;
