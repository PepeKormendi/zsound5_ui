sap.ui.define(["sap/ui/test/Opa5","sap/ui/test/actions/Press","sap/ui/test/matchers/PropertyStrictEquals","./Common"],function(e,t,s,n){"use strict";var i="Object";e.createPageObjects({onTheObjectPage:{baseClass:n,actions:Object.assign({iPressTheBackButt+
on:function(){return this.waitFor({id:"page",viewName:i,actions:new t,errorMessage:"Did not find the nav button on object page"})}}),assertions:Object.assign({iShouldSeeTheRememberedObject:function(){return this.waitFor({success:function(){var t=this.get+
Context().currentItem.bindingPath;this.waitFor({id:"page",viewName:i,matchers:function(e){return e.getBindingContext()&&e.getBindingContext().getPath()===t},success:function(s){e.assert.strictEqual(s.getBindingContext().getPath(),t,"was on the remembered+
 detail page")},errorMessage:"Remembered object "+t+" is not shown"})}})}})}})});                                                                                                                                                                              