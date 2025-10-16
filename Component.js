sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("jsp.prototype.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // Kald init-funktionen fra forælderen
         UIComponent.prototype.init.apply(this, arguments);

         // Opret routeren (god praksis)
         // this.getRouter().initialize();
      }
   });
});