import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [],
  providers: [],
  exports: [],
})
export class SharedModule {
  // This module can be used to share common services, entities, or utilities
  // across different modules in the application.
  // For example, you can import TypeOrmModule here for shared entities.
}
