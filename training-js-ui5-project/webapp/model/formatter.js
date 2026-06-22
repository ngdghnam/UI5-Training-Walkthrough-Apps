sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/format/NumberFormat"],
  function (ManagedObject, NumberFormat) {
    "use strict";

    return {
      priceState: function (iPrice) {
        if (!iPrice) {
          return "None";
        }
        var fPrice = parseFloat(iPrice);
        if (fPrice < 20) {
          return "Warning"; // Yellow
        } else if (fPrice < 50) {
          return "Success"; // Green
        } else if (fPrice <= 55) {
          return "Information"; // Blue
        } else {
          return "Error"; // Red
        }
      },
      stockState: function (iStock) {
        if (iStock === null || iStock === undefined) {
          return "None";
        }
        var fStock = parseInt(iStock, 10);
        if (fStock < 10) {
          return "Error"; // Red
        } else if (fStock < 30) {
          return "Warning"; // Yellow
        } else {
          return "Success"; // Green
        }
      },
      orderState: function (iOrder) {
        if (iOrder === null || iOrder === undefined) {
          return "None";
        }
        var fOrder = parseInt(iOrder, 10);
        if (fOrder < 1) {
          return "Error"; // Red
        } else {
          return "Success"; // Green
        }
      }
    };
  }
);
