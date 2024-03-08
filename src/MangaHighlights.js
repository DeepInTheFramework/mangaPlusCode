import { Manga, getWSJ, getJumpPlus, getOthers, getFreeRead, arrayRandomize, WSJMangas, jumpPlusMangas, othersMangas, freeReadMangas, allMangas } from './Manga.js'; // Importation de la classe Manga et du tableau allMangas
import React, { useRef, useState } from 'react';
import './css/Mangahighlights.css'
import flamme_icon from './img/flamme.svg'




function MangaHighlights () {

        const newAllManga = allMangas.slice(0, 10);


        return (

        <div className='hightlightContainer'>


            <div className='hightlightHeader'>
                
            <div className='highlighttitle'>

             <span className='popularity'><img src={flamme_icon}/>Populaires</span>

            </div>

                <div className='allMajButton'>
                                <span>Afficher tout {'>'}</span>
                </div>

            </div>

        <div className='highlightList'>

        {newAllManga.map((manga, index) => (
                        <div key={index} className='mangaItem'>
                        {/* Affichage des informations du manga */}
                                <div className='coverAndNumber'>
                                <div className='mangaNumber'>{index+1}</div>        
                                <img className='mangaCover' src={manga.cover} alt={manga.title} />      
                                </div>


                                <div className='highlightSummary'>
                                <span className='mangaName'>{manga.title}</span>
                                <span className='mangaAuthor'>{manga.author}</span>
                                <span className='mangaViews' style ={{color :'white'}}><img src={flamme_icon}/>{manga.views().toString()}</span>
                                </div>




                        {/* Ajoutez d'autres informations du manga selon vos besoins */}
                        </div>
                    ))}

        </div>


        <div className='showMoreButton'>
                        <button>AFFICHER TOUT {'>'}</button>
        </div>

        </div>
        );
}

export default MangaHighlights;