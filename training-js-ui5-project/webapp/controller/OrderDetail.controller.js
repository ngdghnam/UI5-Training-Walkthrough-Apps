sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("trainingjsui5project.controller.OrderDetail", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("RouteOrderDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sOrderID = oEvent.getParameter("arguments").OrderID;
            
            this.getView().bindElement({
                path: "/Orders(" + sOrderID + ")",
                parameters: {
                    expand: "Customer,Order_Details,Order_Details/Product"
                },
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function () {
                        this.getView().setBusy(true);
                    }.bind(this),
                    dataReceived: function () {
                        this.getView().setBusy(false);
                    }.bind(this)
                }
            });
        },

        _onBindingChange: function () {
            // No data for the binding
            var oElementBinding = this.getView().getElementBinding();
            if (oElementBinding && !oElementBinding.getBoundContext()) {
                this.getRouter().getTargets().display("TargetOrders");
            }
        },

        onNavBackPress: function () {
            this.onNavBack("RouteOrders");
        }
    });
});
