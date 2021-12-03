const { Telegraf, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const { scenesv2: { accaunts: { pages: { priority } } } } = require("../../../text/main.json");
const { getKeyboards } = require("../../../utils/keyboards");

const priorityScene = new BaseScene('priorityScene');

let startLabel = priority.label;
let keyboards = priority.keyboards;
let replyKeyboard = getKeyboards(keyboards, false, true);

priorityScene.enter(async (ctx) => {
    console.log("Enter from priority");
    await ctx.editMessageText(startLabel, replyKeyboard);
    //console.log(replyKeyboard)
});

priorityScene.leave(async (ctx) => {
    console.log("Leave from priority");
})

module.exports = priorityScene;