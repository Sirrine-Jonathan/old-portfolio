window.onload = function(){
	for(let l=0; l<studyTopics.length;l++){
		//hard coded element
		let list = document.getElementById('list');
		
		//dynamic content
		let span = document.createElement('span');
		let rendering = studyTopics[l].toString().split(',').join(' ');
		let text = document.createTextNode(rendering);
		let arr = studyTopics[l][0].split(' ');
		let href = 'pages/'+arr[0]+'HOME.html';
		let linkDiv = document.createElement('div');
		linkDiv.setAttribute('class','linkDiv');
		//anchor.setAttribute('href', href);
		span.appendChild(text);
		span.setAttribute('class','linkText');
		
		//new things
		linkDiv.addEventListener('mouseenter', function(){
			document.getElementById('previewFrame').src = href;
			this.style.borderColor = 'black';
		});	
		linkDiv.addEventListener('mouseleave', function(){
			document.getElementById('previewFrame').src = 'previewIntro.html';
			this.style.borderColor = '#33ff66';
		});
		
		linkDiv.addEventListener('click', function(){
			location.href = href;
		});
		
		linkDiv.appendChild(span);
		
		//add dynamic content to hardcoded element
		list.appendChild(linkDiv);
	}
}