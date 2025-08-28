# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Chatty is a simple chat interface built with vanilla HTML, CSS, and JavaScript. It simulates a conversation with an AI assistant using predefined responses. The project consists of a single-page application with two variations:

- `index.html` - Main chat interface with external CSS
- `standalone.html` - Self-contained version with inline CSS
- `styles.css` - External stylesheet

## Architecture

The application follows a simple class-based architecture:

- **ChatInterface class**: Core functionality for message handling, UI updates, and user interactions
  - Located in `<script>` tags in HTML files
  - Manages DOM elements: messagesContainer, messageInput, sendButton, resetButton
  - Handles user input, message display, and chat reset functionality

## Key Components

- **Message System**: User and assistant messages with distinct styling (blue for user, gray for assistant)
- **Response Simulation**: Uses predefined responses with random selection to simulate assistant replies
- **UI Features**: Auto-scroll to bottom, input validation, button state management
- **Responsive Design**: Mobile-friendly with breakpoints at 768px

## Development Commands

Since this is a vanilla JavaScript project, there are minimal build commands:

- `npm start` - Opens index.html in default browser
- No build, test, or lint scripts are configured

## File Structure

- Root files are the complete application
- CSS uses modern features: CSS Grid, Flexbox, CSS animations, custom scrollbars
- JavaScript uses ES6+ features: classes, arrow functions, template literals
- No external dependencies or build tools required

## Development Notes

- The project uses browser-native APIs only
- Response logic is currently simulated with random selection from predefined messages
- Two versions exist for different deployment scenarios (external vs inline CSS)
- Paper-like visual design with rounded corners and shadow effects