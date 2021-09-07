import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ collection: 'Products' })
export class Product {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    code: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);