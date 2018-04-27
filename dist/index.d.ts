export default class JsonFile {
    raw: string | object;
    blob: Blob;
    elemLink: HTMLAnchorElement;
    constructor(raw: string | object);
    private fake_click();
    private isJSON_test(str);
    export2json(fileName: string): void;
    export2zip(fileName: string): void;
}
