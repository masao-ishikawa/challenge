
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee_review', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
      reviewer_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'employee',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      reviewee_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'employee',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: { type: Sequelize.DATE },
      updated_at: { type: Sequelize.DATE },
      deleted_at: { type: Sequelize.DATE },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employee_review');
  },
};
