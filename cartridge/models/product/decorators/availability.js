'use strict';

var base = module.superModule;

module.exports = function (object, quantity, minOrderQuantity, availabilityModel) {
    // Invoke the availability model on the base
    base.call(this, object, quantity, minOrderQuantity, availabilityModel);

    // Define a new property in the model with ATS as its value
    Object.defineProperty(object, 'ats', {
        enumerable: true,
        value: availabilityModel.inventoryRecord && availabilityModel.inventoryRecord.ATS.value
    });
};
