const { Telegraf,  Markup } = require("telegraf");
const { serviceKeyboards } = require("../text/main");

function getKeyboards(keyboards, back = false, main = false){
    const buttons = keyboards ? parseKeyboards(keyboards) : [];
    if(back){
        let text = serviceKeyboards.back.text;
        let callback = "backPage";
        buttons.push([Markup.button.callback(text, callback)]);
    }
    if(main){
        let text = serviceKeyboards.main.text;
        let callback = "mainPage";
        buttons.push([Markup.button.callback(text, callback)]);
    }
    const mainKeyboard = Markup.inlineKeyboard(buttons);
    return mainKeyboard;
}

function parseKeyboards(keys){
    let keysArray = [];
    keys.forEach(elem => {
        let button = [];
        for (const [key, val] of Object.entries(elem)) {
            if(val.url){
                button.push(Markup.button.url(val.text, val.url));
            }
            else {
                button.push(Markup.button.callback(val.text, key));
            }
        }
        keysArray.push(button);
    });
    return keysArray;
}

module.exports = { getKeyboards };