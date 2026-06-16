sap.ui.define([
    "./BaseController"
], function (BaseController) {
  "use strict";

  return BaseController.extend("trainingjsui5project.controller.Products", {
    onInit: function () {},

    _onRoutematched: function () {
      let oModel = this.getView().getModel();
    },

    onNavToDetailPress: function (oEvent) {
      // Get the product item that was pressed
      var oItem = oEvent.getSource();
      var oBindingContext = oItem.getBindingContext();
      
      // Get the ProductID from the context
      var sProductID = oBindingContext.getProperty("ProductID");

      // Navigate to detail route
      this.getRouter().navTo("RouteProductDetail", {
        ProductID: sProductID
      });
    }
  });
});
