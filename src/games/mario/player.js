export const MARIO_WIDTH = 30;
export const MARIO_HEIGHT = 50;

export const mario = {
  x: 50,
  y: 0, // Initial position, will be adjusted by gravity
  width: MARIO_WIDTH,
  height: MARIO_HEIGHT,
  velocityY: 0,
  speed: 5,
  onGround: false,
};
