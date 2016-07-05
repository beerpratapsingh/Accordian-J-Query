/*$(".accordian .accord_data").first().show();
$(".accordian h1").on('click',function(){
	if($(this).attr('class') == 'active')
	{
		$("h1.active + .accord_data").slideToggle();
	}
	else{
		$(".accordian h1").removeClass("active");
		$(".accord_data").slideUp();
		if($(this).attr('class')!='active'){
			$(this).addClass("active");
		}
		$("h1.active + .accord_data").slideDown();
	}
});

$(".all_adapters").on('click',function(){
	$(".accord_data").slideDown();
});*/

    $(".accord_data").hide();
    $(".accord_data").first().show();
    $(".accordian h1").first().addClass('active');
    $(".accordian h1").on('click', function() {
        var flag = false;
        if ($(this).attr('class') == 'activeAll') {
            $(this).removeClass('activeAll');
            $(this).addClass('active');
            $("h1.activeAll + .accord_data").slideUp();
            $(".accordian h1").removeClass("activeAll");
            flag = true;
        }
        if ($(this).attr('class') == 'active') {
            if (flag === false) {
                $("h1.active + .accord_data").slideUp();
                $(".accordian h1").removeClass("active");
            }
        } else {
            $(".accordian h1").removeClass("active");
            $(".accord_data").slideUp();
            if ($(this).attr('class') != 'active') {
                $(this).addClass("active");
            }
            $("h1.active + .accord_data").slideDown();
        }
    });

    $(".all_adapters").on('click', function() {
        $(".accordian h1").removeClass("active");
        $(".accordian h1").addClass("activeAll");
        $(".accord_data").slideDown();
    });