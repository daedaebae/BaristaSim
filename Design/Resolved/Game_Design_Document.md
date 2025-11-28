# BaristaSim - Game Design Document

## Overview
BaristaSim is a chill, lo-fi coffee shop simulation game where players manage a coffee cart, brew drinks, and interact with quirky customers. The game focuses on a relaxing atmosphere with 8-bit aesthetics and simple yet engaging mechanics.

## Current Features

### Core Gameplay
- **Brewing System**: Select ingredients (Beans, Milk, Sugar) to brew coffee.
- **Customer System**: Customers arrive with specific preferences.
- **Economy**: Earn money from sales, spend on ingredients.
- **Day/Night Cycle**: Manage time from 8 AM to 5 PM.

### UI/UX
- **8-Bit Aesthetic**: Pixel art visuals and `VT323` font.
- **Diegetic Menus**: Settings and upgrades presented as in-world items.
- **UI Scaling**: Adjustable UI size for accessibility.
- **Audio**: Lofi background music and sound effects.

### Systems
- **Reputation**: Tracks player performance.
- **Inventory**: Manage stock of Beans, Milk, Sugar, and Cups.
- **Upgrades**: Purchase equipment to improve efficiency.

## Planned Features
For a detailed list of upcoming features, please refer to the [Planned Features Document](Planned_Features.md).

## Technical Direction
- **Stack**: Vanilla HTML/CSS/JS.
- **State Management**: Centralized `game.state` object.
- **Persistence**: LocalStorage for saving progress.
