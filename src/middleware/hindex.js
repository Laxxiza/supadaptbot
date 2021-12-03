const { Composer } = require('telegraf');

const composer = new Composer();

//! я думаю нужна проверка на то, кем сейчас является польз

// const registerHandler = require('./register');
// const activityHandler = require('./activity');

// composer.use(registerHandler);
// composer.use(activityHandler);

module.exports = composer;