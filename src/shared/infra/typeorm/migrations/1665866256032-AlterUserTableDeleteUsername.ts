import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserTableDeleteUsername1665866256032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name: "username",
            isUnique: true,
            type: "varchar",
        },));
    }

}
