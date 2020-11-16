import { Injectable } from '@nestjs/common';
import { IItem } from './interfaces/item.interface';
import { Item, ItemDocument } from './schemas/item.schema';
import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';

@Injectable() //helps to inject the services in the controllers
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  //   private readonly items: Item[] = [
  //     {
  //       id: '2343243',
  //       name: 'Fried Plantain',
  //       qty: 34,
  //       desc: 'This is a bag of fried plantain',
  //     },
  //     {
  //       id: '1243243',
  //       name: 'Fried Rice',
  //       qty: 34,
  //       desc: 'This is a bag of fried rice',
  //     },
  //   ];
  async findAll(): Promise<ItemDocument[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<ItemDocument> {
    return await this.itemModel.findOne({ _id: id });
  }
  async create(item: IItem): Promise<ItemDocument> {
    const new_item = new this.itemModel(item);
    return await new_item.save();
  }
  async update(id: string, item: IItem): Promise<ItemDocument> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async delete(id: string): Promise<ItemDocument> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}
