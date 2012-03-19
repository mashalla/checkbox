Accessible Checkbox
===========

Provides a class that makes checkboxes accessible

![Screenshot](http://www.accessiblemootoolsdemo.iao.fraunhofer.de/Mootools_Widgets/WidgetThumbs/Checkbox.png)

How to use
----------

	#HTML
	<form action="" id="MooAccessCheckbox">
		<p>
			<input type="checkbox" name="apple" value="apple" checked>
			<span>Apple</span>
			<br>
			<input type="checkbox" name="banana" value="banana">
			<span>Banana</span>
			<br>
			<input type="checkbox" name="orange" value="orange">
			<span>Orange</span>
			<br>
			<input type="checkbox" name="pineapple" value="pineapple">
			<span>Pineapple</span>
			<br>
			<input type="checkbox" name="melon" value="melon">
			<span>Melon</span>
		</p>
	</form>
	
	#JS
	window.addEvent('domready', function() {
		mooAccessCheckbox = new AccessibleCheckbox(
			{ 'checkboxes' : $('MooAccessCheckbox')});
	});
