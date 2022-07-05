import React from "react";
import "./Header.css";
import AvatarIcon from "../../icons/user/account-circle-line.svg";

function Header() {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">GOUVERNEMENT</p>
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    data-fr-opened="false"
                    aria-controls="modal-833"
                    aria-haspopup="menu"
                    title="Menu"
                    id="fr-btn-menu-mobile"
                  >
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <a
                  href="/"
                  title="Accueil - Pilote / Réformes prioritaires - Ministère"
                >
                  <p className="fr-header__service-title">
                    PILOTE - Réformes prioritaires
                  </p>
                </a>
                <p className="fr-header__service-tagline">Vue générale</p>
              </div>
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <div className="header-profile-container">
                  <div className="profile__avatar">
                    <img alt="avatar" src={AvatarIcon}></img>
                  </div>
                  <div className="profile__right-block">
                    <div className="profile__name">Cécile Le Guen</div>
                    <div className="profile__logout">Se déconnecter</div>
                  </div>
                </div>
                <ul className="fr-links-group">
                  <li>Accueil</li>
                  <li>Nouveautés</li>
                  <li>Centre d'aide</li>
                  <li>Imprimer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
