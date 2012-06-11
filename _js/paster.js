var i =0;
$('section.techtable td:nth-child(5)').each(function() {
	console.log($(this).prev().html());
	console.log($(this).prev().prev().html());
	console.log(i);
	i = i++;
})