export const MARIO_WIDTH = 30;
export const MARIO_HEIGHT = 50;

export interface Mario {
    x: number;
    y: number;
    width: number;
    height: number;
    velocityY: number;
    speed: number;
    onGround: boolean;
}

export const mario: Mario = {
    x: 50,
    y: 0, // Initial position, will be adjusted by gravity
    width: MARIO_WIDTH,
    height: MARIO_HEIGHT,
    velocityY: 0,
    speed: 5,
    onGround: false,
};
