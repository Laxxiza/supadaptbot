const { Telegraf, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const { scenesv2: { start } } = require("../../text/main");
const { getKeyboards } = require("../../utils/keyboards");

const startScene = new BaseScene('startScene');
let startLabel = start.label;
let keyboards = start.keyboards; 
let replyKeyboard = getKeyboards(keyboards);

startScene.enter(async (ctx) => {
    console.log("Enter from start");
    await ctx.reply(startLabel, replyKeyboard);
});

startScene.leave(async (ctx) => {
    console.log("Leave from start");
})

module.exports = startScene;