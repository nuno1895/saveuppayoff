"use strict";

module.exports = function(sequelize, DataTypes) {
	var Grades = sequelize.define("Grades", {
		user_id: DataTypes.INTEGER,
		budget_id: DataTypes.INTEGER,
        type_id: DataTypes.INTEGER,
        grade: DataTypes.STRING
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "grades"
    });

    return Grades;
};