const { Telegraf, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const { scenesv2: { accaunts: { pages: { activity: { pages: { amnistyActivity } } } } } } = require("../../../../text/main.json");
const { getKeyboards } = require("../../../../utils/keyboards");

const amnistyScene = new BaseScene('amnistyScene');

console.log("123");

//let startLabel = amnistyActivity.label;
//let keyboards = amnistyActivity.keyboards; 
//let replyKeyboard = getKeyboards(keyboards, true, true);

amnistyScene.enter(async (ctx) => {
    console.log("Enter from amnisty");
    await ctx.reply("startLabel");
});

amnistyScene.action(/goBack/, async(ctx) => {

});

amnistyScene.action(/mainPage/, async(ctx) => {
    
});

amnistyScene.leave(async (ctx) => {
    console.log("Leave from amnisty");
})

module.exports = amnistyScene;