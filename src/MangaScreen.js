import { Manga, getWSJ, getJumpPlus, getOthers, getFreeRead, arrayRandomize, WSJMangas, jumpPlusMangas, othersMangas, freeReadMangas, allMangas } from './Manga.js'; // Importation de la classe Manga et du tableau allMangas
import React, { useRef, useState, useEffect } from 'react';
import './css/Mangascreen.css'
import arrowicon from './img/arrow.png'
import views_icon from './img/eyes.svg'

function MangasScreen ( {sendRef}) {
    arrayRandomize()
    const newAllManga = allMangas.slice(0, 28);
    getWSJ()
    getJumpPlus()
    getOthers()
    getFreeRead()
    console.log(allMangas)
    console.log(newAllManga)


    const galleryRef1 = useRef(null);
    const galleryRef2 = useRef(null);
    const galleryRef3 = useRef(null);
    const galleryRef4 = useRef(null);

    const targetDivRef = useRef(null);

    useEffect(() => {
        // Envoyer la référence de la div cible au parent
        sendRef(targetDivRef);
    }, [sendRef]);


    // Fonction pour faire défiler la galerie vers la droite
    const scrollRight = (galleryRef) => {
        if (galleryRef.current) {
          galleryRef.current.scrollTo({
            left: galleryRef.current.scrollLeft + 500,
            behavior: 'smooth'
          });
        }
      };
      
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

                    {/* Utilisation de map pour générer des éléments pour chaque manga */}
                    {newAllManga.map((manga, index) => (
                        <div key={index} className='mangaItem'>
                        {/* Affichage des informations du manga */}
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
                        {/* Ajoutez d'autres informations du manga selon vos besoins */}
                        </div>
                    ))}


                </div>

                <div className='WSJCategory'>

                    <h1 className='categoryitle WSJ'>
                    WEEKLY SHONEN JUMP
                    </h1>
                    
                    <div ref={galleryRef1} className='mangasFromWSJ'>

                    {WSJMangas.map((manga, index) => (
                        <div key={index} className='mangaItemExceptMaj'>
                        {/* Affichage des informations du manga */}
                        <img src={manga.cover} alt={manga.title} />

                        {/* Ajoutez d'autres informations du manga selon vos besoins */}
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

                                    <div ref={galleryRef2} className='mangaFromJumpPlus'>

                                {jumpPlusMangas.map((manga, index) => (
                                    <div key={index} className='mangaItemExceptMaj'>
                                    {/* Affichage des informations du manga */}
                                    <img src={manga.cover} alt={manga.title} />

                                    {/* Ajoutez d'autres informations du manga selon vos besoins */}
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

                    <div ref={galleryRef3} className='mangaFromOthers'>

                        {othersMangas.map((manga, index) => (
                            <div key={index} className='mangaItemExceptMaj'>
                            {/* Affichage des informations du manga */}
                            <img src={manga.cover} alt={manga.title} />

                            {/* Ajoutez d'autres informations du manga selon vos besoins */}
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

                    <div ref={galleryRef4} className='mangaFromFirstRead'>

                        {freeReadMangas.map((manga, index) => (
                                <div key={index} className='mangaItemExceptMaj'>
                                {/* Affichage des informations du manga */}
                                <img src={manga.cover} alt={manga.title} />

                                {/* Ajoutez d'autres informations du manga selon vos besoins */}
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