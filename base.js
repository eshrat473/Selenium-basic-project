console.log('Base Class');
import {Browser, Builder, By} from 'selenium-webdriver';
class Base {
constructor() {
this.driver = new Builder()
.forBrowser(Browser.CHROME)
.build();
}
// browser open
async browserOpen(url) {
console.log('Browser Open');
await this.driver.get(url);
await this.driver.manage().window().maximize();
}
// browser close
async browserClose() {
console.log('Browser Close');
await this.driver.quit();
}
}
const res = new Base();
res.browserOpen('https://www.google.com');
// res.browserClose();