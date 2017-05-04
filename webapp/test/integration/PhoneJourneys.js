jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"NewTicket/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"NewTicket/test/integration/pages/App",
	"NewTicket/test/integration/pages/Browser",
	"NewTicket/test/integration/pages/Master",
	"NewTicket/test/integration/pages/Detail",
	"NewTicket/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "NewTicket.view."
	});

	sap.ui.require([
		"NewTicket/test/integration/NavigationJourneyPhone",
		"NewTicket/test/integration/NotFoundJourneyPhone",
		"NewTicket/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});