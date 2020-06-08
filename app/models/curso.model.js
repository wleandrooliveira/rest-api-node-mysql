module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      teacher: {
        type: Sequelize.STRING                     
      },
      duration: {
        type: Sequelize.INTEGER                     
      },
      available: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Curso;
  };