import React, { useEffect, useRef, useState } from 'react';
import './css/Announcement.css';
import slide1 from './img/announcement/a1.jpg';
import slide2 from './img/announcement/a2.jpg';
import slide3 from './img/announcement/a3.jpg';
import slide4 from './img/announcement/a4.jpg';
import slide5 from './img/announcement/a5.jpg';

function Annoucement () {
    const [currentSlideNumber, setCurrentSlideNumber] = useState (1)
    const [slide1ActivatedStatus, setSlide1ActivatedStatus] = useState(true)
    const [slide2ActivatedStatus, setSlide2ActivatedStatus] = useState(false)
    const [slide3ActivatedStatus, setSlide3ActivatedStatus] = useState(false)
    const [slide4ActivatedStatus, setSlide4ActivatedStatus] = useState(false)
    const [slide5ActivatedStatus, setSlide5ActivatedStatus] = useState(false)
    const [currentSlideSens, setCurrentSlideSens] = useState('right')


    useEffect(() => {
      if (currentSlideNumber >= 5)
        {
          setCurrentSlideSens('left')
        }

        else {
          setCurrentSlideSens('right')
        }
    }, [currentSlideNumber]);


    useEffect(() => {
      console.log("------------------- USE EFFECT -------------------")
      console.log("On est dans le useEffect et currentSlideNumber est : ", currentSlideNumber)

      const intervalId = setInterval(() => {
        if(currentSlideSens === 'left')
          {scrollSlider(currentSlideNumber-1)}

        else {scrollSlider(currentSlideNumber+1)}

      }, 7000); // Mettre à jour toutes les 3 secondes
      // Nettoyer l'intervalle lors du démontage du composant
      return () => {
        clearInterval(intervalId);
      };
    }, [currentSlideNumber]); // Le tableau vide [] signifie que ce useEffect s'exécute uniquement une fois après le montage initial du composant



    useEffect(() => {
      const setButtonFunctions = [setSlide1ActivatedStatus, setSlide2ActivatedStatus, setSlide3ActivatedStatus, 
        setSlide4ActivatedStatus, setSlide5ActivatedStatus];
        console.log("______________________________________")
        console.log("Current slide number est", currentSlideNumber)

        for (let i = 0; i < setButtonFunctions.length; i++) {
          console.log("On boucle sur", i)
          if(i===(currentSlideNumber-1)) {
            console.log("On boucle sur", i, "qui est indentique à ", currentSlideNumber, "donc on le met a true")
            setButtonFunctions[i](true); 
            continue;}
          setButtonFunctions[i](false); // false pour 'desactivated', true pour 'activated'
          console.log("slide", i, " à été désactivé")
        }
        console.log("______________________________________")

    }, [currentSlideNumber]);


  const galleryRef = useRef(null);

  // Fonction pour faire défiler la galerie vers la droite
  const scrollRight = (slidingNumber) => {
    console.log("On slide vers la droite")
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: galleryRef.current.scrollLeft + slidingNumber,
          behavior: 'smooth' // Ajout de l'option pour un défilement fluide
        });
      }
  };

  // Fonction pour faire défiler la galerie vers la gauche
  const scrollLeft = (slidingNumber) => {
    console.log("On slide vers la gauche")
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: galleryRef.current.scrollLeft - slidingNumber,
          behavior: 'smooth' // Ajout de l'option pour un défilement fluide
        });
      }
  };


  const scrollSlider = (buttonNumber) => {
    console.log("______________________________________")
    console.log('Button number dans scrollSlider est', buttonNumber);
    let numberOfButton = buttonNumber;
    const screenWidth = window.innerWidth;
    let valueOfScroll = 0;

    if(numberOfButton === 4 && window.innerWidth > 1100) {
      numberOfButton =2;
    }

    const divNumberDifference = currentSlideNumber - numberOfButton;
    console.log('Je fais la différence entre currentSlideNumber :', currentSlideNumber, " et numberOfButton : ", numberOfButton);

    switch (true) {

      case screenWidth >= 1920:
        valueOfScroll = (document.body.clientWidth-(document.body.clientWidth*0.028));
        break;
    
      case screenWidth >= 1620:
        valueOfScroll = (document.body.clientWidth-(document.body.clientWidth*0.028));
        break;
    
      case screenWidth >= 1044:
        valueOfScroll = (document.body.clientWidth-(document.body.clientWidth*0.028));
        break;
    
      case screenWidth >= 788:
        valueOfScroll = (document.body.clientWidth-(document.body.clientWidth*0.028));
        break;
    
      default:
        valueOfScroll = (document.body.clientWidth-(document.body.clientWidth*0.028));
    }

   // console.log('LA VALUE DE INNERWIDTH EST :', screenWidth)
  //  console.log('LA VALUE DE SCROLL SERA :', valueOfScroll)

     if(divNumberDifference > 0) //La slide souhaitée est à gauche de la slide actuel. On slide donc à gauche
      {
        console.log("La slide souhaitée est à gauche de la slide actuel. On slide donc à gauche")
        console.log("La différence est ", divNumberDifference)
        scrollLeft(Math.abs(valueOfScroll*divNumberDifference))
        setCurrentSlideNumber(numberOfButton)
        console.log("J'ai setCurrentSlideNumber à :", numberOfButton)
      }
     
      else if (divNumberDifference < 0)   //La slide souhaitée est à droite de la slide actuel. On slide donc à droite
      {
        console.log("La slide souhaitée est à droite de la slide actuel. On slide donc à droite")
        console.log("La différence est ", divNumberDifference)
        scrollRight(Math.abs(valueOfScroll*divNumberDifference))
        setCurrentSlideNumber(numberOfButton)
        console.log("J'ai setCurrentSlideNumber à :", numberOfButton)
      }
      console.log("______________________________________")



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
      <img className='lastSlide' src={slide5} alt="Slide 5" />
      {/* Fin des images */}
    </div>
    
    <div className='button'>
    <div className='buttonContainer'>
      <div id='sliderButton1' className={ slide1ActivatedStatus ? 'realButton activated' : "realButton desactivated" } onClick={() => scrollSlider(1)}></div>
     
     
      <div  id='sliderButton2' 
      style ={{display : window.innerWidth <= 1320 ? 'block' : 'none'}}
      className={ slide2ActivatedStatus ? 'realButton activated' : "realButton desactivated" } onClick={() => scrollSlider(2)}></div>
      
      <div id='sliderButton3' 
      
      className={ slide3ActivatedStatus ? 'realButton activated' : "realButton desactivated" }
      style ={{display : window.innerWidth <= 1320 ? 'block' : 'none'}} onClick={() => scrollSlider(3)}></div>
     
      <div  id='sliderButton4' 
      className={ slide4ActivatedStatus ? 'realButton activated' : "realButton desactivated" }
      style ={{display : window.innerWidth <= 1919 ? 'block' : 'none'}}
      onClick={() => scrollSlider(4)}></div>

      <div id='sliderButton5' 
      className={ slide5ActivatedStatus ? 'realButton activated' : "realButton desactivated" } onClick={() => scrollSlider(5)}></div>
  
    </div>
    </div>
    </div>
  );
}




export default Annoucement;