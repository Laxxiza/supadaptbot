const { Telegraf, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const { scenesv2: { accaunts: { pages: { ratingDrivers } } } } = require("../../../text/main.json");
const { getKeyboards } = require("../../../utils/keyboards");

const ratingScene = new BaseScene('ratingScene');

let startLabel = ratingDrivers.label;
let keyboards = ratingDrivers.keyboards;
let replyKeyboard = getKeyboards(keyboards, false, true);

ratingScene.enter(async (ctx) => {
    console.log("Enter from rating");
    await ctx.editMessageText(startLabel, replyKeyboard);
    //console.log(replyKeyboard)
});

ratingScene.leave(async (ctx) => {
    console.log("Leave from rating");
})

module.exports = ratingScene;