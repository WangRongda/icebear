export default class JsonFile {
    raw: string | object
    blob: Blob
    elemLink: HTMLAnchorElement = document.createElement("a")
    constructor(raw: string| object) {
        if ("object" === typeof raw) {
            raw = JSON.stringify(raw)
        } else if ("string" == typeof raw) {
            this.isJSON_test(raw)
            console.error("不是合法的JSON")
            return
        } else {
            console.error("非法参数")
            return
        }
        this.raw = raw
    }
    private fake_click() {
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent(
            "click", true, false, window, 0, 0, 0, 0, 0
            , false, false, false, false, 0, null
            );
        this.elemLink.dispatchEvent(ev);
    } 
    private isJSON_test(str: string) {
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                console.log('转换成功：'+obj);
                return true;
            } catch(e) {
                console.log('error：'+str+'!!!'+e);
                return false;
            }
        }
        console.log('It is not a string!')
    }　
    public export2json(fileName: string) {
        this.blob = new Blob([this.raw] , {type: 'application/json' });
        this.elemLink.href = window.URL.createObjectURL(this.blob)
        this.elemLink.download = fileName;
        this.fake_click();
    }
    public export2zip(fileName: string) {

    }
}