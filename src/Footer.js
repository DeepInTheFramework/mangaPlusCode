import React, { useRef, useState } from 'react';
import './css/Footer.css'
import logo from './img/header/logo.png';
import abjlogo from './img/abj_logo.png';
import iconLuffy from './img/iconLuffy.png';
import iconApple from './img/appleStore.svg';
import iconGoogle from './img/googleApp.png';



export default function Footer ({scrollToTarget}) {

    return (
                <div className='footerContainer'>

                    <div class="menu-mobile"></div>
                    <div className='iconAndCopyright'>
                        <div className='footerIcon'>
                            <img src={logo} />
                        </div>

                        <div className='footerCopyright'>
                        <span className='copyrightText'>Cloner par Louis-Emmanuel Metan. <br/> Front-end Developper</span>
                        </div>
                    </div>

                    <div className='footerMenuContainer'>
                    <ul className='footerList' style={{ listStyleType: 'none' }}>
                            <li className='aide'>Aide / FAQ</li>
                            <li className='actualites'>Actualités et Événements</li>
                            <li className='politique'>Politique de Confidentialité</li>
                            <li className='conditions'>Conditions d'Utilisation</li>
                            <li className='evaluations'>Évaluations</li>
                            <li className='copyright'>Copyright</li>
                        </ul>
                        <div className='abj'>
                            <img src={abjlogo} />
                                <p className='abjText'>ABJ Mark est une marque déposée (numéro d'enregistrement 10921042) <br/>
    Ce qui indique que cette boutique de livres électroniques / service de distribution de livres électroniques est un service de distribution autorisé qui a obtenu l'autorisation d'utiliser le contenu du détenteur des droits d'auteur.
    <br/> Pour plus d'informations, consultez <a href="https://aebs.or.jp/">https://aebs.or.jp/</a>.</p></div>
                        </div>

                    <div className='downloadDiv'>
                        <img className='iconLuffy' src={iconLuffy} />
                        
                        <div className='quoteAndButton'>
                            <span>Téléchargez l'application et lisez à tout moment !</span>
                            <div className='buttonOfDownload'>
                            <img className='iconDownload' src={iconApple} style={{cursor: 'pointer'}}/>
                            <img className='iconGoogle iconDownload' src={iconGoogle}  style={{cursor: 'pointer'}}/>
                            </div>


                        </div>

                    </div>


                    <div className='scrollUpButton' onClick={scrollToTarget}>
                        <div className='scrollUpArrow'>
                        </div>
                    </div>

                </div>
    )


}