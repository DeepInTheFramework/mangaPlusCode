import React, { useEffect, useRef, useState } from 'react';
import './css/Announcement.css';
import slide1 from './img/announcement/a1.jpg';
import slide2 from './img/announcement/a2.jpg';
import slide3 from './img/announcement/a3.jpg';
import slide4 from './img/announcement/a4.jpg';
import slide5 from './img/announcement/a5.jpg';
import useDebouncedResize from './hooks/useDebouncedResize';


/**
 * The Annoucement component displays an auto-sliding image carousel.
 * The component adjusts its behavior based on the window width and allows manual control via buttons.
 */

function Annoucement () {


    const [currentSlideNumber, setCurrentSlideNumber] = useState (1) //Keep track of the number the current slide on the screen

    //Those state are used to change the button of each slide on the slider. If activated the shape is wide, if not, it's round.
    const [slide1ActivatedStatus, setSlide1ActivatedStatus] = useState(true) 
    const [slide2ActivatedStatus, setSlide2ActivatedStatus] = useState(false)
    const [slide3ActivatedStatus, setSlide3ActivatedStatus] = useState(false)
    const [slide4ActivatedStatus, setSlide4ActivatedStatus] = useState(false)
    const [slide5ActivatedStatus, setSlide5ActivatedStatus] = useState(false)

    const [currentSlideSens, setCurrentSlideSens] = useState('right') //Define the sliding direction used at the moment
    const windowWidth = useDebouncedResize(100)
    
  //  const [windowWidth, setWindowWidth] = useState(window.innerWidth) //Keep track of the size of the window
    const [hoverSlide, setHoverSlide] = useState(false) //Used to know if the slide is hovered, so the automatic sliding could be stop.

   /* const handleResize = () => {
      console.log("Je resize, ", window.innerWidth)
      setWindowWidth(window.innerWidth);
    }; 
  
    window.addEventListener('resize', handleResize);
    






    /*
    useEffect (() => {
        if (hoverSlide) {console.log("hovering")}
        else {console.log("not hovering")}
    }, [hoverSlide] )*/


    useEffect(() => {

            /*This use Effect is dedicated to switch the direction of the auto sliding
              When the sliding get to the last slide possible, the direction switch and continue
              the useEffect does it by knowing how many slides there is depending of the window width*/ 


          switch (true) { 
            case windowWidth <= 1200 :
              if (currentSlideNumber >= 5)
                {
                  setCurrentSlideSens('left')
                }
        
                else if (currentSlideNumber <= 1) {
                  setCurrentSlideSens('right')
                }
                break;
          
            case windowWidth < 1920 && windowWidth > 1200:
              if (currentSlideNumber >= 3)
               {
               setCurrentSlideSens('left')
               }
            
              else if (currentSlideNumber <= 1)  {
                setCurrentSlideSens('right')
              }
              break;
            
            case windowWidth >= 1920 :
              if (currentSlideNumber >= 2)
                {
                  setCurrentSlideSens('left')
                }
        
                else if (currentSlideNumber <= 1)  {
                  setCurrentSlideSens('right')
                }
                break;        
              }
        
    }, [currentSlideNumber]);


    useEffect(() => {

      /*This use Effect change the slide of the screen each 4s
      Depeding on the current direction, it switch left or right.*/  

      if (!hoverSlide) {

        const intervalId = setInterval(() => {

          if(currentSlideSens === 'left')
            {scrollSlider(currentSlideNumber-1)}

          else {scrollSlider(currentSlideNumber+1)}

      }, 4000); // Toutes les 4 secondes

      // Nettoyer l'intervalle lors du démontage du composant
      return () => {
        clearInterval(intervalId);
      };}

    }, [currentSlideNumber, hoverSlide]);



    useEffect(() => {
        /*This use Effect is used to change the shape of sliding circle.
    He activate the current slide (that became wide due to css) and deactivate every other button*/ 

      const setButtonFunctions = [setSlide1ActivatedStatus, setSlide2ActivatedStatus, setSlide3ActivatedStatus, 
        setSlide4ActivatedStatus, setSlide5ActivatedStatus];

        for (let i = 0; i < setButtonFunctions.length; i++) {

          if(i===(currentSlideNumber-1)) {
            setButtonFunctions[i](true); 
            continue;}
          setButtonFunctions[i](false); // false pour 'desactivated', true pour 'activated'
        }
        console.log("______________________________________")

    }, [currentSlideNumber]);


  const galleryRef = useRef(null);

  // Function that slide to the next slider on the right
  const scrollRight = (slidingNumber) => {
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: galleryRef.current.scrollLeft + slidingNumber,
          behavior: 'smooth'
        });
      }
  };

  // Function that slide to the next slider on the left
  const scrollLeft = (slidingNumber) => {
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: galleryRef.current.scrollLeft - slidingNumber,
          behavior: 'smooth'
        });
      }
  };


  const scrollSlider = (buttonNumber) => {
    /* The first function called to activate the slider
    the function will calculate the value of scroll depending of the width of the window
    then, will proceed to call scrollLeft or scrollRight with the correcte value.
    */
    let numberOfButton = buttonNumber;
    const screenWidth = window.innerWidth;
    let valueOfScroll = 0;

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

    if(windowWidth <= 1200)
      {
        if (numberOfButton===6) {numberOfButton=4}
      }
    else if (windowWidth < 1920) 
      {if (numberOfButton===4) {numberOfButton=2}}

    else {
      if (numberOfButton===3) {numberOfButton=1}
    }

    if (numberOfButton===0) {numberOfButton=2}
    const divNumberDifference = currentSlideNumber - numberOfButton;

      if(divNumberDifference > 0) //La slide souhaitée est à gauche de la slide actuel. On slide donc à gauche
        {
          scrollLeft(Math.abs(valueOfScroll*divNumberDifference))
          setCurrentSlideNumber(numberOfButton)
        }
      
        else if (divNumberDifference < 0)   //La slide souhaitée est à droite de la slide actuel. On slide donc à droite
        {
          scrollRight(Math.abs(valueOfScroll*divNumberDifference))
          setCurrentSlideNumber(numberOfButton)
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
      onMouseEnter={() => setHoverSlide(true)} onMouseLeave={() => setHoverSlide(false)}
    >
      {/* Images du slider*/}
      <img src={slide1} alt="Banner image 1" />
      <img src={slide2} alt="Banner image 2" />
      <img src={slide3} alt="Banner image 3" />
      <img src={slide4} alt="Banner image 4" />
      <img className='lastSlide' src={slide5} alt="Banner image 5" />
      {/* Fin des images */}
      
    </div>
    
    <div className='button' >
    <div className='buttonContainer' onMouseEnter={() => setHoverSlide(true)} onMouseLeave={() => setHoverSlide(false)}>
      <div id='sliderButton1' className={ slide1ActivatedStatus ? 'realButton activated' : "realButton desactivated" } onClick={() => scrollSlider(1)}></div>
     
     
      <div  id='sliderButton2' 
      className={ slide2ActivatedStatus ? 'realButton activated' : "realButton desactivated" } onClick={() => scrollSlider(2)}></div>
      
      <div id='sliderButton3' 
      
      className={ slide3ActivatedStatus ? 'realButton activated' : "realButton desactivated" }
      style ={{display : windowWidth <= 1919 ? 'block' : 'none'}} onClick={() => scrollSlider(3)}></div>
     
      <div  id='sliderButton4' 
      className={ slide4ActivatedStatus ? 'realButton activated' : "realButton desactivated" }
      style ={{display : windowWidth <= 1200 ? 'block' : 'none'}}
      onClick={() => scrollSlider(4)}></div>

      <div id='sliderButton5'
            style ={{display : windowWidth <= 1200 ? 'block' : 'none'}} 
      className={ slide5ActivatedStatus ? 'realButton activated' : "realButton desactivated" } onClick={() => scrollSlider(5)}></div>
  
    </div>
    </div>
    </div>
  );
}




export default Annoucement;