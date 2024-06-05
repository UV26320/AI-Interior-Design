# Fractal-Inspired Interior Design Platform

## Overview

Welcome to our Fractal-Inspired Interior Design Platform! This application offers an elegant and engaging interface that merges the practicality of interior design transformation with the aesthetic appeal of fractals. Users can upload pictures of their interiors and receive beautifully detailed, AI-generated redesigns based on selected themes and preferences.

## Features

- **User-Friendly Interface**: Experience a sleek and intuitive React-based front-end.
- **AI-Powered Redesigns**: Integrated AI processes your uploaded images to apply chosen design prompts, resulting in stunning, fractal-inspired interior designs.
- **Customization**: Preview and tweak your designs, adding a personal touch to your transformed spaces.
- **Diverse Design Suggestions**: Get suggestions for themes, color palettes, furniture designs, and arrangement options.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Flask
- **Database**: MongoDB
- **API**: RESTful API
- **AI Model**: Integrated AI for image processing and redesigns

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    ```bash
    # For the backend
    cd backend
    npm install

    # For the frontend
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=your_port_number
    AI_MODEL_PATH=path_to_your_ai_model
    ```

4. **Start the application:**

    ```bash
    # Start the backend server
    cd backend
    npm start

    # Start the frontend server
    cd ../frontend
    npm start
    ```

## Usage

1. **Upload Images**: Users can upload images of their interior spaces.
2. **Select Design Preferences**: Choose from a variety of themes, color palettes, furniture designs, and arrangement options.
3. **AI Processing**: The AI model processes the images and applies the chosen prompts to create a fractal-inspired redesign.
4. **Preview and Customize**: Users can preview the AI-generated designs and make further adjustments as desired.

## API Endpoints


### Designs

- `GET /api/designs`: Get all designs
- `POST /api/designs`: Create a new design
- `GET /api/designs/:id`: Get a specific design
- `PUT /api/designs/:id`: Update a specific design



