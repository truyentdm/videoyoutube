//function createSummaryAndThumbInit(pID,title,url,date,comment,tag,author){var posturl=url;var title=title;var date=date;var comment=comment;var tag=tag;var div=document.getElementById(pID);var img=div.getElementsByTagName("img");var content1=div.innerHTML.replace(/<img.*?>/ig,'').replace(/<iframe.*?>/ig,'');var arr=content1.split(/<br\s*\/?>/);var content=arr[0]+arr.slice(1,-1).join('<br>')+arr.slice(-1);var month=new Array();month[0]="Jan";month[1]="Feb";month[2]="Mar";month[3]="Apr";month[4]="May";month[5]="Jun";month[6]="Jul";month[7]="Aug";month[8]="Sep";month[9]="Oct";month[10]="Nov";month[11]="Dec";var n=month[date.split('/')[0]];var date1=date.split('/')[1];var year=date.split('/')[2];if(img){var imgurl=img[0].src;var thumb='<div class="post-media"><div class="hider-page" style="display: none;"></div><a href="'+posturl+'" class="image-wrap image-popup-no-margins"><img src="'+imgurl+'"><span class="zoom-icon"><i class="fa fa-search"></i></span></a></div>';var summary1=thumb+'<div class="post-body"><div class="tag">'+tag+'</div><div class="post-entry"><div class="post-title"><h2><a href='+posturl+'>'+title+'</a></h2></div></div>'+title+'</div>'}else{var frame=div.getElementsByTagName("iframe");if(frame.length>=1){var iframe1=frame[0].src;var thumb='<div class="post-image"><iframe width="100%" height="200" frameborder="no" src="'+iframe1+'" scrolling="no"></iframe></div>';var summary1=thumb+'<div class="post-body"><div class="tag">'+tag+'</div><div class="post-entry"><div class="post-title"><h2><a href='+posturl+'>'+title+'</a></h2></div></div>'+title+'</div>'}else{var summary1='<div class="post-body"><div class="post-entry"><div class="tag">'+tag+'</div><div class="post-title"><h2><a href='+posturl+'>'+title+'</a></h2></div></div>'+title+'</div>'}}div.innerHTML=summary1;div.style.display="block";var elem=document.getElementsByClassName("separator");for(var i=0;i<elem.length;i++){elem[i].innerHTML=''}}window.onload=function(){var e=document.getElementById("mycontent");if(e==null){window.location.href="http://www.beautytemplates.com/"}e.setAttribute("href","http://www.beautytemplates.com/");e.setAttribute("ref","dofollow");e.setAttribute("title","Minimal Blogger Templates");e.innerHTML="BeautyTemplates"}
const imgNo = "http://2.bp.blogspot.com/-mmjt8mh87bQ/VQ6ltMr8GxI/AAAAAAAAEfo/93SmjxkwmO0/s500-c/no-image-found.jpg";
function createSummaryAndThumbInit(pID,title,url,date,comment,tag,author){var posturl=url;var title=title;var date=date;var comment=comment;var tag=tag;var div=document.getElementById(pID);var img=div.getElementsByTagName("img");var content1=div.innerHTML.replace(/<img.*?>/ig,'').replace(/<iframe.*?>/ig,'');var arr=content1.split(/<br\s*\/?>/);var content=arr[0]+arr.slice(1,-1).join('<br>')+arr.slice(-1);var month=new Array();month[0]="Jan";month[1]="Feb";month[2]="Mar";month[3]="Apr";month[4]="May";month[5]="Jun";month[6]="Jul";month[7]="Aug";month[8]="Sep";month[9]="Oct";month[10]="Nov";month[11]="Dec";var n=month[date.split('/')[0]];var date1=date.split('/')[1];var year=date.split('/')[2];if(img){var imgurl=(img.length>0)?img[0].src:imgNo;var thumb='<div class="post-media"><div class="hider-page" style="display: none;"></div><a href="'+posturl+'" class="image-wrap image-popup-no-margins"><img src="'+imgurl+'"><span class="zoom-icon"><i class="fa fa-search"></i></span></a></div>';var summary1=thumb+'<div class="post-body"><div class="tag">'+tag+'</div><div class="post-entry"><div class="post-title"><h2><a href='+posturl+'>'+title+'</a></h2></div></div>'+title+'</div>'}else{var frame=div.getElementsByTagName("iframe");if(frame.length>=1){var iframe1=frame[0].src;var thumb='<div class="post-image"><iframe width="100%" height="200" frameborder="no" src="'+iframe1+'" scrolling="no"></iframe></div>';var summary1=thumb+'<div class="post-body"><div class="tag">'+tag+'</div><div class="post-entry"><div class="post-title"><h2><a href='+posturl+'>'+title+'</a></h2></div></div>'+title+'</div>'}else{var summary1='<div class="post-body"><div class="post-entry"><div class="tag">'+tag+'</div><div class="post-title"><h2><a href='+posturl+'>'+title+'</a></h2></div></div>'+title+'</div>'}}div.innerHTML=summary1;div.style.display="block";var elem=document.getElementsByClassName("separator");for(var i=0;i<elem.length;i++){elem[i].innerHTML=''}}window.onload=function(){var e=document.getElementById("mycontent");if(e==null){window.location.href="http://www.beautytemplates.com/"}e.setAttribute("href","http://www.beautytemplates.com/");e.setAttribute("ref","dofollow");e.setAttribute("title","Minimal Blogger Templates");e.innerHTML="BeautyTemplates"}

function tabEvent(tab){
	var tb = 0;
	if(tab==1){
	 tb = document.getElementsByClassName("content-1")[0].offsetHeight + "px";
	}
	if(tab==2){
	 tb = document.getElementsByClassName("content-2")[0].offsetHeight + "px";
	}
	document.getElementsByClassName("tabcontent")[0].style.height = tb;
}

document.addEventListener("DOMContentLoaded", function(event) { 
	if(document.getElementsByClassName("content-1").length>0){
		var tb = document.getElementsByClassName("content-1")[0].offsetHeight + "px";
		document.getElementsByClassName("tabcontent")[0].style.height = tb;
	}
});
