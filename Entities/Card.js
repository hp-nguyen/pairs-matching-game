import Node from '../Engine/Node.js';
import Sprite from '../Engine/Sprite.js';

class Card extends Node {
  constructor(imgSrc, id, index) {
    super();
    this.element.dataset.id = id;
    this.element.dataset.index = index;
    this.isPicking = false;
    this.cardContent = this.createCardContent(imgSrc);
    this.cardCover = this.createCardCover(cardCoverStyles, index);
    this.setStyle({
      position: 'absolute',
      backgroundColor: '#fff',
      border: '3px solid #3bc9db',
      cursor: 'pointer',
    });
  }
  createCardCover(styles, index) {
    const cardCover = new Node();
    cardCover.setStyle(styles);
    cardCover.element.innerText = index + 1;
    this.addChild(cardCover);
    return cardCover;
  }
  createCardContent(imgSrc) {
    const cardContent = new Sprite(imgSrc);
    this.addChild(cardContent);
  }
  showContent() {
    this.isPicking = true;
    const duration = 0.5;
    const delay = 0.5;
    gsap.to(this.element, {
      scaleX: 0,
      duration,
      onComplete: () => {
        this.cardCover.element.style.visibility = 'hidden';
      },
    });
    gsap.to(this.element, { scaleX: 1, duration, delay });
  }
  hideContent() {
    const duration = 0.5;
    const delay = 0.5;
    gsap.to(this.element, {
      scaleX: 0,
      duration,
      onComplete: () => {
        this.cardCover.element.style.visibility = 'initial';
      },
    });
    gsap.to(this.element, { scaleX: 1, duration, delay });
    this.isPicking = false;
  }
  fadeCard() {
    gsap.to(this.element, {
      duration: 2,
      delay: 1,
      scale: 1.5,
      ease: 'power2.easeInOut',
    });
    gsap.to(this.element, {
      duration: 0.4,
      delay: 2,
      opacity: 0,
    });
  }
}

const cardCoverStyles = {
  'background-color': '#1c7ed6',
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': '2.5em',
  color: 'aliceblue',
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '100%',
};
export default Card;
