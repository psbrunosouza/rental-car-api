import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1665859453279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "username",
            isUnique: true,
            type: "varchar",
          },

          {
            name: "password",
            type: "varchar",
          },

          {
            name: "driver_license",
            type: "varchar",
          },
          {
            name: "is_admin",
            type: "boolean",
            default: false,
          },

          {
            name: "email",
            type: "varchar",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
          {
            name: "deleted_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
  }
}
