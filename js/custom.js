$(document).ready(function() {
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(600, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});


SmoothScroll({
    animationTime    : 800,
    stepSize         : 75,
    accelerationDelta : 30,  
    accelerationMax   : 2,   
    keyboardSupport   : true,  
    arrowScroll       : 50,
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,
    touchpadSupport   : true,
})
