# Copters

[Live](https://vietnamesecoffee.github.io/copters/)

## Background Overview

The Copters is a Vanilla JavaScript game similar to the infamous survival game The Helicopter Game.

This is an infinite scroller where the objective is to survive as long as possible, where the score is based on how long you survive.

Users fly through the cave turning on the engine on and off constantly to fight the force of gravity to the ground while not trying to hit the ceiling. An audio file of an engine will play every time the player clicks to lift up the copter.

Collision logic will be based on whether or not the helicopter hit box overlaps with existing obstacles on the map.

There are limited bullets to break obstacles in the instance you are trapped. Some obstacles cannot be broken though.

## Technologies

This app will implement the following
* Object Oriented Programming using only Vanilla JavaScript from game logic to graphics rendering
* HTML5 Canvas to render animation frames of the game
* Webpack to manage the JavaScript file dependencies

## Design

The app will contain a single HTML canvas element where the rendering of the game occurs.

Timeline

Day 1: render the board helicopter and obstacles and walls, develop and understanding of basic movement and gravity

Day 2 Clean up velocities of obstacles and acceleration for the helicopter, understand how to create audio on events

Day 3: Generate the game logic of when the player loses by collision of objects, implement basic audio for on click events

Day 4: style and polish, score keep, extraneous animations etc
