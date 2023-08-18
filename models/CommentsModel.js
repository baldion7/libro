import { Sequelize, Model, DataTypes } from 'sequelize';

export class Comments extends Model {
  static init(sequelize) {
    return super.init(
      {
        Id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },Author: {
          type: DataTypes.STRING,
          allowNull: false
        },
        Content: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Comenmts',
        timestamps: true
      }
    );
  }
}
