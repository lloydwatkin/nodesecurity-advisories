var walk         = require('walk');
var fs           = require('fs');
var metamarked   = require('meta-marked');
var path         = require('path');

var settings = {
    rootDir: 'advisories',
    title: 'Advisories'
};

var module_index = {};
var options = {
    followLinks: false
};

function getModuleIndex(cb) {
    var walker = walk.walk(settings.rootDir, options);

    walker.on('file', function (root, fileStats, next) {
        
        if (fileStats.name === 'template.md') {
            console.log('skipping template.md');
            return next();
        }

        if (root === settings.rootDir) {
            if (/\.md$/.test(fileStats.name)) {
                var filename = fileStats.name.replace(/\.md$/, '');
                var meta = metamarked(fs.readFileSync(path.resolve(settings.rootDir, fileStats.name), 'utf8'));
                meta.meta.url = filename;

                // Setup module_index index o_O
                if (!module_index[meta.meta.module_name]) {
                    module_index[meta.meta.module_name] = {};
                }
                module_index[meta.meta.module_name][meta.meta.publish_date] = meta.meta;
            }
        }
        next();
    });

    walker.on('errors', function (root, nodeStatsArray, next) {
        cb(new Error('Error occured: ' + nodeStatsArray), null);
        next();
    });

    walker.on('end', function () {
        cb(null, module_index);
    });
}

module.exports = getModuleIndex;