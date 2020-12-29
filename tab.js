function ppYoutube(pause=true){
  if(pause){
     $('.youtube-video').each((i,item)=>{
      	$('.youtube-video')[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      })
  }else{
    //play
    $('.youtube-video').each((i,item)=>{
      	$('.youtube-video')[i].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });
  }
}

function openCity(evt, cityName,css =" w3-primary",video=false) {
  var i, x, tablinks;
  if(video){
    ppYoutube(true);
  }
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(css, "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += css;
}
