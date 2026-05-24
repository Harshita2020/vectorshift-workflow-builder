# VectorShift Workflow Builder

A node-based AI workflow builder built with React Flow and FastAPI.

This project allows users to create and connect workflow nodes visually using a drag-and-drop interface. The application demonstrates reusable frontend architecture, dynamic node rendering, and graph-based workflow interactions.

## Features

- Node-based workflow canvas
- Reusable `BaseNode` abstraction
- Config-driven handle rendering
- Dynamic React Flow node system
- Input, Output, Text, and LLM nodes
- Modular and scalable component architecture
- FastAPI backend integration
- Interactive graph-based UI

## Tech Stack

### Frontend
- React
- React Flow
- JavaScript
- CSS

### Backend
- FastAPI
- Python

## Project Structure

```bash
src/
  nodes/
    BaseNode.js
    inputNode.js
    outputNode.js
    textNode.js
    llmNode.js
```

## Architecture Highlights

### BaseNode Abstraction
A reusable `BaseNode` component was created to reduce duplication across nodes.

The `BaseNode` handles:
- shared layout/styling
- title rendering
- dynamic handle rendering

Each specialized node manages:
- local state
- form inputs
- node-specific logic

### Config-Driven Handles
Instead of hardcoding handles inside every node, handles are passed as configuration objects and rendered dynamically.

This improves:
- scalability
- readability
- maintainability

## Running the Project

### Frontend

```bash
npm install
npm start
```

### Backend

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

## Future Improvements

- Dynamic TextNode variable parsing
- Auto-generated handles from variables
- Improved node styling and UX
- Node deletion support
- Better graph validation
- Persisted workflows

## Author

Harshita Adya
