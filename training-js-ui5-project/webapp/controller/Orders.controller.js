sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("trainingjsui5project.controller.Orders", {
        onInit: function () {
        },

        onNavToOrderDetail: function (oEvent) {
            var oItem = oEvent.getSource();
            var oBindingContext = oItem.getBindingContext();
            var sOrderID = oBindingContext.getProperty("OrderID");

            this.getRouter().navTo("RouteOrderDetail", {
                OrderID: sOrderID
            });
        }
    });
});
