sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("trainingjsui5project.controller.ProductDetail", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("RouteProductDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sProductID = oEvent.getParameter("arguments").ProductID;
            
            this.getView().bindElement({
                path: "/Products(" + sProductID + ")",
                parameters: {
                    expand: "Category,Supplier"
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
                this.getRouter().getTargets().display("TargetProducts");
            }
        },

        onNavBackPress: function () {
            this.onNavBack("RouteProducts");
        }
    });
});
