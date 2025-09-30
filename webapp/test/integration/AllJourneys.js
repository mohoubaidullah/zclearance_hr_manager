/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"HR/zclearance_hr_manager/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"HR/zclearance_hr_manager/test/integration/pages/HRM",
	"HR/zclearance_hr_manager/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "HR.zclearance_hr_manager.view.",
		autoWait: true
	});
});