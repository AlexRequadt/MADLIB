// Javascript!!!





/*
I spent last summer on my grandfather's ad1.farm. He          
raises oats, wheat, and __Plural Nown__. Grandfather also grows lettuce,
corn, and lima ___Plural Noun__. My favorite place to __verb__.on
the farm is the __noun__.house where Grandfather keeps his
beautiful.chickens. Every day, each hen lays round, smooth
___Plural Noun__. Grandfather sells most of them, but keeps some so
the hens can __Verb__.on them and hatch cute, fuzzy little
__Plural Noun__.for an hour, and climb a goat.without losing your
__Body Part__. I'm looking forward to next year, when Grandfather
is going to show me how to drive his __noun__, sow the __noun__, 
and __Verb__.the cow.
*/

function doMadLib() {

	alert("Here is your Mad Lib");

	var ad1 = prompt("give me an adjective")

	var ad2 = prompt("give me an adjective")

	var ad3 = prompt("give me an adjective")

	var pn1 = prompt("give me a plural noun")

	var pn2 = prompt("give me a plural noun")

	var pn3 = prompt("give me a plural noun")

	var pn4 = prompt("give me a plural noun")

	var n1 = prompt("give me a noun")

	var n2 = prompt("give me a noun")

	var n3 = prompt("give me a noun")

	var v1 = prompt("give me a verb")

	var v2 = prompt("give me a verb")

	var v3 = prompt("give me a verb")

	var bp1 = prompt("give me a body part")

	alert("Your story is ready to view below.")

	var story = "I spent last summer on my grandfather's <span class = 'c'>" 
	+ ad1 + " </span>farm. He raises oats, wheat, and <span class = 'c'>" + pn1 + "</span> Grandfather also grows lettuce, corn, and lima <span class = 'c'>" 
	+ pn2 + "</span>. My favorite place to <span class = 'c'>" + v3 + 
	"</span> on the farm is the <span class = 'c'>" + n1 + " </span>house where Grandfather keeps his beautiful.chickens. Every day, each hen lays round, smooth <span class = 'c'>"
	+ pn3 + "</span>. Grandfather sells most of them, but keeps some so the hens can <span class = 'c'>" 
	+ v1 + "</span> on them and hatch cute, fuzzy little <span class = 'c'>"
	+ pn4 + " </span>for an hour, and climb a goat without losing your <span class = 'c'>"
	+ bp1 + "</span> I'm looking forward to next year, when Grandfather is going to show me how to drive his <span class = 'c'>" 
	+ n2 + " </span> sow the <span class = 'c'>" + n3 + "</span> and <span class = 'c'>" + v2 +"</span> the cow. ";

	document.getElementById("finalMadLib").innerHTML = story;

}
