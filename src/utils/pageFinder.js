function findById(pages, finder) {
    for(let page in pages){
        console.log(page);
        if(page == finder) return pages[page];
    }
}

function findByPath(pages, finder) {
    for(let page in pages){
        console.log(page);
        if(page == finder) return pages[page];
    }
}

module.exports = { findById, findByPath };