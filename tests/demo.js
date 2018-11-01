const accountConfig = {
    username: 'admin',
    password: 'admin',
}
module.exports = {
    'login test': function (client) {
        client.url('http://192.168.36.93:18802/cmt/view/index.html#/login').maximizeWindow()
        // client.expect.element('body').to.be.present.before(3000);
        .waitForElementVisible('body',3000).pause(2000);        
        client.expect.element('#loginForm .submit').to.be.visible;

        client.setValue('.user-wrap .user', accountConfig.username)
        client.setValue('.password-wrap .password', accountConfig.password)
        client.click('#loginForm .submit');

        //等待和检测页面重新加载
        client.frameParent();
        client.pause(4000);
        client.expect.element('body').to.be.present.before(3000);
        
        client.expect.element('.header-right').to.be.visible;
        client.pause(2000)
        client.moveToElement('.header-right', 5, 5);
        client.click('.header-right').pause(2000);
        // client.expect.element('#headerDropDown').to.be.visible;
        
        client.waitForElementVisible('#headerDropDown',1000)
        // client.assert.attributeContains('#headerDropDown li', 'ng-click', 'editInfo()');
        // client.click('li[ng-click="editInfo()"]')

        .click('li[ng-click="logout()"]')
        // client.elements('css selector','#headerDropDown li',(res)=>{
        //     console.log(res)
        // })
        client.pause(5000)
        client.end();
    }
}