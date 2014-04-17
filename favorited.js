/**
 * Module dependencies.
 */

var dom = window.dom = require('dom');

/**
 * Expose `favorited`.
 */

module.exports = favorited;

/**
 * Take a `name` and attach a styled icon
 * to a given `selector` in the DOM.
 *
 * @param {String} name
 * @param {String} selector
 * @param {String} iconOn our component's active icon
 * @param {String} iconOff and its inactive icon
 */

function favorited(name, selector, iconOn, iconOff){

  // create our icon
  var icon = document.createElement('i');
  icon.className = 'fa ' + iconOn;

  // create our label and append the icon
  var favoriteEl = document.createElement('span');
  favoriteEl.appendChild(icon);

  // ...and now we're ready to put our awesome
  // new element in the DOM inside a `selector`
  var selectorEl = document.querySelector(selector);
  selectorEl.appendChild(favoriteEl);

  // native DOM event listeners ftw
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener
  selectorEl.addEventListener('click', toggleIcon, false);

  function toggleIcon(){
    // find the icon that's inside our respective element
    var icon =  favoriteEl.getElementsByTagName('i')[0];

    // then...
    icon.className = ~icon.className.indexOf(iconOn)
      ? 'fa ' + iconOff // ...if it's on, turn it off
      : 'fa ' + iconOn; // ...or if it's off, turn it on
  }

};
