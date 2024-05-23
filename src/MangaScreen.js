import { Manga, getWSJ, getJumpPlus, getOthers, getFreeRead, arrayRandomize, WSJMangas, jumpPlusMangas, othersMangas, freeReadMangas, allMangas } from './Manga.js'; // Importation de la classe Manga et du tableau allMangas
import React, { useRef, useState, useEffect } from 'react';
import './css/Mangascreen.css'
import arrowicon from './img/arrow.png'
import views_icon from './img/eyes.svg'

/**
 * The MangaScreen component is used to render all the manga coming from the constructor
 */

function MangasScreen ( {sendRef}) {

    //Importing different function from the Manga constructor
    arrayRandomize()
    const newAllManga = allMangas.slice(0, 28);
    getWSJ()
    getJumpPlus()
    getOthers()
    getFreeRead()

    //Initializing the ref for the div the user can swipe on mobile
    const galleryRef1 = useRef(null);
    const galleryRef2 = useRef(null);
    const galleryRef3 = useRef(null);
    const galleryRef4 = useRef(null);


    const [startX, setStartX] = useState(null); //useState that save the starting point of the user swipe 

    const [dataScrollLeft, setDataScrollLeft] = useState([null, null, null, null]); //useState that save the current position of each swipable div

    const galleryRefTab = [galleryRef1, galleryRef2, galleryRef3, galleryRef4]; //Array of the div ref

    const targetDivRef = useRef(null);

    useEffect(() => {
        sendRef(targetDivRef);
    }, [sendRef]);

    
    const handleTouchStart = (event, index) => {
        setStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event, index) => {
        /*This function handle the touch of the screen
         *The fuction save the first position the user touched with his finger
         *The function then calculate the distance of the swipe using the starting and ending point of the touch
         *Then the function do a update of the current scrolling point of the specific div (index)
        */
        if (!galleryRefTab[index].current) {
            return;
        }

        if (!startX) {
            return;
        }

        const x = event.touches[0].clientX;
        const distance = startX - x;
        galleryRefTab[index].current.scrollLeft = dataScrollLeft[index] + (distance*2);
    };

    const handleTouchEnd = (index) => {
        /*This function handle the end of the user touch
         *It first reset the StartX value to null
         *Then the function update the Array of each div current slding point
        */
        setStartX(null);
        setDataScrollLeft(prevdataScrollLeft => {
            const newdataScrollLeft = [...prevdataScrollLeft];
            newdataScrollLeft[index] = galleryRefTab[index].current.scrollLeft;
            return newdataScrollLeft;
        });
    };

    // Function that swipe a div to the right
    const scrollRight = (galleryRef) => {
        if (galleryRef.current) {
          galleryRef.current.scrollTo({
            left: galleryRef.current.scrollLeft + 500,
            behavior: 'smooth'
          });
        }
      };
      
          // Function that swipe a div to the left
    const scrollLeft = (galleryRef) => {
    if (galleryRef.current) {
        galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft - 500,
        behavior: 'smooth'
        });
    }
        };




    return (

        <div className='entireScreen' ref={targetDivRef}>

            <div className='maj'>
                <div className='bigTitleAndAllMajButton'>
                    <div className='bigTitle'>
                       <span>Mises à Jour Quotidiennes</span> 
                    </div>

                    <div className='allMajButton'>
                        <span>Toutes les Mises à Jour {'>'}</span>
                    </div>
                </div>


                <div className='mangasFromMaj'>

                    {/* Map to render all manga from MAJ */}
                    {newAllManga.map((manga, index) => (
                        <div key={index} className='mangaItem'>
                        {/* Rendering each Manga data */}
                            <img src={manga.cover} alt={manga.title} />
                            <div className='nameAndTitle'>
                                <span className='mangaName'>{manga.title}</span>
                                <span className='mangaAuthor'>{manga.author}</span>
                            </div>

                            <div className='infoContainer'>
                                <div className='fineBar'></div>

                                <div className='summary'>
                                    <div className='chapterNumberAndViews'>
                                        <div className='chapterNumber'>{"#" + manga.chapterNumber}</div>
                                        <div className='mangaViews'>
                                            <img src={views_icon} />
                                            {manga.views()}
                                            </div>                                       
                                    </div>

                                    <div className='chapterTitle'>
                                    {manga.lastChapterTitle}
                                    </div>
                                </div>

                                <div className='mangaButtonContainer'>
                                    
                                    {manga.french ?                               
                                        <button className='frenchButton mangaButton'>FR</button>
                                        : null
                                    }

                                    {manga.english ?                               
                                        <button className='englishButton mangaButton' style={manga.french ? null : { backgroundColor: '#5d0914'  }}>EN</button>
                                        : null
                                        
                                    }
                                </div>

                            </div>
                        </div>
                    ))}


                </div>

                <div className='WSJCategory'>

                    <h1 className='categoryitle WSJ'>
                    WEEKLY SHONEN JUMP
                    </h1>
                    
                    <div ref={galleryRef1} className='mangasFromWSJ'
                            onTouchStart={(event) => handleTouchStart(event, 0)}
                            onTouchMove={(event) => handleTouchMove(event, 0)}
                            onTouchEnd={() => handleTouchEnd(0)}>

                        {WSJMangas.map((manga, index) => (
                            <div key={index} className='mangaItemExceptMaj'>
                            {/* Rendering Manga from WSJ */}
                            <img src={manga.cover} alt={manga.title} />

                            </div>
                        ))}
                        
                   </div>

                    <div className='containerLeft' onClick={() => scrollLeft(galleryRef1)}>
                        <div className='arrow left' ></div>
                    </div>

                    <div className='containerRight' onClick={() => scrollRight(galleryRef1)}>
                        <div className='arrow right' ></div>
                    </div>

                </div>


                
                <div className='jumpPlusCategory'>
                    <h1 className='categoryitle jumpPlus'>
                    JUMP PLUS
                    </h1>

                    <div ref={galleryRef2} className='mangaFromJumpPlus'
                    onTouchStart={(event) => handleTouchStart(event, 1)}
                    onTouchMove={(event) => handleTouchMove(event, 1)}
                    onTouchEnd={() => handleTouchEnd(1)}>

                        {jumpPlusMangas.map((manga, index) => (
                            <div key={index} className='mangaItemExceptMaj'>
                            {/* Rendering all Manga from JumpPlus */}
                            <img src={manga.cover} alt={manga.title} />

                            </div>
                        ))}

                    </div>

                    <div className='containerLeft' onClick={() => scrollLeft(galleryRef2)}>
                        <div className='arrow left' ></div>
                    </div>

                    <div className='containerRight' onClick={() => scrollRight(galleryRef2)}>
                        <div className='arrow right' ></div>
                    </div>

                </div>

                
                <div  className='othersCategory'>

                    <h1 className='categoryitle others'>
                    OTHERS
                    </h1>

                    <div ref={galleryRef3} className='mangaFromOthers'
                    onTouchStart={(event) => handleTouchStart(event, 2)}
                    onTouchMove={(event) => handleTouchMove(event, 2)}
                    onTouchEnd={() => handleTouchEnd(2)}>

                        {othersMangas.map((manga, index) => (
                            <div key={index} className='mangaItemExceptMaj'>
                            {/* Rendering of all manga from Others */}
                            <img src={manga.cover} alt={manga.title} />

                            </div>
                        ))}

                    </div>

                    <div className='containerLeft' onClick={() => scrollLeft(galleryRef3)}>
                        <div className='arrow left' ></div>
                    </div>

                    <div className='containerRight' onClick={() => scrollRight(galleryRef3)}>
                        <div className='arrow right' ></div>
                    </div>
         
                </div>


                <div className='firstReadCategory'>

                    <h1 className='categoryitle firstRead'>
                    "First Read Free" Eligible Titles!
                    </h1>

                    <div ref={galleryRef4} className='mangaFromFirstRead'
                    onTouchStart={(event) => handleTouchStart(event, 3)}
                    onTouchMove={(event) => handleTouchMove(event, 3)}
                    onTouchEnd={() => handleTouchEnd(3)}>

                        {freeReadMangas.map((manga, index) => (
                                <div key={index} className='mangaItemExceptMaj'>
                                {/* Rendering all mangas from freeRead */}
                                <img src={manga.cover} alt={manga.title} />
                                </div>
                            ))}

                    </div>     

                    <div className='containerLeft' onClick={() => scrollLeft(galleryRef4)}>
                        <div className='arrow left' ></div>
                    </div>

                    <div className='containerRight' onClick={() => scrollRight(galleryRef4)}>
                        <div className='arrow right' ></div>
                    </div>
               
                </div>

            </div>

        </div>
    );
}

export default MangasScreen;