const quizQuestions = [
    {
        question: "Who has the most centuries in international cricket?",
        options: [
            "Sachin Tendulkar",
            "Virat Kohli",
            "Ricky Ponting",
            "Jacques Kallis"
        ],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup?",
        options: [
            "Australia",
            "England",
            "West Indies",
            "India"
        ],
        answer: "West Indies"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: [
            "Virat Kohli",
            "Don Bradman",
            "MS Dhoni",
            "Sachin Tendulkar"
        ],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What is the highest individual score in ODI cricket?",
        options: [
            "264",
            "200",
            "237",
            "275"
        ],
        answer: "264"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: [
            "Muttiah Muralitharan",
            "Shane Warne",
            "James Anderson",
            "Anil Kumble"
        ],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "What is the maximum number of overs in a standard ODI match?",
        options: [
            "50",
            "20",
            "40",
            "60"
        ],
        answer: "50"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket?",
        options: [
            "AB de Villiers",
            "Virat Kohli",
            "Chris Gayle",
            "Shahid Afridi"
        ],
        answer: "AB de Villiers"
    },
    {
        question: "Which cricket stadium is known as the 'Home of Cricket'?",
        options: [
            "Eden Gardens",
            "Lords",
            "MCG",
            "SCG"
        ],
        answer: "Lords"
    },
    {
        question: "Which country is nicknamed the 'Black Caps' in cricket?",
        options: [
            "Australia",
            "South Africa",
            "New Zealand",
            "West Indies"
        ],
        answer: "New Zealand"
    },
    {
        question: "Who was the first cricketer to score 10,000 runs in Test cricket?",
        options: [
            "Allan Border",
            "Sachin Tendulkar",
            "Sunil Gavaskar",
            "Don Bradman"
        ],
        answer: "Sunil Gavaskar"
    }
];

// Array to track displayed questions
let arr = [];

// Function to get a unique random index
function getUniqueRandomIndex(totalQuestions) {
    let randomIndex = Math.floor(Math.random() * totalQuestions);
    while (arr.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * totalQuestions);
    }
    arr.push(randomIndex);
    return randomIndex;
}

// Function to display a question and its options
function displayQuestion(questionId, optionsIds, randomIndex) {
    const questionElement = document.getElementById(questionId);
    const optionElements = optionsIds.map(id => document.getElementById(id));
    const queobj = quizQuestions[randomIndex];

    // Update the DOM
    questionElement.innerHTML = queobj.question;
    queobj.options.forEach((option, index) => {
        optionElements[index].innerHTML = option; // Set the visible text
        optionElements[index].previousElementSibling.value = option; // Set the value of the radio button
    });
}


// Display first question
let randomIndex1 = getUniqueRandomIndex(quizQuestions.length);
displayQuestion(
    "q1",
    ["idq1o1", "idq1o2", "idq1o3", "idq1o4"],
    randomIndex1
);

// Display second question
let randomIndex2 = getUniqueRandomIndex(quizQuestions.length);
displayQuestion(
    "q2",
    ["idq2o1", "idq2o2", "idq2o3", "idq2o4"],
    randomIndex2
);
let randomIndex3 = getUniqueRandomIndex(quizQuestions.length);
displayQuestion(
    "q3",
    ["idq3o1", "idq3o2", "idq3o3", "idq3o4"],
    randomIndex3
);
let randomIndex4 = getUniqueRandomIndex(quizQuestions.length);
displayQuestion(
    "q4",
    ["idq4o1", "idq4o2", "idq4o3", "idq4o4"],
    randomIndex4
);
let randomIndex5 = getUniqueRandomIndex(quizQuestions.length);
displayQuestion(
    "q5",
    ["idq5o1", "idq5o2", "idq5o3", "idq5o4"],
    randomIndex5
);

// code to display answer 

// Prepare a map of correct answers keyed by question IDs
const original_answer = {
    q1: quizQuestions[arr[0]].answer,
    q2: quizQuestions[arr[1]].answer,
    q3: quizQuestions[arr[2]].answer,
    q4: quizQuestions[arr[3]].answer,
    q5: quizQuestions[arr[4]].answer,
};

const form = document.querySelector('form');

// Add submit event listener to evaluate answers
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let result = 0;

    // Iterate through form data and compare answers
    for (let [key, value] of data.entries()) {
        if (value === original_answer[key]) {
            result++;
        }
    }

    // Display the result
    const out = document.getElementById('out');
    out.innerText = "Score : "+`${result} out of 5 is correct`;
});








