    const students = [
        { name: 'John', age: 20, subject: 'Math' },
        { name: 'Alice', age: 22, subject: 'English' },
        { name: 'Bob', age: 21, subject: 'History' }
    ];

function printGreetings(obj) {
    for (let [key, value] of Object.entries(obj)) {
        let {name,subject} =value;
        let string =`Привет, ${name}! Ты изучаешь предмет ${subject}`;
        console.log(string)
    }

}

    printGreetings(students);