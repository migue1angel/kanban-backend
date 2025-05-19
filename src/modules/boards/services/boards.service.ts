import { Injectable } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from '../entities/board.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardsRepository: Repository<BoardEntity>,
  ) {}

  // async create(createBoardDto: CreateBoardDto, owner: UserEntity) {
  async create(createBoardDto: CreateBoardDto) {
    const board = this.boardsRepository.create(createBoardDto);
    return await this.boardsRepository.save(board);
  }

  async findAllByUserId(userId: string) {
    return await this.boardsRepository.findBy({
      owner: { id: userId },
    });
  }

  async findAll() {
    return `This action returns all boards`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  async remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
