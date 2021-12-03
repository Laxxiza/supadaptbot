const { getKeyboards } = require("../../utils/keyboards");
const { parsePath } = require('../../utils/parsePath');
const { defaultPhrase } = require("../../text/main");

function startCommand() {
    return async function (ctx) {
        let pagePath = [];
        let strPath = parsePath(pagePath);

        try {
            const scene = require(`../../pages/${strPath}/index.json`);

            let sceneLabel = scene.label;
            let sceneKeySettings = scene.buttons?.settings;
            let sceneKeyboards = scene.buttons?.keyboards;
            let replyKeyboard = getKeyboards(sceneKeyboards, sceneKeySettings?.backPage, sceneKeySettings?.mainPage);

            await ctx.reply(sceneLabel, replyKeyboard);
            ctx.session.pagePath = pagePath;
        } catch (e) {
            if (e) {
                console.log(e, "error");
                let replyKeyboard = getKeyboards(null, false, true);
                ctx.reply(defaultPhrase.error, replyKeyboard);
            }
        }
        
    }
}

module.exports = startCommand;