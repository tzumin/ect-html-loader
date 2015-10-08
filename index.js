var ect = require('ect')
var loaderUtils = require("loader-utils")

module.exports = function(source, map) {
    this.cacheable && this.cacheable(true)
    var query = loaderUtils.parseQuery(this.query)
    var config = {
            open: query.open || '<%',
            close: query.close || '%>',
            watch: query.watch || false,
            cache: query.cache || false,
            root: query.root || this.context,
            ext:  query.ext || ''
        }
    var data = query.data || {}
    var ectRender = ect(config)
    return  'module.exports = ' + JSON.stringify(ectRender.render(this.resourcePath, data));
}
