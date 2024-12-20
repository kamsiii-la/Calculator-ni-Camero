let math = document.getElementById("Math");
let science = document.getElementById("Science");
let filipino = document.getElementById("Filipino");
let ap = document.getElementById("AralingPanlipunan");
let pe = document.getElementById("PE");
let ict = document.getElementById("ICT");
let submit = document.getElementById("submit-btn");

submit.addEventListener("click", function function_name(argument) {
	
	let mathScore = parseInt(math.value) || 0;
	let scienceScore = parseInt(science.value) || 0;
	let filipinoScore = parseInt(filipino.value) || 0;
	let apScore = parseInt(ap.value) || 0;
	let peScore = parseInt(pe.value) || 0;
	let ictScore = parseInt(ict.value) || 0;


	let combine = mathScore + scienceScore + filipinoScore + apScore + peScore + ictScore;
	let ave = combine / 6;
	let limitAve = ave.toFixed(1);

	if(ave >= 75){
		document.querySelector(".gen-ave").textContent = `General Average: ${limitAve}`;
		document.querySelector(".result-user").textContent = `Result: Passed`;
	}
	else{
		document.querySelector(".gen-ave").textContent = `General Average: ${limitAve}`;
		document.querySelector(".result-user").textContent = `Result: Failed`;
	}
})