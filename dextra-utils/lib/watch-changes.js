const chokidar = require('chokidar');
const exec = require('child_process').exec;
const watcher = chokidar.watch('./src/**/*.*', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
});

const build = () => {
    console.log("Building worker...")
    exec('yarn workspace dextra-utils build-worker && yarn workspace dextra-utils build')
}

watcher.on('add', build);
watcher.on('change', build);