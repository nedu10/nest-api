import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable() //helps to inject the services in the controllers
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '2343243',
      name: 'Fried Plantain',
      qty: 34,
      desc: 'This is a bag of fried plantain',
    },
    {
      id: '1243243',
      name: 'Fried Rice',
      qty: 34,
      desc: 'This is a bag of fried rice',
    },
  ];
  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
