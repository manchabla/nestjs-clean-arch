import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IProductUseCase } from "src/domain/product/IProductUseCase";
import { Product as ProductModel } from "src/domain/product/models/Product";
import { Product, ProductDocument } from "../schema/Product.Schema";

@Injectable()
export class ProductImpMongo implements IProductUseCase {

    constructor(
        @InjectModel(Product.name) private readonly productDocument: Model<ProductDocument>
    ) { }

    public create(_product: ProductModel): ProductModel {
        const productToCreate = new this.productDocument(_product);
        _product.setId(productToCreate._id)
        productToCreate.save()
            .catch(error => { throw new error })
        return _product
    }

    public getAll() {
        throw new Error("Method not implemented.");
    }

    public getById() {
        throw new Error("Method not implemented.");
    }

    public getByName() {
        throw new Error("Method not implemented.");
    }
}