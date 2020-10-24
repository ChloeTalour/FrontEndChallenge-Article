// == Import npm
import React, {useState} from 'react';
import avatar from 'src/assets/images/avatar-michelle.jpg'
import share from 'src/assets/images/icon-share.svg'
import ShareElt from './shareElt';

// == Import
import './styles.scss';

// == Composant
const Article = () => {
  const [open, setOpen] = useState(false)
  const handleMouseIn = () => {
    setOpen(!open);
  }

  return (
  <div className="article">
  <div className="article__img"></div>
  <div className="article__desktop">
   <div className="article__content">
      <h1 className="article__content--title">
      Shift the overall look and feel by adding these wonderful touches to furniture in your home
      </h1>
      <p className="article__content--text">
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
      </p>
   </div>

    <div className="article__person ">
    <img src={avatar} alt="avatar-michelle" className="article__person--img"/>
    <div>
        <p className="article__person--name">Michelle Appleton</p>
        <p className="article__person--date">28 Jun 2020</p>
    </div>
    <img 
      src={share} 
      alt="share" 
      className="article__person--share" 
      onClick={handleMouseIn} 
      />
  </div>
  
  {open && (
      <div className="essai">
        <ShareElt setElt={setOpen} />
      </div>
    )}
  </div>
  </div>
)};

// == Export
export default Article;
