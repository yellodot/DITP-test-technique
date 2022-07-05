import React from 'react';
import './Header.css';
import AvatarIcon from '../../icons/user/account-circle-line.svg';
import HomeIcon from '../../icons/buildings/home-4-line.svg';
import PrinterIcon from '../../icons/business/printer-line.svg';
import NewsIcon from '../../icons/document/newspaper-line.svg';
import HelpIcon from '../../icons/system/question-line.svg';


function Header() {
  return (
<header role="banner" class="fr-header">
    <div class="fr-header__body">
        <div class="fr-container">
            <div class="fr-header__body-row">
                <div class="fr-header__brand fr-enlarge-link">
                    <div class="fr-header__brand-top">
                        <div class="fr-header__logo">
                            <p class="fr-logo">
                                GOUVERNEMENT
                            </p>
                        </div>
                        <div class="fr-header__navbar">
                            <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-833" aria-haspopup="menu" title="Menu" id="fr-btn-menu-mobile">
                                Menu
                            </button>
                        </div>
                    </div>
                    <div class="fr-header__service">
                        <a href="/" title="Accueil - Pilote / Réformes prioritaires - Ministère">
                            <p class="fr-header__service-title">PILOTE - Réformes prioritaires</p>
                        </a>
                        <p class="fr-header__service-tagline">Vue générale</p>
                    </div>
                </div>
                <div class="fr-header__tools">
                    <div class="fr-header__tools-links">
                        <div className='header-profile-container'>
                            <div className='profile__avatar'>
                              <img alt='avatar' src={AvatarIcon}></img>
                            </div>
                            <div className='profile__right-block'>
                              <div className='profile__name'>Cécile Le Guen</div>
                              <div className='profile__logout'>Se déconnecter</div>
                            </div>
                        </div>
                        <ul class="fr-links-group">
                            <li>
                                <a class="fr-link fr-fi-add-circle-line" href="#"><img alt='home' src={HomeIcon}></img>Accueil</a>
                            </li>
                            <li>
                                <a class="fr-link fr-fi-lock-line" href="#"><img alt='news' src={NewsIcon}></img>Nouveautés</a>
                            </li>
                            <li>
                                <a class="fr-link fr-fi-account-line" href="#"><img alt='help' src={HelpIcon}></img>Centre d'aide</a>
                            </li>
                            <li>
                                <a class="fr-link fr-fi-account-line" href="#"><img alt='printer' src={PrinterIcon}></img>Imprimer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header