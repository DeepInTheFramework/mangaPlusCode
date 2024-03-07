import React, { useRef, useState } from 'react';
import './css/Announcement.css';
import slide1 from './img/announcement/a1.jpg';
import slide2 from './img/announcement/a2.jpg';
import slide3 from './img/announcement/a3.jpg';
import slide4 from './img/announcement/a4.jpg';
import slide5 from './img/announcement/a5.jpg';

function Annoucement () {
    const [activatedDirection, setActivatedDirection] = useState('left')

  const galleryRef = useRef(null);

  // Fonction pour faire défiler la galerie vers la droite
  const scrollRight = () => {
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: galleryRef.current.scrollLeft + 2000,
          behavior: 'smooth' // Ajout de l'option pour un défilement fluide
        });
      }
    changeActivate('right')
  };

  // Fonction pour faire défiler la galerie vers la gauche
  const scrollLeft = () => {
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: galleryRef.current.scrollLeft - 2000,
          behavior: 'smooth' // Ajout de l'option pour un défilement fluide
        });
      }
      changeActivate('left')
  };

  const changeActivate = (direction) => {

            if(direction === 'left') {
                setActivatedDirection('left')
            }

            else {
            setActivatedDirection('right')
                }
  }



return (
    <div className='Announcement'>
    <div
    className='slider'
      ref={galleryRef}
      style={{
        display: 'flex',
        overflowX: 'hidden',
      }}
    >
      {/* Images du slider*/}
      <img src={slide1} alt="Image 1" />
      <img src={slide2} alt="Image 1" />
      <img src={slide3} alt="Image 1" />
      <img src={slide4} alt="Image 1" />
      <img src={slide5} alt="Image 1" />
      {/* Fin des images */}
    </div>
    
    <div className='button'>
    <div className='buttonContainer'>
      <div id='buttonLeft' className={ activatedDirection === 'left' ? 'realButton activated' : "realButton desactivated" } onClick={scrollLeft}></div>
      <div id='buttonRight' className={ activatedDirection === 'right' ? 'realButton activated' : "realButton desactivated" } onClick={scrollRight}></div>
    </div>
    </div>
    </div>
  );
}




export default Annoucement;