/* Author:

*/
$(document).ready(function () {
	//Approach Selector
		//onclick handler
			$("#clickApproach").on("click", function(){
				if ($(".approach").is(":visible") ) {
					$(".approach").hide();
				} else {
					$(".approach").show();
				}
			});

	//Design Selector
		//onclick handler
			$("#clickDesign").on("click", function(){
				if ($(".design").is(":visible") ) {
					$(".design").hide();
				} else {
					$(".design").show();
				}
			});

	// Expertise Selector
		//onclick handler
			$("#clickExpertise").on("click", function(){
				if ($(".expertise").is(":visible") ) {
					$(".expertise").hide();
				} else {
					$(".expertise").show();
				}
			});

	// Skills Selector
		//onclick handler
			$("#clickSkills").on("click", function(){
				if ($(".skills").is(":visible") ) {
					$(".skills").hide();
				} else {
					$(".skills").show();
				}
			});

	// Tools Selector
		//onclick handler
			$("#clickTools").on("click", function(){
				if ($(".tools").is(":visible") ) {
					$(".tools").hide();
				} else {
					$(".tools").show();
				}
			});
	
	// Compliance Selector
		//onclick handler
			$("#clickCompliance").on("click", function(){
				if ($(".compliance").is(":visible") ) {
					$(".compliance").hide();
				} else {
					$(".compliance").show();
				}
			});
			
	// Projects Selector
		//onclick handler
			$("#clickProjects").on("click", function(){
				if ($(".projects").is(":visible") ) {
					$(".projects").hide();
				} else {
					$(".projects").show();
				}
			});
	
	// Community Selector
		//onclick handler
			$("#clickCommunity").on("click", function(){
				if ($(".community").is(":visible") ) {
					$(".community").hide();
				} else {
					$(".community").show();
				}
			});

	// Interests Selector
		//onclick handler
			$("#clickInterests").on("click", function(){
				if ($(".interests").is(":visible") ) {
					$(".interests").hide();
				} else {
					$(".interests").show();
				}
			});

	//Test
		//onclick handler
			$("#clickText").on("click", function(){
				if ($(".testText").is(":visible") ) {
					$(".testText").hide();
				} else {
					$(".testText").show();
				}
			});

	//Date Range Selector
		//Min Year 
		Array.min = function (array) {
			return Math.min.apply(Math, array);
		};
		//Max Year - (current date)
		var date = new Date();
		//Start date years
		var selector = $("#date-range-begin-selector");
		var sY = $(".startyear");
		var sYears = [];
		sY.each(function () {
			sYears.push(parseInt($(this).html(), 10));
		});
		var earliest = Array.min(sYears);
		//Selector
		selector.attr("min", earliest);
		selector.attr("max", date.getFullYear());
		selector.attr("value", earliest);
		$("#range").text(selector.attr("value"));
		jobDates = getJobDates();
		selector.change(function () {
			for (var endYear in jobDates) {
				if (endYear < $("#date-range-begin-selector").attr("value")) {
					for (var job in jobDates[endYear]) {
						//hide the job
						jobDates[endYear][job].css("display", "none");
					}
				} else {
					for (var job in jobDates[endYear]) {
						//show the job
						jobDates[endYear][job].css("display", "block");
					}
				}
			}
		});
});

//JobDate finder
function getJobDates() {
	var eY = $(".endyear");
	var eYears = {};
	eY.each(function () {
		var year = parseInt($(this).html(), 10);
		if (eYears[year]) {
			eYears[year].push($(this).parent().parent().parent());
		} else {
			eYears[year] = [$(this).parent().parent().parent()];
		};
	});
	return eYears;
};
