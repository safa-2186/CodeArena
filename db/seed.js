const pool = require('./pool');

const questions = [

    // Difficulty : EASY

    { type: "MCQ", question_text: "What is the correct syntax to define a function in Python?", code: null, options: ["function myFunc():", "def myFunc():", "define myFunc():", "func myFunc():"], answer: 1, explanation: "In Python, the def keyword is used to declare a function.", difficulty: 'easy' },
    { type: "True / False", question_text: "In Python, lists are mutable (can be modified after creation).", code: null, options: ["True", "False"], answer: 0, explanation: "Python lists are mutable — you can modify them using .append(), .remove(), etc.", difficulty: 'easy' },
    { type: "MCQ", question_text: "What does len([1, 2, 3, 4]) return?", code: null, options: ["3", "4", "5", "Error"], answer: 1, explanation: "len() returns the number of elements. [1, 2, 3, 4] contains 4 elements.", difficulty: 'easy' },
    { type: "MCQ", question_text: "Which data type stores key/value pairs in Python?", code: null, options: ["list", "tuple", "dict", "set"], answer: 2, explanation: "A dictionary (dict) stores key-value pairs. Example: {'name': 'Alice'}.", difficulty: 'easy' },
    { type: "True / False", question_text: "A for loop in Python can iterate directly over a string.", code: null, options: ["True", "False"], answer: 0, explanation: "Strings are iterable in Python. for c in 'abc': loops over each character.", difficulty: 'easy' },

    // Difficulty : MEDIUM

    { type: "MCQ", question_text: "What does this function do?", code: 'def mystery(lst):\n    return [x for x in lst if x % 2 == 0]', options: ["Returns odd elements", "Returns even elements", "Returns True if all are even", "Raises an error"], answer: 1, explanation: "The list comprehension filters elements where x % 2 == 0, keeping only even numbers.", difficulty: 'medium' },
    { type: "MCQ", question_text: "What is the average time complexity of a lookup in a Python dictionary?", code: null, options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: 2, explanation: "Python dicts use a hash table, giving O(1) average-case lookup time.", difficulty: 'medium' },
    { type: "True / False", question_text: "This code prints 4.", code: 'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))', options: ["True", "False"], answer: 0, explanation: "b = a does not copy the list — both variables point to the same object. Modifying b also modifies a.", difficulty: 'medium' },
    { type: "MCQ", question_text: "Which data structure is best suited for a FIFO queue?", code: null, options: ["list (append/pop)", "deque (collections)", "dict", "set"], answer: 1, explanation: "collections.deque is optimized for O(1) insertions and deletions at both ends.", difficulty: 'medium' },
    { type: "MCQ", question_text: "What is the value of fact(4)?", code: 'def fact(n):\n    if n <= 1:\n        return 1\n    return n * fact(n - 1)', options: ["12", "24", "16", "Recursion Error"], answer: 1, explanation: "fact(4) = 4 × 3 × 2 × 1 = 24. This is a recursive factorial function.", difficulty: 'medium' }
];


async function seed() {
    try {
        await pool.query('DELETE FROM questions');

        for (const q of questions) {
            await pool.query(
                'INSERT INTO questions (type, question_text, code, options, answer, explanation, difficulty) VALUES (?,?,?,?,?,?,?)',
                [q.type, q.question_text, q.code, JSON.stringify(q.options), q.answer, q.explanation, q.difficulty]
            );
        }

        console.log('The questions seeded successfully');
        process.exit();

    } catch (err) {
        console.error('Seed failed :', err.message);
        process.exit(1);
    }

}

seed();