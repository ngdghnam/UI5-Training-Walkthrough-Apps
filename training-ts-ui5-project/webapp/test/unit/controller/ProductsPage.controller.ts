/*global QUnit*/
import Controller from "trainingtsui5project/controller/Products.controller";

QUnit.module("Products Controller");

QUnit.test("I should test the Products controller", function (assert: Assert) {
	const oAppController = new Controller("Products");
	oAppController.onInit();
	assert.ok(oAppController);
});