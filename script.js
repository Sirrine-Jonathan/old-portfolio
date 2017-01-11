window.onload = function(){
	for(let l=0; l<studyTopics.length;l++){
		let list = document.getElementById('list');
		let li = document.createElement('li');
		let anchor = document.createElement('a');
		let text = document.createTextNode(studyTopics[l]);
		let arr = studyTopics[l][0].split(' ');
		let href = 'pages/'+arr[0]+'HOME.html';
		anchor.setAttribute('href',href);
		anchor.appendChild(text);
		li.appendChild(anchor);
		list.appendChild(li);
	}
}