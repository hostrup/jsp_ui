sap.ui.define([
   "sap/ui/core/UIComponent"
], function (UIComponent) {
   "use strict";
   return UIComponent.extend("jsp.prototype.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // Kald init-funktionen fra forælderen
         UIComponent.prototype.init.apply(this, arguments);

         // Initialiser routeren
         this.getRouter().initialize();
      }
   });
});