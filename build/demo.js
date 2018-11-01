module.exports = {
    'Find the answer.': function (client) {
        // TODO...
        const searchInput = '#sb_form_q';
        const searchBtn = '#sb_form_go';
        const question = 'what is microsoft';

        client.url('http://bing.com').maximizeWindow();
        client.expect.element('body').to.be.present;
        client.expect.element(searchInput).to.be.visible;
        client.pause(2000)

        client.setValue(searchInput,question);
        client.click(searchBtn);
        client.pause(2000);

        client.expect.element('body').to.be.present;
        client.saveScreenshot('reports/answers.png');
        client.end();
    }
}