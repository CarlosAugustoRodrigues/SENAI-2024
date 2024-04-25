class TV {
    constructor(status) {
        this._volume = 0;
        this._on = status == undefined ? false : true;
    }

    get volume() {
        return this._volume;
    }

    set volume(volume) {
        this._volume = volume;
    }

    static ligada() {
        return new TV(true);
    }

    static desligada() {
        return new TV();
    }
}

const tv1 = TV.ligada();
tv1.volume = 10;
const tv2 = TV.desligada();

console.log(tv1);
console.log(tv2);