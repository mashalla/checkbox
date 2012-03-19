/*
---
 script: demo.js
 description: ---
 license: MIT-style license
 authors:
 - Christian Merz
 requires:
 - core:1.4/Element.Event
 provides: [dialogCME]
...
*/

window.addEvent('domready', function() {
	mooAccessCheckbox = new AccessibleCheckbox({
		'checkboxes' : $('MooAccessCheckbox')
	});
});