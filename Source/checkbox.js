/*
---

name: Accessible Checkbox

license: MIT-style license.

authors: Christian Merz

provides: [AccessibleCheckbox]

...
*/

var AccessibleCheckbox = new Class({
	Implements : [Options, Events],

	options : {
		checkboxes : null,
		classPrefix : 'MooAccessCheckbox',
		buttonHeight : 25
	},
	initialize : function(options) {
		this.setOptions(options);
		if(!this.options.checkboxes)
			return;
		this.options.checkboxes.setProperty('role', 'group');
		this.buttons = this.options.checkboxes.getElements('input');
		this.newButtons = new Array();
		this.buttons.each( function(button) {
			var index = this.buttons.indexOf(button);
			this.newButtons[index] = new Element('span', {
				'role' : 'checkbox',
				'class' : this.options.classPrefix,
				'text' : button.getNext('span').get('text'),
				'tabindex' : '0'

			}).inject(button, 'after');
			this.newButtons[index].getNext('span').dispose();
			button.setStyles({
				'visibility' : 'hidden',
				'display' : 'none'
			});
			if(!button.getProperty('disabled')) {
				if(button.get('checked')) {
					this.newButtons[index].style.backgroundPosition = "0 -" + this.options.buttonHeight * 2 + "px";

					this.newButtons[index].setProperty('aria-checked', true);
				}
				this.newButtons[index].addEvents({
					mousedown : this.push.bind(this),
					mouseup : function() {
						this.check(this.newButtons[index]);
					}.bind(this),
					mouseout : this.reset.bind(this),
					keydown : function(e) {
						switch (e.key) {
							case 'space':
								e.stop();
								this.check(this.newButtons[index]);
								break;
							case 'enter':
								e.stop();
								this.check(this.newButtons[index]);
								break;
						}
					}.bind(this)
				});
			}
		}.bind(this));
	},
	indexDecrease : function(index) {
		if(index == 0) {
			return this.newButtons.getLast();
		} else {
			return this.newButtons[index - 1];
		}
	},
	indexIncrease : function(index) {
		if(index == this.newButtons.indexOf(this.newButtons.getLast())) {
			return this.newButtons[0];
		} else {
			return this.newButtons[index + 1];
		}
	},
	reset : function(event) {
		var button = event.target.getPrevious();
		if(button.get('checked')) {
			event.target.style.backgroundPosition = "0 -" + this.options.buttonHeight * 2 + "px";
		} else {
			event.target.style.backgroundPosition = "0 -" + this.options.buttonHeight * 0 + "px";
		}
	},
	push : function(event) {
		var button = event.target.getPrevious();
		if(button.get('checked')) {
			event.target.style.backgroundPosition = "0 -" + this.options.buttonHeight * 3 + "px";
		} else {
			event.target.style.backgroundPosition = "0 -" + this.options.buttonHeight + "px";
		}
	},
	check : function(newButton) {
		var button = newButton.getPrevious();
		if(button.get('checked')) {
			newButton.style.backgroundPosition = "0 -" + this.options.buttonHeight * 0 + "px";
			button.set('checked', false);
			newButton.setProperty('aria-checked', false);
		} else {
			newButton.style.backgroundPosition = "0 -" + this.options.buttonHeight * 2 + "px";
			button.set('checked', true);
			newButton.setProperty('aria-checked', true);

		}
	}
});
