const { Sequelize, DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('guestbook', {
        no: { 
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true 
        },
        commit: {
            field: 'commit',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        url: {
            field: 'url',
            type: DataTypes.STRING(45),
            allowNull: false
       
    }, 
        underscored: true,    
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'gallery'
    });
}