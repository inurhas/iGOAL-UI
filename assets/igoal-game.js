// Process progress bar

document.getElementsByClassName(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

document.getElementsByClassName(".step01").click( function() {
	$("#line-progress").css("width", "6%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

document.getElementsByClassName(".step02").click( function() {
	$("#line-progress").css("width", "28%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

document.getElementsByClassName(".step03").click( function() {
	$("#line-progress").css("width", "51%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

document.getElementsByClassName(".step04").click( function() {
	$("#line-progress").css("width", "73%");
	$(".production").addClass("active").siblings().removeClass("active");
});

document.getElementsByClassName(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

document.getElementsByClassName("#color").click( function() {
	$("body").toggleClass("blue")
});
