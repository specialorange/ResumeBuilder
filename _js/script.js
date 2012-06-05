/* Author:
Chris Frisina - chris@specialorange.org
TGM - Contact@thegreatmicael.com
Nathan Hammond - Contact@nathanhammond.com
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

	//Technology Selector
		//onclick handler
			$("#clickTech").on("click", function(){
				if ($(".tech").is(":visible") ) {
					$(".tech").hide();
				} else {
					$(".tech").show();
				}
			});
	//Compliance Selector
		//onclick handler
			$("#clickComp").on("click", function(){
				if ($(".comp").is(":visible") ) {
					$(".comp").hide();
				} else {
					$(".comp").show();
				}
			});
	//Certification Selector
		//onclick handler
			$("#clickCert").on("click", function(){
				if ($(".cert").is(":visible") ) {
					$(".cert").hide();
				} else {
					$(".cert").show();
				}
			});


	//Start Selector
		//onclick handler
			$("#clickStart").on("click", function(){
				if ($('#tech-table td:nth-child(3)').is(":visible") ) {
					$('#tech-table td:nth-child(3)').hide();
				} else {
					$('#tech-table td:nth-child(3)').show();
				}
			});

	//Test
		//onclick handler
			$("#clickText").on("click", function(){
				if ($(".testText").is(":visible") ) {
					$(".testText").hide();
					$(this).css('background-color','red')
				} else {
					$(".testText").show();
// TODO - Make this apply to all span ba#'s and have it distinguish on form off
					$(this).css('background-color','#F16529' )
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
	//Current Date	
		function getCurrentDateInside() {
			var date = new Date();
			var month = new Array(7);
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
			var year = date.getYear();
			if (year < 2000) { year+=1900; }
			write(month[date.getMonth()] + " " + date.getDate() + ", " + year);
		};
	// Today's Date for editing
		// $("#today").each(function(){
		// 	$(this).text(getCurrentDateInside())
		// });
	// 
		// $("#tech-table tr td:nth-child(3)").each(function(){
		// 	if ( $(this).text() == "") {
		// 		$(this).text(<h2>getCurrentDateInside()</h2>);
		// 	} else {
		// 		$(this).text();
		// 	}
		// });
		// 		
		// $("#tech-table tr td:nth-child(4)").each(function(){
		// $(this).text = $(this).prev().text() + $(this).prev().prev().text();
		// });
	// hide Col Typ in TECH
		$('#tech-table td:nth-child(1)').hide();
		
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

function getCurrentDate() {
	var date = new Date();
	var month = new Array(7);
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var year = date.getYear();
	if (year < 2000) { year+=1900; }
	document.write(month[date.getMonth()] + " " + date.getDate() + ", " + year);
};