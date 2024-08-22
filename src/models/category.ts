import { Table, Model, Column, UpdatedAt } from "sequelize-typescript";

@Table
export class Category extends Model {
  @Column
  name: string;

  @UpdatedAt
  @Column
  last_update: Date;
}
