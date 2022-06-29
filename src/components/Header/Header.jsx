import React from 'react';
import './Header.css'

function Header() {
  return (
    <header className="header_main_component">
      <div className='header_left_block'>
        <span>Logo</span>
        <div className='left_block__namepage'>
          <div>PILOTE - Réformes prioritaires</div>
          <div>Vue générale</div>
        </div>
      </div>
      <div className='header_right_block'>
        <div className='right_block__profile_container'>
          <span>Logo</span>
          <div>
            Cécile Le Guen
          </div>
        </div>
        <nav>
          <ul className='right_block__nav_container'>
            <li>Accueil</li>
            <li>Nouveautés</li>
            <li>Centre d'aide</li>
            <li>Imprimer</li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header