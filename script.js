//your JS code here. If required.
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const progressLineFill=document.querySelector(".progress-line-fill");
let circleActiveCount=1;											  
next.addEventListener("click",(e)=>{
	circleActiveCount+=1;
	prev.removeAttribute("disabled");
	let currentWidth=progressLineFill.style.width || "0%";
	currentWidth=convertToNumber(currentWidth);
	let width=currentWidth+25+"%";
	progressLineFill.style.width=width;
	let circle=document.getElementById(`circle-${circleActiveCount}`);
	circle.classList.add("active");
	if(width=="100%"){
		next.disabled="true";
	}
	
});
prev.addEventListener("click",(e)=>{
	next.removeAttribute("disabled");
	let circle=document.getElementById(`circle-${circleActiveCount}`);
	circle.classList.remove("active");
	circleActiveCount-=1;
	let currWidth=progressLineFill.style.width;
	currWidth=convertToNumber(currWidth);
	currWidth=currWidth-25;
	if(currWidth==0){
		prev.disabled="true";
	}
	progressLineFill.style.width=currWidth+"%";
})
function convertToNumber(numInString){
	// console.log(numInString);
	numInString=numInString.split("");
	numInString.pop();
	numInString=numInString.join("");
	return Number(numInString);
}