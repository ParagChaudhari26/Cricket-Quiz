# 🏏 Cricket Quiz

An interactive cricket trivia game that tests your knowledge of the gentleman's game! Challenge yourself with questions covering cricket history, legendary players, memorable matches, records, and rules from international cricket.

## ✨ Features

- **Comprehensive Question Bank**: 100+ carefully curated cricket questions
- **Multiple Difficulty Levels**: Easy, Medium, and Hard questions
- **Instant Feedback**: Immediate answers with detailed explanations
- **Score Tracking**: Real-time score calculation and performance metrics
- **Timer Functionality**: Time-based challenges for competitive play
- **Multiple Categories**: Players, matches, records, rules, and history
- **Responsive Design**: Seamless experience across all devices
- **Progress Tracking**: Visual progress indicators throughout the quiz
- **Leaderboard System**: Track high scores and compare with friends
- **Hint System**: Optional hints for challenging questions

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility features
- **CSS3**: Modern styling, animations, and responsive design
- **JavaScript ES6**: Quiz logic, score calculation, and interactive features
- **Local Storage**: Save user progress and high scores
- **CSS Grid/Flexbox**: Responsive layout design
  
## 📋 Installation & Usage

### Option 1: Direct Download
1. Clone the repository:
   ```bash
   git clone https://github.com/ParagChaudhari26/Cricket-Quiz.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Cricket-Quiz
   ```

3. Open `index.html` in your web browser

### Option 2: Live Server
1. Install a live server extension in your code editor
2. Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
Cricket-Quiz/
│
├── index.html                  # Main HTML file
├── styles/
│   ├── style.css              # Main styles
│   ├── quiz-layout.css        # Quiz-specific layouts
│   └── responsive.css         # Mobile responsiveness
├── scripts/
│   ├── quiz-engine.js         # Core quiz functionality
│   ├── cricket-questions.js   # Question database
│   ├── score-manager.js       # Score calculation logic
│   └── ui-controller.js       # User interface management
├── data/
│   ├── questions.json         # Question database
│   ├── players.json          # Player-related questions
│   ├── matches.json          # Match-related questions
│   └── records.json          # Records and statistics
├── assets/
│   ├── images/               # Cricket images and logos
│   ├── icons/                # UI and cricket icons
│   └── sounds/               # Sound effects
└── README.md                 # Project documentation
```

## 🎯 Sample Questions

### Easy Level
**Question**: How many players are there in a cricket team?
- A) 10  B) 11  C) 12  D) 13
**Answer**: B) 11

### Medium Level
**Question**: Who holds the record for the highest individual score in ODI cricket?
- A) Sachin Tendulkar  B) Virender Sehwag  C) Rohit Sharma  D) Martin Guptill
**Answer**: C) Rohit Sharma (264*)

### Hard Level
**Question**: In which year was the first official Test match played?
- A) 1876  B) 1877  C) 1878  D) 1879
**Answer**: B) 1877

## 💡 Technical Implementation

### Quiz Engine Logic
```javascript
class CricketQuiz {
    constructor(questions, config) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.score = 0;
        this.timer = config.timer;
        this.difficulty = config.difficulty;
    }
    
    nextQuestion() {
        // Load next question logic
    }
    
    checkAnswer(selectedOption) {
        // Answer validation logic
    }
    
    calculateScore() {
        // Scoring algorithm
    }
}
```

### Question Randomization
- **Smart Shuffling**: Ensures variety across categories
- **Difficulty Balancing**: Maintains consistent challenge level
- **No Repetition**: Prevents duplicate questions in same session
- **Category Distribution**: Even spread across cricket topics

## 🏆 Achievement System

### Badges & Achievements
- **🏏 Cricket Rookie**: Complete first quiz
- **🎯 Sharpshooter**: 80%+ accuracy in any quiz
- **⚡ Speed Demon**: Complete quiz under time limit
- **🧠 Cricket Genius**: Perfect score on hard difficulty
- **📚 Cricket Scholar**: Answer 100 questions correctly
- **🔥 Streak Master**: 10 correct answers in a row
- **🌟 Category Expert**: Master specific cricket category

### Leaderboard Categories
- **Highest Single Score**: Best performance in one quiz
- **Overall Average**: Consistent performance metric
- **Speed Records**: Fastest completion times
- **Streak Records**: Longest correct answer streaks
  
## 🎓 Educational Value

### Learning Outcomes
- **Cricket History**: Understanding the game's evolution
- **Rules Knowledge**: Comprehensive rule understanding
- **Player Awareness**: Knowledge of cricket legends
- **Statistical Literacy**: Understanding cricket statistics
- **Global Cricket**: Awareness of international cricket

### Skill Development
- **Quick Thinking**: Fast decision-making under pressure
- **Memory Enhancement**: Retaining cricket facts and figures
- **Pattern Recognition**: Identifying cricket trends
- **Competitive Spirit**: Healthy competition and improvement

## 📱 Device Compatibility

### Fully Supported Devices
- **Desktop**: Windows, macOS, Linux browsers
- **Tablets**: iPad, Android tablets
- **Mobile**: iOS and Android smartphones
- **Smart TVs**: Modern smart TV browsers

### Browser Support
- Chrome 70+, Firefox 65+, Safari 12+, Edge 79+

## 👨‍💻 Author

**Parag Chaudhari**
- GitHub: [@ParagChaudhari26](https://github.com/ParagChaudhari26)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/parag-chaudhari-024991289/) 
- Email: [paragchaudhari2602@gmail.com](paragchaudhari2602@gmail.com) 
- Cricket Fan Since: Forever! 🏏
---

### 🏏 Cricket Fun Facts

- Cricket is the 2nd most popular sport globally with 2.5 billion fans
- The longest cricket match lasted 12 days (1939)
- A cricket ball can reach speeds of over 160 km/h
- The Ashes urn is only 15cm tall
- Cricket was once an Olympic sport (1900)

### ⭐ Show your support

Give a ⭐ if you enjoyed testing your cricket knowledge!
