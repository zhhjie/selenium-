/* var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('https://www.baidu.com');
var until = webdriver.until;
var By = webdriver.By;
driver.wait(until.elementLocated(By.id('kw'),10000))
driver.findElement(By.id('kw')).sendKeys('selenium');
driver.findElement(By.id('su')).click();
driver.executeScript('document.getElementById("kw").value="value"');
driver.switchTo().alert().then(function(alert){
    return alert.dismiss();
},function(){
    //没有检测弹出框执行
    driver.quit();
})
//切换会主页
driver.switchTo().defaultContent();
//网页最大化
driver.manage().window().maximize();
driver.quit(); */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();
console.log(driver.getAllWindowHandles());
driver.wait(until.titleIs('webdriver_百度搜索'), 1000).catch(function(e){
    console.log("catch error")
});
console.log("test");

// driver.quit();
