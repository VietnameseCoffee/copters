# Copters

## Background Overview

The Copters is a little javascript game similar to the infamous survival game The Helicopter Game.

This is an infinite scroller where the objective is to survive as long as possible, where the score is based on the duration of survival.

Users fly through the cave turning on the engine on and off constantly to fight the force of gravity to the ground while not trying to hit the ceiling. An audio file of an engine will play every time the player clicks to lift up the copter.

Collision logic will be based on whether or not the helicopter hit box overlaps with existing obstacles on the map.

## Functions MVPs

- [x] Render the helicopter and obstacles
- [x] Create gravity and lift for the helicopter
- [x] Add audio files for sounds
- [X] Implement a score system
- [ ] Bonus: Node back for high score keeping

## Technologies

This app will implement the following
* Vanilla Javascript for handling key events
* Canvas to render the app and its apposite animations
* Webpack to manage dependencies

## Design

The app will contain a single HTML canvas element where the rendering of the game occurs.

Timeline

Day 2: render the board helicopter and obstacles and walls, Understand basic movement and gravity

Day 3: Clean up velocities of obstacles and acceleration for the helicopter, understand how to create audio on events

Day 4: Generate the game logic of when the player loses by collision of objects, implement basic audio for on click events

Day 5: style and polish, score keep, extraneous animations smoke fire etc

Bonus:
Node backend for high score keeping

[Link to Original Helicopter game image](https://www.gamesloon.com/games/screenshots/origineel/194.jpg)
