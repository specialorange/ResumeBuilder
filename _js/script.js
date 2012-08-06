// Generation
	//SideBar
		function addSidebarElems(ths, section, elem) {
			var value = ths.toLowerCase().replace(/ /g,'');
			var id = 'fs_' + section + '_' + value;
			var newElem = $('<section><label id="' + id + '" class="fs btn element ' + value + ' hidden">' + ths + '</label></section>');
			newElem.appendTo(elem);
		}
		//headers
			//already in HTML via Form/Fieldset/Label
		//sidebar elements
			$('section.abstract section h1').each(function(){
				return addSidebarElems($(this).html(), "ab", $('fieldset.abstract'));
			});
			$('section.businessapproaches section h1').each(function () {
				return addSidebarElems($(this).html(), "ba", $('fieldset.businessapproach'));
			});
			$('section.academic section.school > h1').each(function () {
				return addSidebarElems($(this).html(), "ac", $('fieldset.academic'));
			});
			$('section.community section.org > h1').each(function () {
				return addSidebarElems($(this).html(), "c", $('fieldset.community'));
			});
		//Find all <li> class types, and make a button
			function li() {
				//NOT DYNAMIC
				var jtaa = {"bit" : "Business Information Technology",
							"cs" : "Customer Service",
							"dev" : "Developer",
							"eng" : "Engineer",
							"mgr" : "Manager",
							"ocm" : "Organizational Change Management",
							"pm" : "Project Management" };
				var lis = [];
				$('.workexperience li').each(function() {
					var liCN = $(this).attr('class'); //li Class Name
					var temp = [];
					temp = liCN.split(' ');
					for (var i = 0 ; i < temp.length ; i++) {
						if ($.inArray(temp[i], lis)<0) {
							lis.push(temp[i]);
						}
					}
				});
				lis.sort();
				$.each(lis, function(idx, val){
					var value = val.toLowerCase();
					var name = jtaa[value];
					$('<label id="wejt_' + value + '" class="btn jobtype" name="' + value + '">' + name + '</label>').appendTo($('fieldset.workexperience'));
				});
			};
	//NUI (GC SIDE)
		function nHeading (ths) {
			var spaced = ths.html().toLowerCase().split(' ');
			if (spaced[0] == 'skills') {
				var value = spaced[0]+spaced[1];
			} else {
				var value = ths.html().toLowerCase().replace(/ /g,'');
			}
			var id = 'gc_' + value + '_heading';
			ths.replaceWith($('<h1><label id="' + id + '" class="gc btn heading ' + value + '">' + ths.html() + '</label></h1>'));
		}
		function nElement (ths, section, elem) {
			var value = ths.html().toLowerCase().replace(/ /g,'');
			var spaced = ths.html().toLowerCase();
			var id = 'gc_' + section + '_' + value;
			ths.replaceWith($('<label id="' + id + '" class="gc btn element ' + value + '">' + ths.html() + '</label>'));
		}
		//main headers (all but the skillstable and workexperience)
			$('.block > section > h1:not(:has("span.skillstablevisibility"))').each(function () {
				return nHeading($(this));
			});
			$('.block > section > h1:has("span.skillstablevisibility")').each(function () {
				return nHeading($(this));
			});
		//subheaders for each section
			$('section.abstract section h1').each(function () {
				return nElement($(this), "ab", "gc element");
			});
			$('section.businessapproaches section h1').each(function () {
				return nElement($(this), "ba", "gc element");
			});
			$('section.academic section.school > h1').each(function () {
				return nElement($(this), "ac", "gc element");
			});
			$('section.community section.org > h1').each(function () {
				return nElement($(this), "c", "gc element");
			});
// Initialize the start date and end date function.
	(function () {
		var start = [];
		var end = [];
		//for each time.start section
		$('section.position time.start').each(function () {
			//add the 'datetime' attr to the start[]
			start.push($(this).attr('datetime'));
			//sort start[] by using compareTime
			start.sort(compareTime);
			//place the first value of start[] in the startdate box
			$('#startdate').val(start[0]);
		});
		$('section.position time.end').each(function () {
			end.push($(this).attr('datetime'));
			end.sort(compareTime);
			$('#enddate').val(end[end.length - 1]);
		});
	})();
// //sort skillstable name alphabetically
	// $('section.skillstable .skillstablevisibility').html($('section.skillstable .skillstablevisibility').html().split(' / ').sort().join(' / '));
//Stateful change of checkbox text
	// $(function() {
	//     $(".checkbox").each(function () {
	// 		$(this).on('change', function () {
	// 			// console.log("Changed");
	// 			});
	// 	});
	// });
// Persistence
	var keyval = location.search.replace('?', '').split('&');
	var clicked = [];
	// console.log(clicked);
	

	function persistence(keyval) {
		for ( i=0 ; i < keyval.length ; i++ ) {
			// console.log('Trigger click on: '+keyval[i]);
			$('#'+keyval[i]).click();
		};
	};
	
	// $.each($('form')[0].elements, function () {
	// 	var key = $(this).attr('name');
	// 	if (key && formvals[key]) {
	// 		$('#' + key).val(formvals[key]);
	// 	} else {
	// 		// if ($(this).attr('type') == 'checkbox') {
	// 		//   $('#'+key)[0].checked = false;
	// 		// }
	// 	}
	// });
//hiding all elements
	$('.btn').click(function () {
	// console.log($(this).attr('id'))
		clicked.push($(this).attr('id'));
	// console.log(clicked);
		var text = $(this).text().toLowerCase();
		var cNames = $(this).attr("class");
		//Left to Right
		if ($(this).hasClass("gc")) {
			//heading
			if ($(this).hasClass("heading")) {
				//left
				($(this).parent().parent().toggleClass('hidden'));
				//right
				var classes = ($(this).attr('class').split(' '));
				classes[0] = "fs";
				var newClasses = '.' + classes.join().replace(/\,/g,'.');
				($("'" + newClasses + "'").toggleClass('white'));
					//hide any element's section that are being hidden 
					($("'" + newClasses + "'").siblings().each(function() {
						if (!$(this).children().hasClass('hidden')) {
							$(this).toggleClass('hidden');
						};
					}));
			// element
			} else if ($(this).hasClass("element")) {
				var count = ($(this).parent().parent().children().length-1);
				var hidden = ($(this).parent().parent().children().filter(':hidden').size()+1);
				//if all elelemts are hidden, hide the parent too
				if (hidden >= count) {
					//left
					($(this).parent().toggleClass('hidden'));
					($(this).parent().parent().toggleClass('hidden'));
					($(this).parent().parent().children().each(function() {
						($(this).removeClass('hidden'));
					}));
					//right
					var classes = ($(this).attr('class').split(' '));
					classes[0] = "fs";
					var newClasses = '.' + classes.join().replace(/\,/g,'.');
					($("'" + newClasses + "'").toggleClass('hidden'));
					($("'" + newClasses + "'").parent().parent().children().slice(1)).toggleClass('hidden');
					($("'" + newClasses + "'").parent().parent().children().eq(0)).toggleClass('white');
				//hide one element only
				} else {
					//left
					($(this).parent().toggleClass('hidden'));
					//right
					var classes = ($(this).attr('class').split(' '));
					classes[0] = "fs";
					var newClasses = '.' + classes.join().replace(/\,/g,'.');
					($("'" + newClasses + "'").toggleClass('hidden'));
				}
			//dunno
			} else {
			}
		//Right to Left
		} else if ($(this).hasClass("fs")) {
			//heading
			if ($(this).hasClass("heading")) {
				var count = ($(this).siblings().length);
				var hidden = ($(this).siblings().filter(':hidden').length);
				var classes = ($(this).attr('class').split(' '));
				//remove 'white' if it exists as a class
				for (var i=classes.length-1; i>=0; i--) {
					if (classes[i] === 'white') {
						classes.splice(i, 1);
					}
				};
				classes[0] = "gc";
				var newClasses = '.' + classes.join().replace(/\,/g,'.');
				if ($('.fs.section').length-1 == $('.fs.white').length) { 
					$('.jokes').toggleClass('hidden');
				}
				//left
				($("'" + newClasses + "'").parent().parent().toggleClass('hidden'));
				//right
				($(this).toggleClass('white', (!$(this).hasClass('white'))));
					//unhide any element's sections that were hidden
					//if all elements were hidden
						if(hidden >= count) {
							($(this).siblings().children().toggleClass('hidden'));
							($(this).siblings().toggleClass('hidden'));
						} else {
							($(this).siblings().each(function() {
								if (!$(this).children().hasClass('hidden')) {
									$(this).toggleClass('hidden');
								};
							}));							
						}
			// element
			} else if ($(this).hasClass("element")) {
				var classes = ($(this).attr('class').split(' '));
				//remove 'white' if it exists as a class
				for (var i=classes.length-1; i>=0; i--) {
					if (classes[i] === 'white') {
						classes.splice(i, 1);
					}
				};
				classes[0] = "gc";
				var newClasses = '.' + classes.join().replace(/\,/g,'.');
				//left
				($("'" + newClasses + "'").parent().toggleClass('hidden'));
				//right
				($(this).toggleClass('hidden', (!$(this).hasClass('hidden'))));
			//information section
			} else if ($(this).hasClass("i")) {				
				$(this).parent().parent().parent().parent().parent().toggleClass('hidden');
			//Hide all show all
			} else if ($(this).hasClass("visibility")) {
				//Hide
				if ($(this).hasClass("off")) {
					//headers
					$(this).parent().prevAll().each(function() {
						if (!$(this).children(':first-child').hasClass('white')) {
							$(this).children(':first-child').click()							
						}
					});
					$('.jokes').toggleClass('hidden');
				//Show
				} else if ($(this).hasClass("on")) {
					//headers
					$(this).parent().prevAll().each(function() {
						if ($(this).children(':first-child').hasClass('white')) {
							$(this).children(':first-child').click()							
						}
					});
					//elements
					$(this).parent().prevAll().each(function() {
						console.log($(this).children().children());
						$(this).children().children().each(function() {
							if (!$(this).hasClass('hidden')) {
							$(this).click()
							}
						})
					});
				}
			}
		//not 'fs' or 'gc'
		} else {
		}	
		if ($('.fs.section').length-1 === $('.fs.white').length) { 
			$('.jokes').toggleClass('hidden');
		}
	});

// Work Experience
	//functions
		function getCurrentDate() {
			var d = new Date();
			var m = new Array(7);
			var y = d.getFullYear();
			m[0] = "January"; m[1] = "February"; m[2] = "March"; m[3] = "April"; m[4] = "May"; m[5] = "June"; m[6] = "July"; m[7] = "August"; m[8] = "September"; m[9] = "October"; m[10] = "November"; m[11] = "December";
			return m[d.getMonth()] + " " + y;	
		};
		function currentDateYMFormat(){
			var d = new Date();
			var m = new Array(7);
			var y = d.getFullYear();
			m[0] = "01"; m[1] = "02"; m[2] = "03"; m[3] = "04"; m[4] = "05"; m[5] = "06"; m[6] = "07"; m[7] = "08"; m[8] = "09"; m[9] = "10"; m[10] = "11"; m[11] = "12";
			return y + '-' + m[d.getMonth()];
		};
		//workexperience end date if empty
		$('.workexperience .company .position > time.end').each(function(){
			if (!($(this).attr('datetime'))){
				$(this).attr('datetime', currentDateYMFormat());
				$(this).html('Current');
			}
		});
		//community end date if empty
		$('.community .org .event > time.end').each(function(){
			if (!($(this).attr('datetime'))){
				$(this).attr('datetime', currentDateYMFormat());
				$(this).html('Current');
			}
		});
		//generate the company start and end dates
			$('.workexperience section.company').each(processCompanyTime);
		function pad(number) {
			var width = 2;
			var str = '' + number;
			while (number.length < width) {
				str = '0' + str;
			}
			return str;
		}
		function compareTime(a, b) {
			a = processTime(a);
			b = processTime(b);
			if (a.year != b.year) {
				return a.year - b.year;
			}
			return a.month - b.month;
		}
		function processTime(time) {
			var splitresults = time.split('-');
			time = {};
			time.year = splitresults[0];
			time.month = splitresults[1];
			return time;
		}
		function processCompanyTime() {
			var start = [];
			var end = [];
			$(this).find('section.position > time.start:visible').each(function () {
				start.push($(this).attr('datetime'));
			});
			$(this).find('section.position > time.end:visible').each(function () {
				end.push($(this).attr('datetime'));
			});
			if (start.length == 0 && end.length == 0) {
				$(this).hide();
			} else {
				$(this).show();
			}
			start.sort(compareTime);
			end.sort(compareTime);
		//Dynamically set company level start and end time.
			$(this).find('>h1').after($('.workexperience time.end[datetime=' + end[end.length - 1] + ']').clone());
			$(this).find('>h1').after($('.workexperience time.start[datetime=' + start[0] + ']').clone());
		};
	//Add a Hyphen between dates
		$('section.workexperience section time.start').each(function(){
			$(this).html($(this).html() + ' - ');
		});
	//Set position level end time if current
		// $('workexperience.company.position')
	//start selector functionality
		$('#startdate').on('change', function () {
			var $formelem = $(this);
			// Hide all positions that end before the specified date.
			$('section.position time.start').each(function () {
				if (compareTime($(this).attr('datetime'), $formelem.val()) <= 0) {
					$(this).parent().hide();
				} else {
					$(this).parent().show();
				}
			});
			$('section.company > time').remove();
			$('section.company').each(processCompanyTime);
		});
	//end selector functionality
		$('#enddate').on('change', function () {
			var $formelem = $(this);
			// Hide all positions that start after the specified date.
			$('section.position time.end').each(function () {
				if (compareTime($(this).attr('datetime'), $formelem.val()) > 0) {
					$(this).parent().hide();
				} else {
					$(this).parent().show();
				}
			});
			$('section.company > time').remove();
			$('section.company').each(processCompanyTime);
		});
	// Job Type Button
		$('fieldset.workexperience .jobtype').on('click', function() {
			//Change color to white to mean hidden
			$(this).toggleClass("white");
			// get the non selected jobtypes, and toggle them
			var notSelectedList = $('fieldset.workexperience .jobtype:not(.white)').map(function() {
				return '.' + $(this).attr('name');
			}).get().join(',');
			$('.workexperience li').each(function() {
				$(this).toggle($(this).is(notSelectedList));
			});
		});

// Skills Table
	(function TCC() {  
		//TODO, make this function global
		//Today's Date
			function getCurrentDate() {
				var d = new Date();
				var m = new Array(7);
				var y = d.getFullYear();
				m[0] = "January"; m[1] = "February"; m[2] = "March"; m[3] = "April"; m[4] = "May"; m[5] = "June"; m[6] = "July"; m[7] = "August"; m[8] = "September"; m[9] = "October"; m[10] = "November"; m[11] = "December";
				return m[d.getMonth()] + ", " + y;	
			};
		//fill in blank end dates with Today's date
			$('section.skillstable td:nth-child(5)').each(function() {
				if ($(this).is(':empty')) {
					$(this).append(getCurrentDate());
				};
			});	
		//fill in blank elapsed time
			var monthNames = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ]
			var monthNumber = {}
			for (var i=0; i<monthNames.length; ++i) {
				monthNumber[monthNames[i]] = i;
			};
		//convert the string to number of months
			function stringToMonthNumber(monthYear) {
				var parts = monthYear.split(/\s*,\s*/);
				var month = monthNumber[parts[0]];
				var year = parts[1] - 1;
				return year * 12 + month;
			};
		//How many elapsed months
			function elapsedMonths(startString, endString) {
			    return stringToMonthNumber(endString) - stringToMonthNumber(startString);
			};
			function convertToElapsed(elapsed) {
				var m = elapsed%12;
				var y = Math.floor(elapsed/12);
				if (y == 0) {
					if(m == 0) {
						return ("");
					} else if(m == 1) {
						return (m + " month");
					} else {
						return (m + " months");
					}
				} else if(y == 1) {
					if(m == 0) {
						return (y + " year");
					} else if(m == 1) {
						return (y + " year " + m + " month");
					} else {
						return (y + " year " + m + " months");
					}
				} else {
					if(m == 0) {
						return (y + " years");
					} else if(m == 1) {
						return (y + " years " + m + " month");
					} else {
						return (y + " years " + m + " months");
					}
				}
			};
		//calculate the elapsed based on start and end date
			$('section.skillstable td:nth-child(6)').each(function() {
				$(this).append(convertToElapsed(elapsedMonths($(this).prev().prev().html().toLowerCase(),$(this).prev().html().toLowerCase())));
			})
		//Row Button generator
			// //grab the names T/C/C 'label' and sort
				var labels = $('section.skillstable .skillstablevisibility').html().split(' | ');
				labels.sort();
			//grab each first td child of skillstable
				var keys = [];
				$('section.skillstable table td:first-child').each(function(){ keys.push($(this).html()); });
				keys.sort();
				keys = $.unique(keys);
				keys.sort();

			// //¿¿ asign the label to the key and assign to hash??
				var hash = {};
				for (var i = 0; i < keys.length; i++) {
				  hash[keys[i]] = labels[i];
				}
			//Row Button Generator
				$.each(keys, function(i) {
					$('<label id="skillstable_'+this+'" class="row btn">'+this+'</label>').appendTo($("fieldset.skillstable"));
				});
				// separate rows from columns
					$('<br>').appendTo($("fieldset.skillstable"));
		//column button generator
			var cols = [];
			$('section.skillstable table th').each(function(){
				cols.push($(this).html().replace(/\ /g,''));
			});
			cols.splice(0,2);
			$.each(cols, function(i) {
					$('<label id="skillstable_'+this.toLowerCase()+'" class="column btn">'+cols[i]+'</label>' + '<br>').appendTo($('fieldset.skillstable'));
			});
		//Row Button Hider
			$('fieldset.skillstable .row').on('click', function() {
				//change clicked buttons to white
					$(this).toggleClass("white");
				$formelem = $(this);
				var index = $(this).prevAll('input').length - 1;
				$('section.skillstable table td:first-child').each(function() {
					if ($formelem.attr('id').replace('skillstable_','') == $(this).html()) {
						$(this).parent().toggleClass("hidden");
					}
				});
			//handles the |s between T|C|C of the gc SkillsTable name 
				var segments = [];
				$('fieldset.skillstable .row:not(.white)').each(function() {
					segments.push(hash[$(this).attr('id').replace('skillstable_','')]);
				});
				$('section.skillstable .skillstablevisibility').html(segments.join(' | '));
			//if all three are unselected, hide the skills table
				if ($('fieldset.skillstable .row.white').length === $('fieldset.skillstable .row').length) {
					//hide the sections
						//left
							//hide the skills table
							($('.gc.section.skillstable')).toggleClass('hidden');
							//resets the span class of jobtypes
							$('.skillstablevisibility').html('Certifications | Compliance | Technologies');
							//unhides all rows of table
							$('section.skillstable table tbody').children().each(function() {
								$(this).toggleClass('hidden');
							});
						//right
							//reset all three from white to black
							($('fieldset.skillstable .white').each(function() {
								($(this).toggleClass('white', (!$(this).hasClass('white'))));
							}));
							//toggle FS skillstable to white
							($('.fs.btn.heading.skillstable').toggleClass('white'));
							//hide the formElements subsections of skillstable
							($(this).parent().children().not(':eq(0)').toggleClass('hidden'));
				}
			});
		//Column Button Hider
			$('fieldset.skillstable .column').on('click', function() {
				var index = $(this).prevAll('.column').length+2;
				$('colgroup').parent('table').find("td,th").filter(":nth-child(" + (index+1) + ")").toggle("slow");
				//change clicked buttons to white
					$(this).toggleClass("white");
			});
		//Permanently hide the Category Column
			$('section.skillstable th:nth-child(1)').hide();
			$('section.skillstable td:nth-child(1)').hide();
	})();
	//Table Sorter dateSorter
		$.tablesorter.addParser({
			// set a unique id
			id: 'dateSorter',
			is: function(s) {
				// return false so this parser is not auto detected
				return false;
			},
			format: function(s) {
				// format your data for normalization
				for (var i = 0 ; i < s.length ; i++) {
					var parts = [];
					var order = [];
					parts.push(s.toLowerCase().replace(/january/,0).replace(/february/,1).replace(/march/,2).replace(/april/,3).replace(/may/,4).replace(/june/,5).replace(/july/,6).replace(/august/,7).replace(/september/,8).replace(/october/,9).replace(/november/,10).replace(/december/,11).split(/\s*,\s*/));
					order.push(parseInt(parts[0][0])+(parseInt(parts[0][1])*12));
					return order;
				};
				s = order;
				return s;
			},
			// set type, either numeric or text
			type: 'numeric'
		});
	//Table Sorter elapsedSorter
		$.tablesorter.addParser({
			// set a unique id
			id: 'elapsedSorter',
			is: function(s) {
				// return false so this parser is not auto detected
				return false;
			},
			format: function(s) {
				var myRegexp = /([\d]+) ([\w]+)(?: ([\d]+) ([\w]+))?/;
				var match = myRegexp.exec(s);
				var order = [];

				if (typeof match[3] == 'undefined') {
					//month
				    if (match[2][0] == "m") {
				        order.push(parseInt(match[1]));
				    }
				    // year
				    if (match[2][0] == "y") {
				        order.push(parseInt(match[1])*12);
				    }
				    // both elements
				} else {
				    order.push(parseInt(match[1])*12 + parseInt(match[3]));
				}
				s = order;
				return s;
			},
			// set type, either numeric or text
			type: 'numeric'
		});
	//Table Sorter parsers Identification
		$(".skillstable table").tablesorter({
			headers: {
			3: {
			sorter:'dateSorter'
			},
			4: {
			sorter:'dateSorter'
			}
			,
			5: {
			sorter:'elapsedSorter'
			}
			}
		}); 
		$(".skillstable table").addClass("tablesorter");

		// $(function(){
		// 	$('.ds #valueAA, .ds #valueBB').selectToUISlider({
		// 		labels: 0,
		// 	});
		// });


//Blinking
	function blinks(hide) {
		if(hide==1) {
			$('.blink').addClass('white');
			hide = 0;
		} else { 
			$('.blink').removeClass('white');
			hide = 1;
		}
		setTimeout("blinks("+hide+")",1000);
	}
	
$(document).ready(function () {  
	blinks(1);
	li();

	persistence(keyval);
	// check to see if the scrollHeight + right hand side height is <= to screen height - (footerheight + margin).
	//        if not, position: absolute; bottom: (footer height + margin)px;
	// 
	// else
	//        position: fixed; top: 0;
	// 
	// Basically, on scroll, check for the page position and change the layout accordingly with the knowledge that position: fixed; will keep the element's position relative to the viewport.

		//Sidebar
			//sliding Float
				// var top = $('#slideAside').offset().top - parseFloat($('#slideAside').css('marginTop').replace(/auto/, 0));
				// var hh = $('header').height();
				// var ah = $('aside').height();
				// var fh = $('footer').height();
				// $(window).on('scroll', function(event) {
				// 	// what the y position of the scroll is
				// 	var y = $(this).scrollTop();
				// 	// whether that's below the form
				// 	if (y >= top) {
				// 		// if so, ad the fixed class
				// 		$('#slideAside').addClass('fixed');
				// 	} else {
				// 		// otherwise remove it
				// 		$('#slideAside').removeClass('fixed');
				// 	}
				// });
				// $(window).on('scroll', function(event) {
				// 	var sh = $(this).scrollTop();
				// 	if (sh + ah <= window.innerHeight - (fh + hh)) {
				// 		$('aside').css({'position: absolute; bottom: 150px;'})
				// 	}
				// });
});	
var whichPart = '?';

$(document).on('click','.btn',function() {

    whichPart += $(this).attr('id') + '&';
    console.log(whichPart);
});