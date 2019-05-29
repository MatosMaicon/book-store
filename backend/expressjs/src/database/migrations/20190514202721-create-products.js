'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.TEXT
			},
			price: {
				allowNull: false,
				type: Sequelize.FLOAT
			},
			quantity: {
				allowNull: false,
				defaultValue: 0,
				type: Sequelize.INTEGER
			},
			active: {
				allowNull: false,
				defaultValue: true,
				type: Sequelize.BOOLEAN
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('products');
	}
};