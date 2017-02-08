window.onload = function(){
	for(let l=0; l<studyTopics.length;l++){
		let list = document.getElementById('list');
		let li = document.createElement('li');
		let anchor = document.createElement('a');
		let text = document.createTextNode(studyTopics[l]);
		let arr = studyTopics[l][0].split(' ');
		let href = 'pages/'+arr[0]+'HOME.html';
		let linkDiv = document.createElement('div');
		linkDiv.setAttribute('class','linkDiv');
		anchor.setAttribute('href',href);
		anchor.appendChild(text);
		
		//new things
		anchor.addEventListener('mouseenter', function(){
			document.getElementById('previewFrame').src = href;
		});	
		anchor.addEventListener('mouseleave', function(){
			document.getElementById('previewFrame').src = 'previewIntro.html';
			
		});
		
		linkDiv.appendChild(anchor);
		li.appendChild(linkDiv);
		list.appendChild(li);
	}
}