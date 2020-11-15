import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { Request, Response } from 'express';

@Controller('items') // Note this is a class decorator
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    return res.send('This is to get all items');
  }
  @Post()
  createItem(@Body() createItemDto: CreateItemDto): string {
    return `this is a string ${createItemDto.qty}`;
  }
}
