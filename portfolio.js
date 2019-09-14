  //SMOOTH SCROLL
 $('.material-icons').on('click','a[href*="#"]:not([href="#"])',function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });  
  
 $('.down-arrow-inner-div').on('click','a[href*="#"]:not([href="#"])',function(){
	 
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}

  });
  
function resizeHeader(){
	var video = document.getElementById('backdrop');
	var videoHeight = video.getBoundingClientRect().height;
	var videoWidth = video.getBoundingClientRect().width;
	var header = document.getElementById('header')
	header.style.height = videoHeight + "px";
	header.style.width = videoWidth + "px";
}

window.addEventListener('resize', function(){
	//resizeHeader();
});

window.addEventListener('load', function(){
	//resizeHeader();
});

let projectsArr = document.getElementsByClassName('project');
for(div in projectsArr){
	if(!isNaN(div)){
		projectsArr[div].addEventListener('click',function(){
			var href = this.getAttribute('href');
			if (href != "")
			    openHref(this);
		});
	}
	
}

const openHref = (iconSpan, forceNew = false) => {
    let target = (forceNew) ? '_blank'
        :
        (iconSpan.hasAttribute('same')) ? '_self':'_blank';
    let href = iconSpan.getAttribute('href');
    window.open(href, target);
}

const hideSpan = (e) => {
    let iconSpan = getIconSpan(e);
    let nameSpan = iconSpan.children[1];
    if(!iconSpan.getAttribute('game') || nameSpan.getAttribute('game') === 'false')
        nameSpan.style.opacity = 0;
}

const showSpan = (e) => {
    let iconSpan = getIconSpan(e);
    let nameSpan = iconSpan.children[1];
    nameSpan.style.opacity = 1;
}

const stageIconSpan = (iconSpan) => {
    let iconsArr = document.getElementsByClassName('icon-span');
    for (let span in iconsArr){
        if (iconsArr[span].children){
            let icon = iconsArr[span];
            if (icon === iconSpan){
                icon.setAttribute('staged', "true");            
            } else {
                icon.setAttribute('staged', "false");  
            }
        }
    }
}

const interpretClick = (e) => {
    let iconSpan = getIconSpan(e);
    if(e.sourceCapabilities.firesTouchEvents){
        if (iconSpan.getAttribute('staged') === "true"){
            goToLink(iconSpan);
            iconSpan.setAttribute('staged', "false");
        } else {
            stageIconSpan(iconSpan);
        }
    } else {
        goToLink(iconSpan);
    }
}

const goToLink = (s) => {
    let href = s.getAttribute('href');
    let first = href.split('')[0];
    if (first === '#'){
        let element_to_scroll_to = document.getElementById('contactAnchor');
        element_to_scroll_to.scrollIntoView({
            behaviour: "smooth",
            block: "start",
        })
    } else {
		if (href != "")
		    openHref(s);
    }
}

const getIconSpan = (e) => {
    let iconSpan = e.target;
    if (iconSpan.className !== 'icon-span'){
        iconSpan = iconSpan.parentNode;
    }
    return iconSpan;
}


let iconsArr = document.getElementsByClassName('icon-span');
for (let span in iconsArr){
    if (iconsArr[span].children){
        let iconSpan = iconsArr[span];
        let nameSpan = iconSpan.children[1];
        if(!iconSpan.getAttribute('game') || nameSpan.getAttribute('game') === 'false')
        	nameSpan.style.opacity = 0;
        iconSpan.setAttribute('staged', "false");
        iconSpan.addEventListener("mouseenter", showSpan);
        iconSpan.addEventListener("mouseleave", hideSpan);
        iconSpan.addEventListener("click", interpretClick);
    }
}




console.log('%c Thanks for checking out my code','font-size:2em;color:blue');