sap.ui.define([
  "./BaseController"
], (BaseController) => {
  "use strict";

  return BaseController.extend("trainingjsui5project.controller.App", {
      onInit() {
      },

      onSideNavButtonPress: function () {
          var oToolPage = this.byId("toolPage");
          var bSideExpanded = oToolPage.getSideExpanded();
          
          oToolPage.setSideExpanded(!bSideExpanded);
      },

      onItemSelect: function (oEvent) {
          var oItem = oEvent.getParameter("item");
          var sKey = oItem.getKey();
          var oToolPage = this.byId("toolPage");
          
          if (sKey === "ExpandSidebar") {
              oToolPage.setSideExpanded(true);
          } else if (sKey === "CollapseSidebar") {
              oToolPage.setSideExpanded(false);
          } else if (sKey) {
              this.getRouter().navTo(sKey);
          }
      }
  });
});