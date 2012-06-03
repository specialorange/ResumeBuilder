/* Author:

*/
$(document).ready(function () {
	//Approach Selector
		//Check Box
		$("#aApproach").css("display", "none");
		//Onclick handler
		$("#checkApproach").click(function () {
			// If checked
			if ($("#checkApproach").is(":checked")) {
				//show the hidden div
				console.log("show");
				$(".aApproach").show();
			} else {
				//otherwise, hide it
				console.log("hide");
				$(".aApproach").hide();
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
