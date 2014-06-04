var path = require('path');

module.exports = function(file) {
    var bundle = require(path.resolve(file));
    var bh = require(path.resolve(bundle.bh));

    return function render(bemjson, ctx) {
        ctx = ctx || {};
        ctx.static = { css: bundle.css, js: bundle.js };

        if (process.env.NODE_ENV === 'development')
            ctx.static.js.unshift({ elem: 'js', url: '/jquery-1.11.1.js' });

        return bh.apply(bemjson(ctx));
    }
};
