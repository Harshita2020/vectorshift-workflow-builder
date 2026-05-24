# VectorShift Workflow Builder

A React Flow based visual workflow/pipeline builder built for the VectorShift frontend assessment.

## Features

### Core Workflow Features
- Drag and drop workflow nodes
- Dynamic node connections using React Flow
- Interactive pipeline editor
- Real-time graph updates

### Node System
Implemented reusable `BaseNode` abstraction for shared node infrastructure.

Supported nodes:
- Input Node
- Output Node
- LLM Node
- Text Node
- Filter Node
- Delay Node
- API Node
- Transform Node
- Math Node

### Dynamic TextNode Variable Parsing
The TextNode supports dynamic variable detection using template syntax.

Example:

```txt
Hello {{name}} from {{city}}
```

Automatically generates:
- `name` input handle
- `city` input handle

Features:
- Real-time variable parsing
- Dynamic handle generation
- Duplicate variable removal
- Empty variable filtering

### Backend Integration
Integrated FastAPI backend for pipeline analysis.

Pipeline submission returns:
- Number of nodes
- Number of edges
- DAG validation result

### UI Improvements
- Reusable BaseNode architecture
- Cleaner node styling
- Modal-based pipeline analysis result
- Dynamic handles
- Interactive graph visualization

---

# Tech Stack

Frontend:
- React
- React Flow
- Zustand

Backend:
- FastAPI
- Pydantic

---

# Running the Project

## Frontend

```bash
cd client
npm install
npm start
```

## Backend

```bash
cd server
pip install fastapi uvicorn
uvicorn main:app --reload
```

---

# Architecture Notes

## BaseNode Abstraction

`BaseNode` handles:
- shared layout
- title rendering
- handle rendering
- reusable node infrastructure

Each individual node handles:
- local state
- form logic
- node-specific behavior

This separation improved scalability and reduced duplicated code.

---

# Dynamic Handle Generation

The TextNode parses variables using regex:

```js
const regex = /{{(.*?)}}/g;
```

Variables are derived dynamically from text state and converted into React Flow handles.

---

# Future Improvements

- Real DAG cycle detection
- Type-safe handle validation
- Better node theming
- Edge labels
- Resizable nodes
- Custom node icons

---

# Author

Harshita
