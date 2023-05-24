export class ProductClass {
    private _key: string;
    private _nombre: string;
    private _precio: number;
    private _imagen: string;
    private _unidades: number;

    constructor(key: string, nombre: string, precio: number, imagen: string, unidades: number){
        this._key = key;
        this._nombre = nombre;
        this._precio = precio;
        this._imagen = imagen;
        this._unidades = unidades;
    }

    get key() {
        return this._key;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    get imagen() {
        return this._imagen;
    }

    get unidades() {
        return this._unidades;
    }

    set unidades(value) {
        this._unidades = value;
      }

    calculateSubtotal() {
        this._precio * this.unidades
    }

}
