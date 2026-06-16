sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
  "use strict";

  return Controller.extend("trainingjsui5project.controller.BaseController", {
    /**
     * Convenience method for accessing the router.
     * @public
     * @returns {sap.ui.core.routing.Router} the router for this component
     */
    getRouter: function () {
      return UIComponent.getRouterFor(this);
    },

    /**
     * Convenience method for getting the view model by name.
     * @public
     * @param {string} [sName] the model name
     * @returns {sap.ui.model.Model} the model instance
     */
    getModel: function (sName) {
      return this.getView().getModel(sName);
    },

    /**
     * Convenience method for setting the view model.
     * @public
     * @param {sap.ui.model.Model} oModel the model instance
     * @param {string} sName the model name
     * @returns {sap.ui.core.mvc.View} the view instance
     */
    setModel: function (oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },

    /**
     * Convenience method for getting the resource bundle.
     * @public
     * @returns {sap.base.i18n.ResourceBundle} the resource bundle of the component
     */
    getResourceBundle: function () {
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },

    /**
     * Navigates back in the browser history, if the entry was created by this app.
     * If not, it navigates to a routing target with route name provided as fallback.
     * @public
     * @param {string} sFallbackRoute The route name to navigate to if there is no history.
     */
    onNavBack: function (sFallbackRoute) {
      var oHistory, sPreviousHash;

      oHistory = History.getInstance();
      sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo(sFallbackRoute, {}, true /*no history*/);
      }
    }
  });
});
