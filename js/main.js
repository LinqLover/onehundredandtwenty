// The term "#semester-view" refer to the upper list, the list of courses which are currently chosen in a specific semester
// The term "#courses-pool" refers to the lists of courses, that are currently not chosen, so the lower list

/* use strict-mode provided by ecma-script5, see http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/ for details */
"use strict";

var settings = {
	// number of list items in one list in unchosen lists
	coursesPoolHeight: 8
};

var frontend = {
	/* used, when user starts drag'n'dropping courses */
	startSorting: function(event, ui) {
			$(".courses li").knubtip("disable");
		},
	/* used, when user finished drag'n'dropping courses */
	endSorting: function(event, ui) {
			$(".courses li").knubtip("enable");
			frontend.sortPool(event, ui);
		},
	/* used sort courses pool, ensures that each stack has the same height (settings.coursesPoolHeight) */
	sortPool : function (event, ui) {
			// get pool, and its first child (= #extra1).
			var pool = $("#courses-pool");
			var course = pool.children().first();
			// "while (course.hasNext())" - loop as long as there is another sibling, so through all children
			while (course.get(0).tagName !== "BR") {
				// if it has too much children ..
				if (course.children().size() > settings["coursesPoolHeight"]) {
					// .. move one item from the current to the next.
					var last = course.children().last();
					last.detach();
					course.next().prepend(last);
				}
				// if it has too less children ..
				else if (course.children().size() < settings["coursesPoolHeight"] && course.next().get(0).tagName !== "BR") {
					// .. move one item from the next to the current.
					var nextFirst = course.next().children().first();
					nextFirst.detach();
					course.append(nextFirst);
				}
				// go on with next course
				course = course.next();
			}
		},
	/* used to display informationen from an array in a nice way, used for tooltips */
	displayArray: function (value) {
			if (Array.isArray(value) && value[0] !== "") {
				return value.join(", ");
			}
			return "<em>Information fehlt</em>";
		},
	/* selector for droppables */
	coursesList: ".courses",
	/* when a li has this class it cannot be dragged */
	disabledClass: "disabled"
};
$(function() {
	/* apply jquery drag'n'dropping */
	$(frontend.coursesList).sortable({
		connectWith: frontend.coursesList,		// specifies lists where li's can be dropped
		placeholder: "placeholder-highlight",		// css class for placeholder when drag'n dropping
		cancel: "." + frontend.disabledClass,		// elements matching this selector cannot be dropped
		change: frontend.sortPool,			// raised, when there was a change while sorting
		start: frontend.startSorting,			// raised, when sorting starts
		stop: frontend.endSorting			// raised, when sorting is finished
	}).disableSelection();					// disableSelection makes text selection impossible

	/*
	 * Information:
	 * var data is imported from data.js
	 * It is an object containing all relevant informationen about courses.
	 */

	// There can be at most settings.coursesPoolHeight items in one stack.
	// The following to var's ensure this.
	var currentPool = 1;
	var coursesInCurrentPool = 0;

	// for each course in data
	for (var e in data) {
		// build list item and associated .info for tooltip
		var course = data[e];
		var courseInfo = 	"<div class='info'>" +
					"<h3>" + course['nameLV'] + "</h3>" +
					"<div>" +
					"<table>" +
					"<tr><td>Modul</td><td>" + frontend.displayArray(course['modul']) + "</td></tr>" +
					"<tr><td>Dozent/en</td><td>" + frontend.displayArray(course['dozent'])+ "</td></tr>" + 
					"<tr><td>Credit Points</td><td>" + course['cp'] + " Leistungspunkte</td></tr>" +
					"<tr><td>Lehrform</td><td>" + frontend.displayArray(course['lehrform']) + "</td></tr>" + 
					"<tr><td>Vertiefungsgebiet/e</td><td>" + frontend.displayArray(course['vertiefung']) + "</td></tr>" +
					"</table>" +
					"</div>" +
					"</div>";
		var oneliner = "";
		// if item contains no newline break, apply specific css class (which sets line-height higher, so text is vertically aligned)
		if (course['kurz'].indexOf("<br />") === -1) {
			oneliner = " class='oneliner'";
		}
		var html = $("<li" + oneliner + ">" + course['kurz'] + "<button>ⴲ</button>" + courseInfo + "</li>");
		// now the element has been created, decide where to put it on the page
		// if it is not recommended for a specific semester ..
		if (course['empfohlen'] === "") {
			// .. put it in the courses pool taking care of settings.coursesPoolHeight
			$("#extra" + currentPool).append(html);
			coursesInCurrentPool += 1;
			if (coursesInCurrentPool === settings.coursesPoolHeight) {
				coursesInCurrentPool = 0;
				currentPool += 1;
			}
		}
		// if it is recommended for a specific semester ..
		else {
			// .. just put it there.
			$("#semester" + course['empfohlen']).append(html);
		}
	}

	/* apply click routine for buttons which disable possibility to drag it */
	$(".courses li button").click(function () {
		$(this).parent().toggleClass("disabled"); 	// disable list element, when button in list element is clicked
	});

	$("button#check").click(function () {
		alert("test");
	});
	
	/* initialize tooltips for all courses */
	$(".courses li").knubtip("init");			// activate tooltip for li elements (see jquery.knubtip.js)
});
