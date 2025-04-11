# **Product Requirements Document (PRD)**

## **Project Title:** Transformation of Flappy Bird Clone into 2D Super Mario Game

**Prepared for:** Mr. Dimitrov  
**Prepared by:** ChatGPT  
**Date:** 11 April 2025

---

## **1. Objective**

Transform the existing Flappy Bird JavaScript game into a 2D side-scrolling Super Mario-style platformer using vanilla JavaScript, HTML5 Canvas, and modular CSS. The refactored project will adopt a standardised structure with a `package.json` file for managing dependencies. No backend or database integration is required at this stage.

---

## **2. Scope and Features**

### **2.1 Core Gameplay Features**

- **Side-Scrolling Platformer**: Replace vertical-scrolling mechanics with horizontal side-scrolling movement.
- **Player Character**: Mario sprite capable of:
    - Walking left/right
    - Jumping under the influence of gravity
    - Crouching (optional)
- **Environment**:
    - Static ground tiles
    - Background scenery (sky, clouds, hills)
    - Collision objects (e.g., pipes, blocks)
- **Enemies**:
    - Goomba enemies that patrol predefined paths
    - Player can jump on Goombas to defeat them
- **Collectibles**:
    - Animated coins that increase the score
    - Power-up mushrooms (optional in first version)

### **2.2 Controls**

- Arrow keys or WASD for movement
- Spacebar for jumping
- "R" key to restart the game after game over

### **2.3 Game Loop Mechanics**

- The `requestAnimationFrame` API will govern the continuous rendering loop
- Each frame will update the game state (e.g., gravity, collisions, movement) and render all visible elements

### **2.4 UI Elements**

- Score display in the top-left corner
- Game Over screen showing the final score with a restart button
- Pause/Resume toggle (optional in the initial release)

### **2.5 Audio (Phase 2 Optional Enhancements)**

- Jump sound
- Coin collection sound
- Death sound

---

## **3. Technical Specifications**

### **3.1 Project Structure (Post-Conversion)**

```plaintext
/mario-game
|-- /assets
|   |-- /images
|   |   |-- mario.png
|   |   |-- goomba.png
|   |   |-- tileset.png
|   |-- /audio (optional)
|-- /src
|   |-- game.js
|   |-- player.js
|   |-- enemy.js
|   |-- level.js
|   |-- input.js
|-- index.html
|-- style.css
|-- package.json
```

### **3.2 Dependencies**

Initialise the project with `npm init`. Install the following development dependencies:

- `live-server` – for local development (`npm install --save-dev live-server`)
- _(Optional)_ `parcel` or `vite` – for modular bundling and enhanced development workflows

#### **Example scripts block in `package.json`:**

```json
"scripts": {
  "start": "live-server"
}
```

---

## **4. Graphics and Aesthetics**

### **4.1 Art Style**

- Pixel art style inspired by the original Super Mario Bros.
- All assets must be open-source or created specifically for this project
- Optional: Smooth parallax background scrolling for visual depth

### **4.2 Level Design**

- Basic tutorial level containing:
    - A clear start point
    - Coin placements
    - Enemy (Goomba) obstacles
    - Flagpole to signify level completion

---

## **5. Stretch Goals (Post-MVP Enhancements)**

- Multiple playable levels
- Power-ups (Super Mario state, Fire Flower)
- Checkpoints throughout levels
- Multiple lives system
- Animated UI components
- Integrated sound effects and background music
- Mobile-friendly controls and responsive layout

---

## **6. Out of Scope**

- User authentication
- Online leaderboards
- Multiplayer functionality
- Backend infrastructure or cloud-based storage

---

## **7. Milestones**

1. **Week 1** – Establish project structure; implement Mario movement and gravity
2. **Week 2** – Integrate enemies and handle collision detection
3. **Week 3** – Implement coin collection and scoring system
4. **Week 4** – Create Game Over screen, restart logic, and polish core mechanics

---

## **8. Acceptance Criteria**

- Player can move and jump fluidly within the canvas
- Horizontal scrolling functions seamlessly as Mario progresses
- Collisions with blocks, ground, and enemies behave as expected
- Score increases appropriately upon collecting coins or defeating Goombas
- Game terminates upon collision with an enemy or falling off-screen

---

## **9. Risks and Mitigations**

- **Collision Detection Complexity**: Use axis-aligned bounding boxes for initial simplicity
- **Asset Legality**: Ensure all sprites are either original or fully open-source
- **Performance Concerns**: Optimise rendering to reduce draw calls; avoid memory leaks in the game loop

---

## **10. Next Steps**

- Approve this PRD for immediate implementation
- Initiate project structure and set up `package.json`
- Begin development of Mario character mechanics and basic level rendering
