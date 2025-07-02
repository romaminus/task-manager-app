# task-manager-app
#Simple Task Manager App

A basic fullstack application that allows you to manage tasks with a simple and intuitive interface. Includes task filtering, gamification, calendar view, and Pomodoro timer for productivity.

Technologies Used:

    Frontend:
     - React
     - Redux Toolkit
     - Redux Thunk
     - Tailwind CSS
     - CSS Modules

    Backend:
     - Node.js
     - Express.js
     - JSON-based mock database(Fs)

Features:

     - Create new tasks
     - Edit and delete existing tasks
     - Mark tasks as completed
     - Assign tags to tasks (e.g., Work, Personal, Other)
     - Filter tasks by tags
     - Simple gamification system — earn points for completed tasks
     - Modal windows for task editing, achievements, and leaderboard
     - Minimal calendar integration (for visual overview)
     - Pomodoro timer for productivity tracking

Installation & Run:

    1. Clone the repository:
        git clone https://github.com/romaminus/task-manager-app.git
        cd task-manager-app
    2. Install dependencies for both client and server:
        npm install
        cd client
        npm install
        cd server
        npm install
    3. Run the project:
        At the root of the project:
        npm run dev
        This command uses concurrently to run both the frontend and backend servers simultaneously.

    Frontend available at: http://localhost:5173
    Backend API available at: http://localhost:5000

Project Structure:

    task-manager-app  
    ├── client/               # React frontend  
    │   ├── public/           # Static files  
    │   ├── src/  
    │   │   ├── api/          # API requests to the backend  
    │   │   ├── components/   # UI components (TasksList, TimerBlock, Modals, etc.)  
    │   │   ├── redux/        # Redux store, slices, hooks  
    │   │   ├── styles/       # CSS modules, styles  
    │   │   ├── index.css     # Global styles  
    │   │   ├── App.jsx       # Main application component  
    │   │   └── main.jsx      # React entry point  
    │   ├── index.html        # HTML template  
    │   └── package.json      # Frontend dependencies and scripts  
    │  
    ├── server/               # Node.js + Express backend  
    │   ├── routes/           # Express routes  
    │   ├── utils/            # Helper functions  
    │   ├── data.json         # Database simulation (mock data)  
    │   ├── serverApp.js      # Server entry point  
    │   └── package.json      # Backend dependencies and scripts  
    │  
    ├── package.json          # Root config (concurrently for running client & server)  
    └── README.md             # Project documentation

Contact:

    Roman Belov
    https://github.com/romaminus
    Gmail       - romaminus19@gmail.com
    LinkedIn    - https://www.linkedin.com/in/roman-belov-36268a214/
    Telegram    - @sofa_nerd
