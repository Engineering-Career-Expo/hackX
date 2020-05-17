var indexx = 0
	window.addEventListener("load", start, false)
	function start(){
		 imagess = ["../assets/images/about.png","../assets/images/hero.png", "../assets/images/criteria2.png", "../assets/images/criteria.png","../assets/images/criteria2.png", "../assets/images/criteria.png"]
		 captions = ["1", "2", "3", "4", "5", "6"]
		 imgSlide = document.getElementById("imgSlide")
		 dot = document.getElementsByClassName("dot")
		 imgSlide.setAttribute("src", imagess[indexx]);
		 for (i = 0; i < dot.length; i++) {
		 	dot[i].id = "";
		 } 
		 dot[indexx].id = "active";
		 }
		
	function plus(x){
		if (indexx + x < 0){
			indexx = 5
			}
		else if (indexx + x > 5){
			indexx = 0
			}
		else{
			indexx += x
		}
	  start()
		}
	function currentSlide(x){
		indexx = x
		start()
		}
	setInterval( 5000, 1);

