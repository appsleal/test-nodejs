import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize(
  "postgresql://neondb_owner:dpznYkoWaQ86@ep-winter-cloud-a5oic31j.us-east-2.aws.neon.tech/neondb?sslmode=require"
);
