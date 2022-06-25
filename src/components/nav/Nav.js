import * as React from 'react';
import { useState } from 'react';
import './nav.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArticleIcon from '@mui/icons-material/Article';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import pdf from '../../assets/ELukacResume.pdf';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
      <nav>
          <a href="#home"
              onClick={() => setActiveNav('#avatarbox')}
              className={activeNav === '#avatarbox' ? 'active' : ''}
          ><HomeIcon/>Home</a>
          <a href="#mywork"
              onClick={() => setActiveNav('#mywork')}
              className={activeNav === '#mywork' ? 'active' : ''}
          ><AccountTreeIcon/>Work</a>
          <a href="{pdf}" target="_blank" rel="noopener"
              onClick={() => setActiveNav('#work')}
              className={activeNav === '#work' ? 'active' : ''}
          ><ArticleIcon/> Skills</a>
          <a href="#contact"
              onClick={() => setActiveNav('#contact')}
              className={activeNav === '#contact' ? 'active' : ''}
          ><ConnectWithoutContactIcon/> Contact </a>
      </nav>
  )
}

export default Nav;