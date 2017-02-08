function exams(arr) {
    let courseName = arr.pop().trim();
    let students = new Map();

    while (arr.length > 0) {
        let row = arr.shift().split(/\s+/).filter(x => x != '');

        let student = row[0];
        let course = row[1];
        let examPoints = Number(row[2]);
        let bonus = Number(row[3]);


        let coursePoints = ((examPoints / 5) + bonus)
            .toFixed(2).replace(/(\.0+$)|(0+$)/, '');

        let grade = (((((examPoints / 5) + bonus) / 80) * 4) + 2).toFixed(2);

        students.set([student], {
            'courseName': course,
            'examPoints': examPoints,
            'coursePoints': coursePoints,
            'grade': grade > 6 ? '6.00' : grade
        });
    }


    let average = 0;
    let count = 0;
    students.forEach((st, [name]) => {
        st.examPoints < 100 ?
            console.log(`${name} failed at "${st.courseName}"`)
            : console.log(`${name}: Exam - "${st.courseName}"; Points - ${st.coursePoints}; Grade - ${st.grade}`);

        if (st.courseName === courseName) {
            average += st.examPoints;
            count++;
        }
    });

    average = (average / count).toFixed(2).replace(/(\.0+$)|(0+$)/, '');
    console.log(`"${courseName}" average points -> ${average}`);
}