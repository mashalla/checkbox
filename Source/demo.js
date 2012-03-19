/*
---

name: Accessible Checkbox Demo

license: MIT-style license.

authors: Christian Merz

provides: [AccessibleCheckbox]

...
*/

window.addEvent('domready', function() {
	mooAccessCheckbox = new AccessibleCheckbox({
		'checkboxes' : $('MooAccessCheckbox')
	});
});