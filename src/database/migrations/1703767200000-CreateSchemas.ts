import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemas1703767200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "auth"');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "teams"');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "boards"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP SCHEMA IF EXISTS "boards"');
    await queryRunner.query('DROP SCHEMA IF EXISTS "teams"');
    await queryRunner.query('DROP SCHEMA IF EXISTS "auth"');
  }
}