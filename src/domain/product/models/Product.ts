import { NonValidPriceEx } from "../exeption/NonValidPriceEx"

export class Product {

    id: string
    name: string
    code: string
    price: number

    constructor(_name: string, _code: string, _price: number) {
        this.name = _name
        this.code = _code
        this.price = this.validatePrice(_price)
    }

    private validatePrice(_price: number): number {
        if (_price > 0) { return _price } else { throw new NonValidPriceEx }
    }

    public setId(_id: string) {
        this.id = _id
    }


}