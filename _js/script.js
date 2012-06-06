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
	// Chris w/michaels help on tr hider 
		//onclick handler
			// $("#clickTech").on("click", function(){
			// 	if ($("#tech").is(":visible") ) {
			// 		$("#tech").hide();
			// 		$("#tech-table tr").each(function(){
			// 			if ($($(this).children()[0]).text()=="technology") {
			// 				$(this).hide();
			// 			}
			// 		});
			// 	} else {
			// 		$("#tech").show();
			// 		$("#tech-table tr").each(function(){
			// 			if ($($(this).children()[0]).text()=="technology") {
			// 				$(this).show();
			// 			}
			// 		});
			// 	}
			// });
	// //Compliance Selector
	// 	//onclick handler
	// 		$("#clickComp").on("click", function(){
	// 			if ($(".comp").is(":visible") ) {
	// 				$(".comp").hide();
	// 			} else {
	// 				$(".comp").show();
	// 			}
	// 		});
	// //Certification Selector
	// 	//onclick handler
	// 		$("#clickCert").on("click", function(){
	// 			if ($(".cert").is(":visible") ) {
	// 				$(".cert").hide();
	// 			} else {
	// 				$(".cert").show();
	// 			}
	// 		});

	//WHAT SELECTOR
		// MICHAEL 
			var rowSelector = function (args) {
				$("#"+args.data.type).toggle();
				$("#tech-table tr").each(function(){
					if ($($(this).children()[0]).text()==args.data.type) {
						$(this).toggle();
					}
				});
			};
			// $("#clickTech").click({type:"technology"},generalSelector);
			// assoc array is id:type
			var hiders = {"#clickTech":"technology", "#clickComp":"compliance", "#clickCert":"certification"};
			for (var id in hiders) {
				$(id).click({type:hiders[id]}, rowSelector);
			}
	//WHAT ELEMENT SELECTOR
		//CHRIS
		var colSelector = function (args) {
			var num = 0;
			var i = 0;
			$($("#tech-table tr")[0]).find('td').each(function(){
				if ($(this).text() == args.data.type)
					num=i;
					i++;
				});
				if (num!=0){
					$("#tech-table tr").each(function(){
						var tds = $(this).find('td');
						$(tds[num]).toggle();
					});
				}
			};
			// assoc array is id:type
			var colHiders = {"#clickName":"Name", "#clickStart":"Start Date", "#clickEnd":"Current/End Date", "#clickElapsed":"Elapsed Time", "#clickVersion":"Version(s)", "#clickRating":"Personal Rating", "#clickProject":"Project"};
			for (var id in colHiders) {
				$(id).click({type:colHiders[id]}, colSelector);
			}

	//Test
		//onclick handler
			$("#clickText").on("click", function(){
				if ($(".testText").is(":visible") ) {
					$(".approach").hide();
					$(".design").hide();
					$(".expertise").hide();
					$(".skills").hide();
					$(".tools").hide();
					$(".compliance").hide();
					$(".projects").hide();
					$(".community").hide();
					$(".interests").hide();
					$(".testText").hide();
				} else {
					$(".approach").show();
					$(".design").show();
					$(".expertise").show();
					$(".skills").show();
					$(".tools").show();
					$(".compliance").show();
					$(".projects").show();
					$(".community").show();
					$(".interests").show();
					$(".testText").show();

// TODO - Make this apply to all span ba#'s and have it distinguish on form off
					$(this).css('background-color','#F16529' )
				}
			});

	// tehcnology
		$("#technology").click(function(){
			alert("clicked");
		});
	// //Begin Date Range Selector
	// 	//Slider
	// 	function showMinValue(newValue)
	// 	{
	// 		document.getElementById("range").innerHTML=newValue;
	// 	}
	// 	//Min Year 
	// 	Array.min = function (array) {
	// 		return Math.min.apply(Math, array);
	// 	};
	// 	//Max Year
	// 	Array.max = function (array) {
	// 		return Math.max.apply(Math, array);
	// 	};
	// 	//Max Year - (current date)
	// 	var date = new Date();
	// 	//Start date years
	// 	var selector = $("#date-range-end-selector");
	// 	var sY = $(".startyear");
	// 	var sYears = [];
	// 	sY.each(function () {
	// 		sYears.push(parseInt($(this).html(), 10));
	// 	});
	// 	var earliest = Array.min(sYears);
	// 	var latest = Array.max(sYears);
	// 	//Selector
	// 	selector.attr("min", earliest);
	// 	selector.attr("max", date.getFullYear());
	// 	selector.attr("value", earliest);
	// 	$("#range").text(selector.attr("value"));
	// 	jobDates = getJobDates();
	// 	selector.change(function () {
	// 		for (var endYear in jobDates) {
	// 			if (endYear < $("#date-range-end-selector").attr("value")) {
	// 				for (var job in jobDates[endYear]) {
	// 					//hide the job
	// 					jobDates[endYear][job].css("display", "none");
	// 				}
	// 			} else {
	// 				for (var job in jobDates[endYear]) {
	// 					//show the job
	// 					jobDates[endYear][job].css("display", "block");
	// 				}
	// 			}
	// 		}
	// 	});
	//End Date Range Selector
		//Slider
		function showMaxValue(newValue)
		{
			document.getElementById("range").innerHTML=newValue;
		}
		
		//Min Year 
		Array.min = function (array) {
			return Math.min.apply(Math, array);
		};
		//Max Year
		Array.max = function (array) {
			return Math.max.apply(Math, array);
		};
		//Max Year - (current date)
		var date = new Date();
		//Start date years
		var selector = $("#date-range-end-selector");
		var sY = $(".startyear");
		var sYears = [];
		sY.each(function () {
			sYears.push(parseInt($(this).html(), 10));
		});
		var earliest = Array.min(sYears);
		var latest = Array.max(sYears);
		//Selector
		selector.attr("min", earliest);
		selector.attr("max", date.getFullYear());
		selector.attr("value", earliest);
		$("#range").text(selector.attr("value"));
		jobDates = getJobDates();
		selector.change(function () {
			for (var endYear in jobDates) {
				if (endYear < $("#date-range-end-selector").attr("value")) {
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
			return month[date.getMonth()] + " " + date.getDate() + ", " + year;
		};
	// Today's Date for editing
		// $("#today").each(function(){
		// 	$(this).text(getCurrentDateInside())
		// });
	// 
		$("#tech-table tr td:nth-child(4)").each(function(){
			if ( $(this).text() == "") {
				$(this).append(getCurrentDateInside());
			} else {
				$(this).text();
			}
		});
				
		$("#tech-table tr td:nth-child(4)").each(function(){
				$(this).text = $(this).prev().text() + $(this).prev().prev().text();
				});
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