import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IProductUseCase } from 'src/domain/product/IProductUseCase';
import { ProductImpMongo } from './product/impl/ProductImpMongo';
import { ProductSchema, Product } from './product/schema/Product.Schema';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('database.conection'),
                dbName: configService.get<string>('database.name'),
            })
        }),
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    controllers: [],
    providers: [
        { provide: IProductUseCase, useClass: ProductImpMongo }
    ],
    exports: [
        { provide: IProductUseCase, useClass: ProductImpMongo }
    ]
})
export class MongoModule { }
