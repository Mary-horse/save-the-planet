let login = document.getElementById("login-js");
let email = document.getElementById("email-js");
let password = document.getElementById("password-js");
let button1 = document.getElementById("submit-js");
let classForm = document.getElementsByClassName("class-form");

function showError(container, errorMessage) {
	//container.className = "error";
	let error = document.createElement("span");
	error.className = "error-message";
	error.style.color = "#FF0000";
	error.style.fontFamily = "Baloo Paaji 2";
	error.innerHTML = errorMessage;
	container.appendChild(error);
}

function resetError(container) {
	//container.className = "";
	if (container.lastChild.className == "error-message") {
		container.removeChild(container.lastChild);
	}
}

function validate(form) {
	resetError(classForm[0]);
	resetError(classForm[0]);
	resetError(classForm[1]);
	resetError(classForm[2]);
	if (login.value.length < 5) {
		showError(classForm[0], "<br>Login is too short");
	}

	if (login.value.length > 20) {
		showError(classForm[0], "<br>Login is too long");
	}

	if ((email.value.includes("@gmail.com") == false)) {
		showError(classForm[1], "<br>Your email is not correct");
	}

	if (password.value.length < 8) {
		showError(classForm[2], "<br>Password is too short");
	}

}

button1.addEventListener("click", validate);


let burger = document.getElementById("pan", ":after");
let logoClub = document.getElementById("logoClub");
let naviClub = document.getElementById("naviClub");
let pan = document.getElementById("pan");
let wrap = document.getElementById("wrap");

// if (naviClub.style.maxWidth <= 1200) {
// 	naviClub.style.display = "block";
// 	naviClub.style.position = "absolute";
// 	naviClub.style.let = "0";
// 	naviClub.style.top = "3px";
// 	naviClub.style.zIndex = "1";
// 	naviClub.style.right = "-400px";
// 	naviClub.style.width = "100%";
// 	naviClub.style.height = "100hv";
// 	naviClub.style.textAlign = "center";
// 	//naviClub.style.background = "#000033";
// }

function BurgFun() {
	let display = ["flex", "none"];
	if (naviClub.style.display !== display[0]) {
		naviClub.style.display = display[0];
	} else {
		// naviClub.style.display = display[1];
	}
}

burger.addEventListener("click", BurgFun);
//burger.addEventListener("doubleclick", BurgDel);



let sticky = wrap.offsetTop;
//let widthWrap = document.documentElement.clientWidth;

window.onscroll = function myFun() {
	if (window.pageYOffset >= sticky) {
		logoClub.style.width = "90%";
		naviClub.style.justifyContent = "unset";
		naviClub.style.overflowY = "hidden";
		naviClub.style.top = "5px";
	    wrap.classList.add("sticky");
	    wrap.classList.add("backg");
	    wrap.classList.add("panel", ":after");

  } else {
	    wrap.classList.remove("sticky");
	    wrap.classList.remove("backg");
	    wrap.classList.remove("panel", ":after");
  	}
}




let sliderProblem = document.getElementById("sliderProblem");
let probs = document.querySelectorAll(".prob");

//var isScrolling = false;
 
// window.addEventListener("scroll", throttleScroll, false);
 
// function throttleScroll(e) {
//     if (isScrolling == false ) {
//         window.requestAnimationFrame(function() {
//           dealWithScrolling(e);
//           isScrolling = false;
//         });
//     }
//     isScrolling = true;
// }   
 
// function dealWithScrolling(e) {
//     // do epic stuff    
// }


let popupBtn = document.getElementById("popupBtn");
let popup = document.getElementById("popup");

popup.style.display = "none";  
//let span = document.querySelector(".class-form > span");

function myPopup() {
	// for (let i = 0; i < classForm.length; i ++) {
  		let elem = classForm[0].querySelector("span");

		if (!classForm[0].contains(elem)) {
    		popup.style.display = "flex";
  		} else {
			popup.style.display = "none"; 
		}

		elem = classForm[1].querySelector("span");

		if (!classForm[1].contains(elem)) {
    		popup.style.display = "flex";
  		} else {
			popup.style.display = "none"; 
		}

		elem = classForm[2].querySelector("span");

		if (!classForm[2].contains(elem)) {
    		popup.style.display = "flex";
  		} else {
			popup.style.display = "none"; 
		}
	//}
}

button1.addEventListener("click", myPopup);

popupBtn.onclick = function myPop() {
 	popup.style.display = "none";  
}


// wrap.classList.remove("popup");
// wrap.classList.remove("popup-content");
// wrap.classList.remove("popup-text1");
// wrap.classList.remove("popup-text2");
// wrap.classList.remove("smile");
// wrap.classList.remove("popup-btn");
// wrap.classList.remove("popup-btn", ":hover");
// wrap.classList.remove("some-btn-club");