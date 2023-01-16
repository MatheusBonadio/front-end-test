class Lighter {

    constructor(color) {
        this._color = color;

        this._lit = false;
    }

    set lit(bool) {
        this._lit = bool;
    }

    get lit() {
        return this._lit;
    }

    set color(string) {
        this._color = string;
    }

    get color() {
        return this._color;
    }

    // Toggle burner on (true) and off (false)
    burnerToggle(element, id) {

        if (!this._lit) {
            element.classList.add('on');
            document.querySelectorAll('.burner')[id].classList.add('on');

            this._lit = true;
        } else {
            element.classList.remove('on');
            document.querySelectorAll('.burner')[id].classList.remove('on');

            this._lit = false;
        }

    }

    // Toggle oven on (true) and off (false)
    ovenToggle(element, id) {

        if (!this._lit) {
            element.classList.add('on');
            document.querySelector('.oven').classList.add('on');

            this._lit = true;
        } else {
            element.classList.remove('on');
            document.querySelector('.oven').classList.remove('on');

            this._lit = false;
        }

    }

}