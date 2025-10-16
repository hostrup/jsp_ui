sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("jsp.prototype.controller.App", {
        onInit: function () {
            // Modellen 'planModel' fra manifest.json bliver automatisk sat på viewet.
            // Hvis du ville sætte den manuelt, ville det se sådan ud:
            // var oModel = new JSONModel("data/planData.json");
            // this.getView().setModel(oModel, "planModel");
        }
    });
});