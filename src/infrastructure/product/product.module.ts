import { Module } from '@nestjs/common';
import { ProductService } from 'src/application/product/service/product.service';
import { IProductUseCase } from 'src/domain/product/IProductUseCase';
import { ProductUseCase } from 'src/domain/product/useCase/ProductUseCase';
import { MongoModule } from '../mongo/mongo.module';
import { ProductController } from './controllers/product.controller';

@Module({
    imports: [
        MongoModule
    ],
    controllers: [ProductController],
    providers: [
        { provide: ProductUseCase, inject: [IProductUseCase], useFactory: (iProductRepo: IProductUseCase) => new ProductUseCase(iProductRepo) },
        ProductService
    ],
    exports: [
        ProductUseCase,
        { provide: ProductUseCase, inject: [IProductUseCase], useFactory: (iProductRepo: IProductUseCase) => new ProductUseCase(iProductRepo) },
        ProductService
    ]
})
export class ProductModule { }
