
(function(){


	let scrollDown = ()=>{
		window.scrollBy({ 
		  top: window.innerHeight, // could be negative value
		  left: 0, 
		  behavior: 'smooth' 
		});
	}

	let i = 0;
	const downImg = document.getElementsByClassName('down-img')[0];

	downImg.addEventListener('click', ()=>{
		scrollDown();
	});
	
	setInterval(function(){
		++i;
		if( i%2 ){
			downImg.className = "down-img final";
		}
		else{
			downImg.className = "down-img";
		}
	}, 400);

	const cse = document.getElementsByClassName('cse')[0],
		web = document.getElementsByClassName('web')[0],
		coding = document.getElementsByClassName('coding')[0];

	setTimeout(function(){
			cse.className = "cse final";
			coding.className = "coding";
		}, 1000);
		setTimeout(function(){
			web.className = "web final";
			cse.className = "cse";
		}, 1500);
		setTimeout(function(){
			coding.className = "coding final";
			web.className = "web";
		}, 3000);	
	setInterval(function(){
		setTimeout(function(){
			cse.className = "cse final";
			coding.className = "coding";
		}, 1000);
		setTimeout(function(){
			web.className = "web final";
			cse.className = "cse";
		}, 2500);
		setTimeout(function(){
			coding.className = "coding final";
			web.className = "web";
		}, 4000);
	},4500);
})();