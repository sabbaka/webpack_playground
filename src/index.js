import _ from 'lodash';
import './style.css';
import srcImage from './images/doge.jpg';
import Icon from './icons/icon.png';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add image to our existing div.
  var myImage = new Image();
  myImage.src = srcImage;

  element.appendChild(myImage);

  // Add icon to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
