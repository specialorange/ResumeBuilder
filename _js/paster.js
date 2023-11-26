$(document).ready(function() { 
$(".techtable table").tablesorter({
headers: {
3: {
sorter:'specialDateSorter'
},
4: {
sorter:'specialDateSorter'
}
,
5: {
sorter:'specialElapsedSorter'
}
}
}); 
$(".techtable table").addClass("tablesorter");
});