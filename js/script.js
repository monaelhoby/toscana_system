
$(function() {
$(".imgContainer ul li span").click(function (){
	// console.log($(this))
	$(this).addClass("active")
	$(this).siblings("div").addClass("show")
})
});

