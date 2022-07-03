import React from "react";
import './Footer.css';

function Footer() {
  return (
    <>
      <footer class="fr-footer" role="contentinfo" id="footer">
        <div class="fr-container">
          <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
              <a href="/" title="Retour à l’accueil">
                <p class="fr-logo" title="république française">
                  GOUVERNEMENT
                </p>
              </a>
            </div>
            <div class="fr-footer__content">
              <p class="fr-footer__content-desc">Dernière mise à jour globale des données : 27/06/2022 à 22h46</p>
              <ul class="fr-footer__content-list">
                <li class="fr-footer__content-item">
                  <a
                    class="fr-footer__content-link"
                    href="https://legifrance.gouv.fr"
                  >
                    legifrance.gouv.fr
                  </a>
                </li>
                <li class="fr-footer__content-item">
                  <a
                    class="fr-footer__content-link"
                    href="https://gouvernement.fr"
                  >
                    gouvernement.fr
                  </a>
                </li>
                <li class="fr-footer__content-item">
                  <a
                    class="fr-footer__content-link"
                    href="https://service-public.fr"
                  >
                    service-public.fr
                  </a>
                </li>
                <li class="fr-footer__content-item">
                  <a
                    class="fr-footer__content-link"
                    href="https://data.gouv.fr"
                  >
                    data.gouv.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
              <li class="fr-footer__bottom-item">
                  Plan du site
              </li>
              <li class="fr-footer__bottom-item">
                  Accessibilité: totalement conforme
              </li>
              <li class="fr-footer__bottom-item">
                  Mentions légales
              </li>
              <li class="fr-footer__bottom-item">
                  Données personnelles
              </li>
              <li class="fr-footer__bottom-item">
                  Gestion des cookies
              </li>
            </ul>
            <div class="fr-footer__bottom-copy">
              <p>
                Sauf mention contraire, tous les contenus de ce site sont sous{" "}
                <a
                  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                  target="_blank"
                >
                  licence etalab-2.0
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
