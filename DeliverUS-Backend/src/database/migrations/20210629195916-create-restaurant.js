module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false, /* Esto es como si fuera la creacion de la base de datos */
        type: Sequelize.STRING /* Solo q en vez de SQL en JS */
      },
      description: {
        allowNull: true, // en este caso puede ser nulable
        type: Sequelize.STRING // quiero q sea un String
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      shippingCosts: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      /* averageServiceMinutes: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      */
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      heroImage: {
        allowNull: true,
        type: Sequelize.STRING
      },
      status: { // creo por lo  que he buscado q los enumerados son asi
        allowNull: false,
        type: Sequelize.ENUM('Online', 'Offline', 'closed', 'temporallyClosed'),
        defaultValue: 'Offline'
      },
      /* Tengo q crear una foreign key para representar la relacion 1:N que tienen el restaurante con el owner */
      userId: { // foerign key de usuario
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users' // referencia a la tabla users
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },
      restaurantCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'RestaurantCategories'
          },
          key: 'id'
        },
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
