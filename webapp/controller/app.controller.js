sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("zcg_user.controller.app", {
		onShowHello : function () {
         // show a native JavaScript alert
         MessageToast.show("Hello 陈果!");
      }
	});
});