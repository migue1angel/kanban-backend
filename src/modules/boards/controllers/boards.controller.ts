import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBoardDto } from '../dto/board/create-board.dto';
import { UpdateBoardDto } from '../dto/board/update-board.dto';
import { BoardsService } from '../services/boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    return "Create board";
  }

  /* @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardsService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardsService.remove(+id);
  } */
}
