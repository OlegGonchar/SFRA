var sitePreferences = require('dw/system/Site').getCurrent().getPreferences();
var DAY_IN_MILLISECONDS = 86400000;

function WishlistUtils() {};

WishlistUtils.prototype.isItemExpired = function (item) {
    return !this.daysBeforeExpiration(item);
};

WishlistUtils.prototype.getTimeBeforeExpiration = function () {
    return sitePreferences.getCustom()['wishlistItemExpiration'];
};

WishlistUtils.prototype.daysBeforeExpiration = function (item) {
    var lastModified = new Date(item.lastModified);
    var expirationDate = new Date().setDate(lastModified.getDate() + this.getTimeBeforeExpiration());

    return Math.ceil((expirationDate - new Date()) / DAY_IN_MILLISECONDS).toFixed(0);
};


module.exports = new WishlistUtils();
