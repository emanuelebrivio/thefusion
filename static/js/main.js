/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
  
  var voteModal;

  if (document.querySelector('#vote')) {
    document.querySelector('#vote').addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      voteModal('show');

      return false;
    });
  }

  document.querySelector('#vote-modal .close').addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    voteModal('hide');

    return false;
  }); 

  voteModal = function(status) {
    if (status === 'show') {
      document.querySelector('#vote-modal').style.display = 'block';
    } else {
      document.querySelector('#vote-modal').style.display = 'none';
    }
  };


})();
