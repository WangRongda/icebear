"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonFile = /** @class */ (function () {
    function JsonFile(raw) {
        this.elemLink = document.createElement("a");
        if ("object" === typeof raw) {
            raw = JSON.stringify(raw);
        }
        else if (!("string" == typeof raw && true === this.isJSON_test(raw))) {
            throw "非合法JSON";
        }
        this.raw = raw;
        this.blob = new Blob([this.raw], { type: 'application/json' });
    }
    JsonFile.prototype.fake_click = function () {
        var ev = document.createEvent("MouseEvents");
        ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        this.elemLink.dispatchEvent(ev);
    };
    JsonFile.prototype.isJSON_test = function (str) {
        if (typeof str == 'string') {
            try {
                var obj = JSON.parse(str);
                // console.log('转换成功：' + obj);
                return true;
            }
            catch (e) {
                // console.log('error：' + str + '!!!' + e);
                return false;
            }
        }
        // console.log('It is not a string!')
    };
    JsonFile.prototype.export2json = function (fileName) {
        this.elemLink.href = window.URL.createObjectURL(this.blob);
        this.elemLink.download = fileName;
        this.fake_click();
    };
    JsonFile.prototype.export2zip = function (fileName) {
    };
    return JsonFile;
}());
exports.default = JsonFile;
//# sourceMappingURL=index.js.map