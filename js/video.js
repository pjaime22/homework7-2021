var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#slider").addEventListener("click",function(){
	// console.log(this)
	console.log(this.value)
	video.volume = this.value / 100
	// console.log("here")
	document.querySelector("#volume").innerHTML= this.value + "%"
	});


document.querySelector("#play").addEventListener("click", function() {
	video.play()
});

document.querySelector("#pause").addEventListener("click",function() {
	video.pause()
	});

document.querySelector("#slower").addEventListener("click", function() {
console.log("Old video speed is" + video.playbackRate);
video.playbackRate *= 0.95;
console.log("New Video speed is" + video.playbackRate)

});

document.querySelector("#faster").addEventListener("click",function() {
	console.log()
	console.log("Old video speed is" + video.playbackRate);
	video.playbackRate /= 0.95;
	console.log("New Video speed is" + video.playbackRate)
	});

document.querySelector("#skip").addEventListener("click",function() {
	console.log()
	console.log("Old video speed is" + video.playbackRate);
	video.playbackRate += (15);
	console.log("New Video speed is" + video.playbackRate)
});

document.querySelector("#mute").addEventListener("click",function() {
	video.volume = this.value = 0
});

document.querySelector("#skip").addEventListener("click",function() {
});

document.querySelector("#vintage").addEventListener("click",function() {
	var element = document.getElementById("player1")
	element.classList.add("oldSchool")
	});

document.querySelector("#orig").addEventListener("click",function() {
	var element = document.getElementById("player1")
	element.classList.remove("oldSchool")
	});
	
/* change video element- classlist.add */
