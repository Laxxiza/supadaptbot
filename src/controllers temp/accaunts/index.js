const { Telegraf, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const { scenesv2: { accaunts } } = require("../../text/main.json");
const { getKeyboards } = require("../../utils/keyboards");

const activityScene = require('./activity');
const priorityScene = require('./priority');
const ratingScene = require('./ratingDrivers');
const accauntsScene = new BaseScene('accauntsScene');

const stage = new Stage([
    activityScene,
    priorityScene,
    ratingScene
]);

accauntsScene.use(stage.middleware());

let startLabel = accaunts.label;
let keyboards = accaunts.keyboards;
let replyKeyboard = getKeyboards(keyboards);

accauntsScene.enter(async (ctx) => {
    console.log("Enter from accaunts");
    await ctx.editMessageText(startLabel, replyKeyboard);
});

accauntsScene.action(/activity/, async(ctx) => {
    ctx.scene.enter('activityScene');
    await ctx.answerCbQuery();
});

accauntsScene.action(/priority/, async(ctx) => {
    ctx.scene.enter('priorityScene');
    await ctx.answerCbQuery();
});

accauntsScene.action(/ratingDrivers/, async(ctx) => {
    ctx.scene.enter('ratingScene');
    await ctx.answerCbQuery();
});

accauntsScene.leave(async (ctx) => {
    console.log("Leave from accaunts");
});

module.exports = accauntsScene;