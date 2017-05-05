jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TICKETMYSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"NewTicket/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NewTicket/test/integration/pages/App",
	"NewTicket/test/integration/pages/Browser",
	"NewTicket/test/integration/pages/Master",
	"NewTicket/test/integration/pages/Detail",
	"NewTicket/test/integration/pages/Create",
	"NewTicket/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NewTicket.view."
	});

	sap.ui.require([
		"NewTicket/test/integration/MasterJourney",
		"NewTicket/test/integration/NavigationJourney",
		"NewTicket/test/integration/NotFoundJourney",
		"NewTicket/test/integration/BusyJourney",
		"NewTicket/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});