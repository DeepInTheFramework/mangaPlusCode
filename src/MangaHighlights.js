import { Manga, getWSJ, getJumpPlus, getOthers, getFreeRead, arrayRandomize, WSJMangas, jumpPlusMangas, othersMangas, freeReadMangas, allMangas } from './Manga.js'; // Importation de la classe Manga et du tableau allMangas
import React, { useRef, useState } from 'react';
import './css/Mangahighlights.css'




function MangaHighlights () {

        const newAllManga = allMangas.slice(0, 10);


        return (

        <div className='hightlightContainer'>


            <div className='hightlightHeader'>
                
            <div className='highlighttitle'>

             <span>Populaires</span>

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
                                {manga.views()}
                                </div>




                        {/* Ajoutez d'autres informations du manga selon vos besoins */}
                        </div>
                    ))}

        </div>


        <div className='showMoreButton'>
                        <button>AFFICHER TOUT</button>
        </div>

        </div>
        );
}

export default MangaHighlights;