'use strict'

var BaseAttributeValue = module.superModule;
var wishlistUtils = require('app_onboarding/cartridge/utils/wishlistUtils');
var Transaction = require('dw/system/Transaction');

function productListItem(productListItemObject) {
    BaseAttributeValue.call(this, productListItemObject);
    this.productListItem.daysToExpire = wishlistUtils.daysBeforeExpiration(productListItemObject).toFixed(0);

    if (wishlistUtils.isItemExpired(productListItemObject)) {
        this.productListItem = null;
        Transaction.wrap(function() {
            productListItemObject.list.removeItem(productListItemObject);
        })
    }
}

module.exports = productListItem;
