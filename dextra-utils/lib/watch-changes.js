const chokidar = require('chokidar');
const exec = require('child_process').exec;
const watcher = chokidar.watch('./src/**/*.*', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
});

const build = () => {
    console.log("Building worker...")
    exec('pnpm --filter dextra-utils build-analysis && pnpm --filter dextra-utils build-state  && pnpm --filter dextra-utils build && pnpm --filter dextra-utils copy-to-components')
}

watcher.on('add', build);
watcher.on('change', build);