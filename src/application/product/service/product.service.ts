import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/product/models/Product';
import { ProductUseCase } from 'src/domain/product/useCase/ProductUseCase';
import { ProductDTO } from '../DTO/ProductDTO';

@Injectable()
export class ProductService {

    constructor(private readonly _productUseCase: ProductUseCase) { }

    create(productDTO: ProductDTO): Product {
        return this._productUseCase.create(productDTO)
    }
}
