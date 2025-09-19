//your JS code here. If required.
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const progressLineFill=document.querySelector(".progress-line-fill;
let circleActiveCount=1;											  
next.addEventListener("click",(e)=>{
	circleActiveCount+=1;
	prev.removeAttribute("disabled");
	let currentWidth=progressLineFill.style.width || "0%";
	currentWidth=convertToNumber(currentWidth);
	// let width=currentWidth+25+"%";
	progressLineFill.style.width=progressLineFill+25+"%";
	if(width=="100%"){
		next.disabled="true";
	}
	
});
function convertToNumber(numInString){
	// console.log(numInString);
	numInString=numInString.split("");
	numInString.pop();
	numInString=numInString.join("");
	return Number(numInString);
}