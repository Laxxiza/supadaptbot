const { Telegraf, session, Markup, Scenes: { BaseScene, Stage } } = require("telegraf");
const data = require("./data");

const { startCommand, mainCommand } = require('./middleware');

//const mainFolder = "pages";

const bot = new Telegraf(data.token);
// const stage = new Stage([
//   startScene
// ])

bot.use(session());
//bot.use(stage.middleware());

bot.use((ctx, next) => {
    if(!ctx.session) {
        ctx.session = new Map();
    }
    if(!ctx.session.pagePath){
        ctx.session.pagePath = [];
    }
    //console.log(ctx, ctx.from.username, ctx.from.first_name, ctx.from.last_name);

    next();
})

bot.command('start', startCommand());

bot.action(/backPage/, mainCommand(true));

bot.action(/mainPage/, mainCommand(false, true));

bot.action(/.+/, mainCommand());

bot.launch();