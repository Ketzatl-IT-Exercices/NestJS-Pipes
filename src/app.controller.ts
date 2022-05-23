import {Body, Controller, Get, Param, Post, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import {UpperPipe} from "./pipes/upper.pipe";
import {UpperPipeOnObject} from "./pipes/upper-pipe-on-object";
import {ParseIntPipe} from "./pipes/parse-int.pipe";

class Message {
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  @UsePipes(UpperPipe)
  getHello(@Param('name') name: string ): string {
    return this.appService.getHello(name);
  }
  @Get('articles/:id')
  @UsePipes(ParseIntPipe)
  getArticleById(@Param('id') id)  {
    const idType = typeof id;
    const res = { id: id, idType: idType};
    console.log(res);
    return res;
  }

  @Post()
  @UsePipes(UpperPipeOnObject)
  createMessage(@Body() message: Message) {
    return message;
  }
}
