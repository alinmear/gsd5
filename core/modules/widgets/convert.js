/*\
title: $:/core/modules/widgets/convert.js
type: application/javascript
module-type: widget

Convert widget

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget;

var ConvertWidget = function(parseTreeNode,options) {
	this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
ConvertWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
ConvertWidget.prototype.render = function(parent,nextSibling) {
	var self = this;
	// Remember parent
	this.parentDomNode = parent;
	// Compute attributes and execute state
	this.computeAttributes();
	this.execute();
	// Create element
	var domNode = this.document.createElement("button");
	// Assign classes
	var classes = this["class"].split(" ") || [];
	if(this.selectedClass) {
		if(this.set && this.setTo && this.isSelected()) {
			$tw.utils.pushTop(classes,this.selectedClass.split(" "));
		}
		if(this.popup && this.isPoppedUp()) {
			$tw.utils.pushTop(classes,this.selectedClass.split(" "));
		}
	}
	domNode.className = classes.join(" ");
	// Assign other attributes
	if(this.style) {
		domNode.setAttribute("style",this.style);
	}
	if(this.tooltip) {
		domNode.setAttribute("title",this.tooltip);
	}
	if(this["aria-label"]) {
		domNode.setAttribute("aria-label",this["aria-label"]);
	}
	// Add a click event handler
	domNode.addEventListener("click",function (event) {
		self.handleClickEvent();
	});
	// Insert element
	parent.insertBefore(domNode,nextSibling);
	this.renderChildren(domNode,null);
	this.domNodes.push(domNode);
};

ConvertWidget.prototype.handleClickEvent = function() {
	var tiddler = this.wiki.getTiddler(this.to);
	// Check if tiddler is an action.
	if(tiddler.fields.gsd_type === "action") {
		// Change next actions to active projects, others to future.
		if(tiddler.fields.gsd_status === "next") {
			this.wiki.setText(this.to, "gsd_status", null, "active");
		} else {
			this.wiki.setText(this.to, "gsd_status", null, "future");
		}
		// Remove previous dependencies.
		if(tiddler.fields.gsd_prereq) {
			this.wiki.setText(this.to, "gsd_prereq", null, "");
		}
		// Finally, change the type to project.
		this.wiki.setText(this.to, "gsd_type", null, "project");
	}
};

/*
Compute the internal state of the widget
*/
ConvertWidget.prototype.execute = function() {
	// Get attributes
	this.to = this.getAttribute("to",this.getVariable("currentTiddler"));
	this["class"] = this.getAttribute("class","");
	this["aria-label"] = this.getAttribute("aria-label");
	this.tooltip = this.getAttribute("tooltip");
	this.style = this.getAttribute("style");
	this.selectedClass = this.getAttribute("selectedClass");
	// Make child widgets
	this.makeChildWidgets();
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
ConvertWidget.prototype.refresh = function(changedTiddlers) {
	var changedAttributes = this.computeAttributes();
	if(changedAttributes.to || changedAttributes["class"] || changedAttributes.selectedClass || changedAttributes.style) {
		this.refreshSelf();
		return true;
	}
	return this.refreshChildren(changedTiddlers);
};

exports.convert = ConvertWidget;

})();