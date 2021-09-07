import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/infrastructure/config/configuration';
import { MongoModule } from './mongo/mongo.module';
import { ProductModule } from './product/product.module';

const ENV = process.env.NODE_ENV

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [`env/${ENV}.env`],
            isGlobal: true,
            load: [configuration]
        }),
        MongoModule,
        ProductModule,
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class InfraestructureModule { }
