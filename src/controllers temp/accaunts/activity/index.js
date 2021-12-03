const { Telegraf, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const { scenesv2: { accaunts: { pages: { activity } } } } = require("../../../text/main.json");
const { getKeyboards } = require("../../../utils/keyboards");

//const amnistyScene = require('./amnisty');
//const infoScene = require('./info');

const activityScene = new BaseScene('activityScene');

// const stage = new Stage([
//     amnistyScene
// ]);

// activityScene.use(stage.middleware());

let startLabel = activity.label;
let keyboards = activity.keyboards; 
let replyKeyboard = getKeyboards(keyboards, false, true);

activityScene.enter(async (ctx) => {
    console.log(ctx, "act");
    console.log("Enter from activity");
    await ctx.editMessageText(startLabel, replyKeyboard);
    //console.log(replyKeyboard)
});

activityScene.action(/amnistyActivity/, async(ctx) => {
    console.log('amnistyActivity')
    ctx.scene.enter('amnistyScene');
    await ctx.answerCbQuery();
});

activityScene.action(/.+/, async(ctx) => {
    console.log("test");
});

activityScene.leave(async (ctx) => {
    console.log("Leave from activity");
})

module.exports = activityScene;