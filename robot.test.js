const { createRobot } = require('./robot.js');

describe('createRobot', () => {
  test('should return the correct initial position and orientation', () => {
    const robot = createRobot([0, 0], 'North');
    const position = robot.getPosition();
    expect(position.coordinates).toEqual([0, 0]);
    expect(position.orientation).toBe('North');
  });

  test('should advance the robot correctly', () => {
    const robot = createRobot([0, 0], 'North');

    robot.advance();
    let position = robot.getPosition();
    expect(position.coordinates).toEqual([0, 1]);
    expect(position.orientation).toBe('North');

    robot.turnRight();
    robot.advance();
    position = robot.getPosition();
    expect(position.coordinates).toEqual([1, 1]);
    expect(position.orientation).toBe('East');
  });

  test('should throw an error when advancing outside the area', () => {
    const robot = createRobot([0, 10], 'North');
    expect(() => { robot.advance() }).toThrow();
  });

  test('should turn right correctly', () => {
    const robot = createRobot([0, 0], 'North');

    robot.turnRight();
    let position = robot.getPosition();
    expect(position.orientation).toBe('East');

    robot.turnRight();
    position = robot.getPosition();
    expect(position.orientation).toBe('South');
  });

  test('should turn left correctly', () => {
    const robot = createRobot([0, 0], 'North');

    robot.turnLeft();
    let position = robot.getPosition();
    expect(position.orientation).toBe('West');

    robot.turnLeft();
    position = robot.getPosition();
    expect(position.orientation).toBe('South');
  });

  test('should execute instructions correctly', () => {
    const robot = createRobot([0, 0], 'North');

    robot.instructions('RAALAL');
    const position = robot.getPosition();
    expect(position.coordinates).toEqual([2, 1]);
    expect(position.orientation).toBe('West');
  });
});
