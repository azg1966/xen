function createSlider(container, first){
  if(lastImage == images.length-1){
    lastImage = 0;
  } else {
    lastImage++;
  }
  var image = new Image();
  if(first){
    image.onload = function(){
      $('#sl2').css('background-image', 'url('+images[lastImage]+')');
      $('#sl2').css('opacity', '1.0');
      setTimeout(function(){
	createSlider(container, false);
      }, interval * 1000);
    };
    image.src = images[lastImage];
  } else {
    image.onload = function(){
      $('#sl1').css('background-image', 'url('+images[lastImage]+')');    
      $('#sl2').css('opacity', '0.0');
      setTimeout(function(){
	createSlider(container, true);
      }, interval * 1000);
    };
    image.src = images[lastImage];
  }
  
}

function Watch(indicator){
  this.indicator = $(indicator).children('h1');
  this.divider = $(indicator).children('h1 span');
  this.data = $(indicator).children('p');
  this.timer = null;
  this.month = [
    'Января.',
    'Февраля.',
    'Марта.',
    'Апреля.',
    'Мая.',
    'Июня.',
    'Июля.',
    'Августа.',
    'Сентября.',
    'Октября.',
    'Ноября.',
    'Декабря.',
  ];
}

Watch.prototype.start = function(){
  var _t=this;
  this.timer = setInterval(
    function(){
      var d = new Date();
      var date = [d.getHours(), d.getMinutes(), d.getSeconds()];
      for(var i in date){
	if(date[i] < 10){
	   date[i] = '0'+date[i];
	}
      }
      _t.indicator.text(date[0]+':'+date[1]+':'+date[2]);
      _t.data.text(d.getDate()+' '+
		   _t.month[d.getMonth()]+' '+
		   d.getFullYear()+' года');
    }, 1000 );
};

Watch.prototype.stop = function(){
  clearInterval(this.timer);
};


function playPause(button){
  var icon = button.children('i');
  if(audio.paused){
    audio.play();
    if(button){
      icon.removeClass('fa-play');
      icon.addClass('fa-pause');
    }
  }else{
    audio.pause();
    if(button){
      icon.removeClass('fa-pause');
      icon.addClass('fa-play');
    }
  }
}










