import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items') // Note this is a class decorator
export class ItemsController {
  //dependency injection for services, services can now be used with itemsServices
  constructor(private readonly itemsServices: ItemsService) {}

  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     return res.send('This is to get all items');
  //   }
  @Get()
  findAll(): Item[] {
    return this.itemsServices.findAll();
  }
  @Get(':id')
  findOne(@Param() param): string {
    return `item ${param.id}`;
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted ${id}`;
  }
  @Put(':id')
  updateItem(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `updating ${id} to ${updateItemDto.name} - ${updateItemDto.qty} - ${updateItemDto.desc}`;
  }
  @Post()
  createItem(@Body() createItemDto: CreateItemDto): string {
    return `this is a string ${createItemDto.qty}`;
  }
}
