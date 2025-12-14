# Mobile Strategy (Phase 2.5)

**Goal**: Optimize the web experience for mobile devices immediately, before the React Native migration.

## 1. UI Adaptation
The current UI is desktop-first. We need to adapt it for small screens.
-   [ ] **Viewport Meta**: Ensure `user-scalable=no` to prevent accidental zooming.
-   [ ] **Media Queries**:
    -   `@media (max-width: 768px)`: Stack layout vertically.
    -   Hide non-essential decorative elements to save space.
-   **Touch Targets**:
    -   Minimum button size: 44px x 44px (Apple guidelines).
    -   Add padding to inputs and inventory items.

    -   Minimum button size: 44px x 44px (Apple guidelines).
    -   Add padding to inputs and inventory items.
    -   [x] **Sourcing Screen**: Added vertical scroll for Cart Designer options.

## 2. Layout Strategy (Mobile V2)
-   **Brewing Station**: Centered and scaled down significantly to fit. Moved up to clear controls.
-   **Avatars**: Moved to the **TOP** of the screen (below HUD) to avoid cluttering the work area.
-   **Controls**: Horizontal scrolling strip at the bottom.
-   **Log**: Compact overlay above controls.
-   **HUD**: Scrollable horizontal bar.

## 3. Testing Plan
-   **Devices**:
    -   iPhone (Safari)
    -   Android (Chrome)
-   **Key Flows**:
    -   Complete a full brew cycle (Coffee/Matcha) without mis-clicks.
    -   Open/Close Shop and buy an item.
    -   Scroll through valid inventory list.

## 4. Known Issues (To Debug)
-   Hover tooltips don't work on mobile (Need tap-to-view or removed).
-   Audio auto-play restrictions may be stricter (User interaction required for *every* sound? No, usually just context start).
