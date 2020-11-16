import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  qty: number;

  @Prop()
  desc: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
