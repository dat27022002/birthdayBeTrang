(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'), 
      audio = $('song'),     
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    audio.play();    
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  // $('open').click(function(){
	// 	var audio = $('.song')[0];
  //   audio.play();
       
	// });


  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
