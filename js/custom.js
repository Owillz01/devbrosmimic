
$(document).ready(function(){
	$("#dropdown").mouseover(function () {
		$(".dropdown-menu").show()
	})

	$("#dropdown").mouseout(function () {
		$(".dropdown-menu").hide()
	})
	
	$('#webdesign').on('click', function(){
		$(this).addClass('active');
		$('#appdev, #all').removeClass('active');
	})
	$('#webdesign').click(function(){
		$('div').filter('.mobileapp').hide()
		$('div').filter('.webdesign').css('display', 'inline')
	});
	$('#appdev').on('click', function(){
		$(this).addClass('active');
		$('#all, #webdesign').removeClass('active');
	})
	$('#appdev').click(function(){
		$('div').filter('.webdesign').hide()
		$('div').filter('.mobileapp').css('display','inline')
	});

	$('#all').on('click', function(){
		$(this).addClass('active');
		$('#appdev, #webdesign').removeClass('active');
	});
	$('#all').click(function(){
		$('div').filter('.all').css('display','inline')
	});

})


// house rent platform

// $("#header .btn-group[role='group'] button").on('click', function(){
//     $(this).siblings().removeClass('active')
//     $(this).addClass('active');
// })