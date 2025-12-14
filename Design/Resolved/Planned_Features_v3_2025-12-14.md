# Planned Features v3

## Character Development (Phase 1)
- [x] Track all characters and flesh out short, simple backstories.
    - [x] Name, age, gender, personality, etc. (Implemented in `src/data/characters.js`)
    - [x] Sentiment, mood, and personality traits that affect their behavior. (Implemented `traits` influencing patience and preferences)

## Animated Walkthrough
- [ ] Create an animated walkthrough tutorial for new players.
    - [ ] Highlight and explain the function of each UI button.
    - [ ] Demonstrate core game mechanics and functions.
    - [ ] Provide clear guidance on how to achieve game objectives and win conditions.

## Submenus
Create a submenu for each of the following showing relevant information:
- [ ] Time
    Calendar
- [ ] Funds
    Funds over time
    purchase history
    price of goods, ingredients, upgrades over time
- [ ] Reputation
    reputation history
    reputation requirements
    reputation effects/unlockables
- [ ] Satisfaction
    customer satisfaction history
    customer satisfaction requirements
    customer satisfaction effects/unlockables
- [ ] Weather
- [ ] Customers

### Ingredients List
- [ ] Create a list of ingredients that can be purchased in the game world.
- [ ] Add a mechanism to track ingredient usage and display it in the UI.
- [ ] Add a mechanism to track ingredient prices and display it in the UI.
- [ ] Add a mechanism to track ingredient availability and display it in the UI (limited sources)

### Character AI
- [ ] **Finite State Machines (FSMs)**: For simple, distinct behaviors (e.g., idle, conversation, unexpected actions).
- [ ] **Behavior Trees**: For more complex, hierarchical decision-making and sequencing of actions.
- [ ] **Utility AI**: For dynamic decision-making based on environmental factors and character needs.
- [ ] **Pathfinding & Navigation**: To enable characters to move intelligently through the game world.
- [ ] **Social AI**: To manage interactions, relationships, and dialogue choices between characters.
- [ ] **Emotional AI**: To simulate emotional responses and reactions to player and environmental stimuli.

## Variable GUI Themes (Far Future)
Dynamically adjust the game's UI theme based on the selected Cart Type:
- [ ] **Eco-Friendly Theme** (Velo-Barista): Earth tones, leafy accents, recycled paper textures.
- [ ] **Synth84 Hacker Theme** (Sidewalk Hacker): Dark mode, neon greens/purples, terminal font, glitch effects.
- [ ] **Ritzy / High-End Theme** (Micro-Luxe): Gold accents, marble textures, serif fonts, sleek animations.
