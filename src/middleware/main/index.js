const { getKeyboards } = require("../../utils/keyboards");
const { parsePath } = require('../../utils/parsePath');
const { defaultPhrase } = require("../../text/main");

function mainCommand(back, main) {
    return async function (ctx) {
        let actionNamePage = ctx.match?.[0] || ctx.message.text.slice(1);
        console.log(actionNamePage);
        let pagePath = main ? [] : [...ctx.session.pagePath];
        main || back ? pagePath.pop() : pagePath.push(actionNamePage);
        let strPath = parsePath(pagePath);

        try {
            const scene = require(`../../pages/${strPath}/index.json`);

            let sceneLabel = scene.label;
            let sceneKeySettings = scene.buttons?.settings;
            let sceneKeyboards = scene.buttons?.keyboards;
            let replyKeyboard = getKeyboards(sceneKeyboards, sceneKeySettings?.backPage, sceneKeySettings?.mainPage);

            await ctx.editMessageText(sceneLabel, replyKeyboard);
            ctx.session.pagePath = pagePath;
            await ctx.answerCbQuery();
        } catch (e) {
            if (e) {
                console.log(e, "error");
                let replyKeyboard = getKeyboards(null, false, true);
                ctx.editMessageText(defaultPhrase.error, replyKeyboard);
            }
        }
        
    }
}

module.exports = mainCommand;