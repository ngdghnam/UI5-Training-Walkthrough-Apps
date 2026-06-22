sap.ui.define([
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "../model/formatter"
], function (BaseController, Filter, FilterOperator, formatter) {
  "use strict";

  return BaseController.extend("trainingjsui5project.controller.Products", {
    formatter: formatter,
    onInit: function () {},

    _onRoutematched: function () {
      let oModel = this.getView().getModel();
    },

    onSearch: function (oEvent) {
      var aFilters = [];
      
      var sProductID = this.byId("filterProductID").getValue();
      if (sProductID) {
        aFilters.push(new Filter("ProductID", FilterOperator.EQ, sProductID));
      }

      var sProductName = this.byId("filterProductName").getValue();
      if (sProductName) {
        aFilters.push(new Filter("ProductName", FilterOperator.Contains, sProductName));
      }

      var sQuantity = this.byId("filterQuantityPerUnit").getValue();
      if (sQuantity) {
        aFilters.push(new Filter("QuantityPerUnit", FilterOperator.Contains, sQuantity));
      }

      var sPrice = this.byId("filterUnitPrice").getValue();
      if (sPrice) {
        aFilters.push(new Filter("UnitPrice", FilterOperator.EQ, sPrice));
      }

      var sStock = this.byId("filterUnitsInStock").getValue();
      if (sStock) {
        aFilters.push(new Filter("UnitsInStock", FilterOperator.EQ, sStock));
      }

      var oTable = this.byId("ProductTable");
      var oBinding = oTable.getBinding("items");
      oBinding.filter(aFilters, "Application");
    },

    onClear: function () {
      this.byId("filterProductID").setValue("");
      this.byId("filterProductName").setValue("");
      this.byId("filterQuantityPerUnit").setValue("");
      this.byId("filterUnitPrice").setValue("");
      this.byId("filterUnitsInStock").setValue("");

      var oTable = this.byId("ProductTable");
      var oBinding = oTable.getBinding("items");
      oBinding.filter([], "Application");
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
    },

    onUpdateFinished: function (oEvent) {
      var sTitle = "All Items";
      var oTable = oEvent.getSource();
      var iTotalItems = oEvent.getParameter("total");
      
      if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
        sTitle = "All Items (" + iTotalItems + ")";
      }
      this.byId("tableHeader").setText(sTitle);
    },

    onExport: function () {
      var aCols, oRowBinding, oSettings, oSheet, oTable;

      if (!this._oTable) {
        this._oTable = this.byId("ProductTable");
      }
      oTable = this._oTable;
      oRowBinding = oTable.getBinding("items");

      aCols = [
        { label: "Product ID", property: "ProductID" },
        { label: "Product Name", property: "ProductName" },
        { label: "Quantity Per Unit", property: "QuantityPerUnit" },
        { label: "Unit Price", property: "UnitPrice", type: "number" },
        { label: "Units In Stock", property: "UnitsInStock", type: "number" },
        { label: "Units On Order", property: "UnitsOnOrder", type: "number" },
        { label: "Reorder Level", property: "ReorderLevel", type: "number" }
      ];

      oSettings = {
        workbook: {
          columns: aCols,
          hierarchyLevel: "Level"
        },
        dataSource: oRowBinding,
        fileName: "Products.xlsx",
        worker: false 
      };

      sap.ui.require(["sap/ui/export/Spreadsheet"], function (Spreadsheet) {
        oSheet = new Spreadsheet(oSettings);
        oSheet.build().finally(function () {
          oSheet.destroy();
        });
      });
    },

    onBackToTop: function () {
      var oTable = this.byId("ProductTable");
      if (oTable && oTable.getDomRef()) {
        oTable.getDomRef().scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
