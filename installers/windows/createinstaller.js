const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
     .then(createWindowsInstaller)
     .catch((error) => {
     console.error(error.message || error)
     process.exit(1)
 })

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'release-builds')

    return Promise.resolve({
       appDirectory: path.join(outPath, 'Headlines-win32-ia32/'),
       authors: 'Med Zed INC',
       noMsi: true,
       outputDirectory: path.join(outPath, 'windows-installer'),
       exe: 'Headlines.exe',
       setupExe: 'Headlines.exe',
       setupIcon: path.join(rootPath, 'img', 'News-icon.ico'),
       loadingGif: path.join(rootPath, 'img', 'News-icon.gif')
   })
}
