var timeline = [
	{
		'name':"Enrolled at BYUI",
		'date': new Date('9/14/2015'),
		'description':'I began taking courses at Brigham Young University online',
		'href':"http://www.byui.edu",
		'yPos':null,
		'add':true,
		'n':0,
		'curr':true
	},
	{
		'name':"Started FreeCodeCamp",
		'date': new Date('Nov 29, 2015'),
		'description':'FreeCodeCamp offers a free cirriculum for learning full-stack development. Many of the assignments are small projects that require you to meet specific "User Stories". Mine are hosted on Codepen.io and you can visit them by clicking this box',
		'href':"https://www.freecodecamp.org/enirrisky",
		'yPos':null,
		'add':true,
		'n':0,
		'curr':false
	},
	{
		'name':"Front End Cert",
		'date': new Date('Apr 26, 2016'),
		'description':"Completed FreeCodeCamp's Front End Development Program",
		'href':"https://www.freecodecamp.org/enirrisky/front-end-certification",
		'yPos':null,
		'add':true,
		'n':0,
		'curr':false
	}
];

var framesPerSecond = 30;
function writeTimeline(){
	setTimeout(function() {
		
		//get relevant convas width for drawing
		var width = window.innerWidth - window.innerWidth * 0.2;
		timelineCanvas.setAttribute('width', width);
		var comStyle = window.getComputedStyle(timelineCanvas, null);
		var height = parseInt(comStyle.getPropertyValue("height"), 10);

		//sort the timeline obj by date
		timeline.sort(function(a, b){
			return a.date - b.date
		});
		
		//configure beginning and end dates
		var firstDate = Date.parse(timeline[0].date);
		var lastDate = Date.parse(timeline[timeline.length - 1].date);
		var totalTimePassed = lastDate - firstDate;

		//begin drawing
		var ctx = timelineCanvas.getContext('2d');
		ctx.strokeStyle = 'grey';
		ctx.fillStyle = 'grey';
		var oldx;
		var oldy;
		timeline.forEach(function(curVal){
				
			//setup xPos
			var unix = Date.parse(curVal.date);
			var perc = (unix - firstDate) / totalTimePassed;
			var xPos = (width - 40) * perc + 20;

			//setup yPos
			if(!curVal.yPos)
			{
				curVal.yPos = Math.floor(Math.random() * (height - 50) + 20);
			}
			yPos = curVal.yPos;
			

			if(isAnimationOn){
				//change yPos for animation
				if(curVal.add)
				{
					if(curVal.n > 0)
					{
						yPos += curVal.n;
						curVal.n++;
					}
					else
					{
						yPos += curVal.n;
						curVal.n++;
					}
				}
				else
				{
					if(curVal.n > 0)
					{
						yPos += curVal.n;
						curVal.n--;
					}
					else
					{
						yPos += curVal.n;
						curVal.n--;
					}
				}

				//switch from up to down for animation
				if((yPos + curVal.n) > height && curVal.add)
				{	
					curVal.add = false;
				} 
				else if((yPos + curVal.n) < 0 && !curVal.add)
				{
					curVal.add = true;
				}
			}
			
			
			//draw lines
			ctx.beginPath();
			if(!oldx && !oldy)
			{
				ctx.moveTo(xPos, yPos);
			}
			else
			{
				ctx.moveTo(oldx, oldy);
				ctx.lineTo(xPos, yPos);
				ctx.stroke();
			}
			oldx = xPos;
			oldy = yPos;
			
		});
		oldx = null;
		oldy = null;

		timeline.forEach(function(curVal){
	
			//setup xPos
			var unix = Date.parse(curVal.date);
			var perc = (unix - firstDate) / totalTimePassed;
			var xPos = (width - 40) * perc + 20;
			yPos = curVal.yPos;

			if(isAnimationOn){
				//change yPos for animation
				if(curVal.add)
				{
					if(curVal.n > 0)
					{
						yPos += curVal.n;
						curVal.n++;
					}
					else
					{
						yPos += curVal.n;
						curVal.n++;
					}
				}
				else
				{
					if(curVal.n > 0)
					{
						yPos += curVal.n;
						curVal.n--;
					}
					else
					{
						yPos += curVal.n;
						curVal.n--;
					}
				}

				//switch from up to down for animation
				if((yPos + curVal.n) > 190 && curVal.add)
				{	
					curVal.add = false;
				} 
				else if((yPos + curVal.n) < -20 && !curVal.add)
				{
					curVal.add = true;
				}
			}

			ctx.beginPath();
			if(!oldx && !oldy)
			{
				ctx.moveTo(xPos, yPos);
			}
				
			//change dot to red
			if(curVal.curr)
				ctx.fillStyle = 'lightblue';

			//write dot
			ctx.arc(xPos, yPos, 5, 0, 2 * Math.PI);
			ctx.fill();

			//change dot back to black
			if(curVal.curr)
				ctx.fillStyle = 'grey';
		});
		oldx = null;
		oldy = null;
		if(isAnimationOn)
			window.requestAnimationFrame(writeTimeline);
	}, 1000 / framesPerSecond);

}

var timelineCanvas;
window.onload = function(){
	timelineCanvas = document.getElementById('timelineCanvas');
	if(document.getElementById('timelineCanvas').getContext)
	{
		loadTimelineDiv(0);
		window.requestAnimationFrame(writeTimeline);
	}
}

var eIndex = 0;
function loadTimelineDiv(eIndex){
	timeline.forEach(function(curVal, ind){
		if(ind === eIndex)
			timeline[ind].curr = true;
		else 
			timeline[ind].curr = false;
	});
	
	if(!isAnimationOn)
		writeTimeline();
	document.getElementById('eventTitle').innerHTML = '<span style="color:lightblue">' + timeline[eIndex].name + '</span>' + ' | ' + timeline[eIndex].date.toDateString();
	document.getElementById('eventDescription').innerHTML = timeline[eIndex].description;
	document.getElementById('eventDescription').onclick = function(){
		window.open(timeline[eIndex].href,'_blank');
	};
}

document.getElementById('next').addEventListener('click', function(){
	if(eIndex + 1 > timeline.length - 1)
		eIndex = 0;
	else
		eIndex++;

	loadTimelineDiv(eIndex);
});

document.getElementById('prev').addEventListener('click', function(){
	if(eIndex - 1 < 0)
		eIndex = timeline.length - 1;
	else
		eIndex--;

	loadTimelineDiv(eIndex);
});

var isAnimationOn = true;