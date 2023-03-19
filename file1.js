/*challenge 1*/

// The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentGradeGenerator(grade) {
    if(grade > 79 && grade <= 100) {
        return ("A");
    }else if(grade >= 60 && grade <= 79) {
        return ("B");
    }else if(grade >= 50 && grade <= 59) {
        return ("C");
    }else if (grade >= 40 && grade <= 49) {
        return ("D");
    }else if (grade < 40) {
        return ("E");
    }
}