import { ProductDTO } from "src/application/product/DTO/ProductDTO";
import { IProductUseCase } from "../IProductUseCase";
import { Product } from "../models/Product";

export class ProductUseCase {

    constructor(private readonly productRepo: IProductUseCase) { }

    public getAll() {
        this.productRepo.getAll()
    }

    public create(_productToCreate: ProductDTO): Product {
        const productToCreate = new Product(
            _productToCreate.name,
            _productToCreate.code,
            _productToCreate.price
        )
        return this.productRepo.create(productToCreate)
    }
}