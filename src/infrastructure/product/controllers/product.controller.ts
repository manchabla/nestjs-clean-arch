import { Body, Controller, Get, Header, Headers, Post } from '@nestjs/common';
import { ProductDTO } from 'src/application/product/DTO/ProductDTO';
import { ProductService } from 'src/application/product/service/product.service';

@Controller()
export class ProductController {

    constructor(
        private readonly _productServices: ProductService
    ) { }

    @Post()
    @Header('Content-Type', 'application/json')
    create(@Body() product: ProductDTO) {
        return this._productServices.create(product)
    }

}
