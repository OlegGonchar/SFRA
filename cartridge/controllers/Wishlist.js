var server = require('server');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var productListHelper = require('*/cartridge/scripts/productList/productListHelpers');
var wishlistUtils = require('app_onboarding/cartridge/utils/wishlistUtils');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');


var page = module.superModule;
server.extend(page);

server.append('Show', consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function (req, res, next) {
    var viewData = res.getViewData();
    var items = viewData.wishlist.items;
    var length = items.length;
    for (var i = 0; i < length; i++ ) {
        var item = items[i];

        if (wishlistUtils.isItemExpired(item)){
            productListHelper.removeItem(req.currentCustomer.raw, item.pid, {req: req, type: 10 });
        }
    }
    res.setViewData(viewData);

    next();
});

module.exports = server.exports();
