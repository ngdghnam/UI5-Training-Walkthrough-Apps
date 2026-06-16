sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("trainingjsui5project.controller.Products", {
    onInit() {},

    _onRoutematched() {
      let oModel = this.getView().getModel();
    },
  });
});
