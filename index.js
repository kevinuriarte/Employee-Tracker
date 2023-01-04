const MainMenu = require('./cli-prompts/menu');

async function init() {
    const menu = new NewMenu();
    await menu.run();
    return
 };

init().then(() => process.exit());