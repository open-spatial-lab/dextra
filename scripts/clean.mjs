#! zx
// remove all node_modules folders
await $`find . -name node_modules -type d -prune -exec rm -rf '{}' +`
// remove all .DS_Store files
await $`find . -name .DS_Store -type f -delete`
//  remove all build folders
await $`find . -name build -type d -prune -exec rm -rf '{}' +`
// remove all dist folders
await $`find . -name dist -type d -prune -exec rm -rf '{}' +`