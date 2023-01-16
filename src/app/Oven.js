class Oven {

    constructor(width, height) {
        this._width = width;
        this._height = height;

        this.setOven();
    }

    set width(string) {
        this._width = string;
    }

    get width() {
        return this._width;
    }

    set height(string) {
        this._height = string;
    }

    get height() {
        return this._height;
    }

    // Draw attributes of oven
    setOven() {
        document.querySelector('#ovenWidth').innerHTML = this._width;
        document.querySelector('#ovenHeight').innerHTML = this._height;
    }

}