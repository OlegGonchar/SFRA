'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    processInclude(require('base/product/detail'));
    processInclude(require('../../../../../../../plugin_giftregistry/cartridges/plugin_giftregistry/cartridge/client/default/js/product/giftRegistry'));
    processInclude(require('../../../../../../../plugin_wishlists/cartridges/plugin_wishlists/cartridge/client/default/js/product/wishlist'));
});
