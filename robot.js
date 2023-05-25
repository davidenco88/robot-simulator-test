function createRobot(coordinates, direction) {

  let [x, y] = [0, 0];
  let orientation = '';

  if (x > 10 || x < 0 || y > 10 || y < 0) {
    throw new Error('Invalid cordinate - outside of area');
  } else {
    [x, y] = coordinates
  }

  const directions = ['North', 'South', 'East', 'West'];
  const validDirection = directions.includes(direction);

  if (!validDirection) {
    throw new Error('Invalid cordinate - outside of area');
  } else {
    orientation = direction
  }

  return {
    getPosition: () => {

      return { coordinates: [x, y], orientation }
    },

    advance: function () {
      //función para avanzar
      let new_y = 0;
      let new_x = 0;

      switch (orientation) {
        case 'North':
          new_y = y + 1;
          if (new_y > 10 || new_y < 0) {
            throw new Error('Invalid movement - outside of area');
          } else {
            y = new_y
          }
          break;

        case 'South':
          new_y = y - 1;
          if (new_y > 10 || new_y < 0) {
            throw new Error('Invalid movement - outside of area');
          } else {
            y = new_y
          }
          break;

        case 'East':
          new_x = x + 1;
          if (new_x > 10 || new_x < 0) {
            throw new Error('Invalid movement - outside of area');
          } else {
            x = new_x
          }
          break;

        case 'West':
          new_x = x - 1;
          if (new_x > 10 || new_x < 0) {
            throw new Error('Invalid movement - outside of area');
          } else {
            x = new_x
          }
          break;
        }
      },

      turnRight: function () {
        // función para girar a la derecha
        switch (orientation) {
          case 'North':
            orientation = 'East';
            break;

          case 'South':
            orientation = 'West';
            break;

          case 'East':
            orientation = 'South';
            break;

          case 'West':
            orientation = 'North';
            break;
        }
      },

      turnLeft: function () {
        // función para girar a la izquierda

        switch (orientation) {
          case 'North':
            orientation = 'West';
            break;

          case 'South':
            orientation = 'East';
            break;

          case 'East':
            orientation = 'North';
            break;

          case 'West':
            orientation = 'South';
            break;
        }
      },

      instructions: function (stringInstructions) {
        // función para recibir una serie de instrucciones Ejm: "RAALAL"
        // En este metodo se va crear
        const arrayInstructions = [...stringInstructions];
        arrayInstructions.map((instruction) => {
          switch (instruction) {
            case 'A':
              this.advance();
              break;
            case 'R':
              this.turnRight();
              break;
            case 'L':
              this.turnLeft();
              break;
            default:
              throw new Error('Invalid Instruction, there are just three valid instructions -A-, -R-, -L-');
          }
        })
      }
    }
  }

  module.exports = { createRobot }
