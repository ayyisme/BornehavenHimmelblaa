$('*[sub-hover]').hover(
  function () {
	var id = this.getAttribute("sub-hover");
	$('*[sub-menu]').hide();
	$('*[sub-menu='+ id +']').show();
  }
);
$('.sub').hover(function(){
}, function(){
	$('*[sub-menu]').hide();
	$('*[sub-menu=0]').show();
})

$('*[activity]').click(function(){
	var id = this.getAttribute("activity");
	$('*[activity-article]').hide();
	$('*[activity-article='+ id +']').show();
	$('*[activity]').removeClass('active');
	$(this).addClass('active');
});