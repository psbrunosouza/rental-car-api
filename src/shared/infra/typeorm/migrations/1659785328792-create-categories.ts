import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategories1659785328792 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [

                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
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
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
