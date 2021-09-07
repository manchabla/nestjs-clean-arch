import { Product } from "./models/Product";

export abstract class IProductUseCase {
    public abstract create(product: Product): Product
    public abstract getAll()
    public abstract getById()
    public abstract getByName()
}