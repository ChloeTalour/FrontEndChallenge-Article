// == Import npm
import React from 'react';
import facebookIcon from 'src/assets/images/icon-facebook.svg';
import pinterestIcon from 'src/assets/images/icon-pinterest.svg';
import twitterIcon from 'src/assets/images/icon-twitter.svg';
import share from 'src/assets/images/icon-share.svg'

// == Composant
const ShareElt = ({setElt}) => (
  <div className="share-elt">
  <div className="triangle"></div>
   <p className="share-elt__share">Share</p>
   <div>
      <img src={facebookIcon} alt="" className="share-elt__facebook icon"/>
      <img src={pinterestIcon} alt="" className="share-elt__pinterest icon"/>
      <img src={twitterIcon} alt="" className="share-elt__twitter icon" />
   </div>
 
   <img 
      src={share} 
      alt="share" 
      className="share-elt__shareIcon icon"
      color="white" 
      onClick={() => setElt(false)}
      />
  </div>
);

// == Export
export default ShareElt;
