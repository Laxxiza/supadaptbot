function parsePath(path){
    console.log(path);
    let strPath = "";
    path.forEach(element => {
        strPath += element + "/";
    });
    return strPath;
}

function parsePathBack(path){
    let strPath = "";
    path.forEach(element => {
        strPath += element + "/";
    });
    return strPath;
}

module.exports = { parsePath, parsePathBack };