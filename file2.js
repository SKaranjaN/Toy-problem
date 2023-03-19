/*challenge 2*/

// The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointSpeed = 5;

    if (speed <= speedLimit) {
        return ("Ok");
    }else {
        const pointToSuspend = Math.floor((speed - speedLimit) / demeritPointSpeed)
        if (pointToSuspend > 12 ) {
            return ("Licence  suspended");
        }else {
            return (`Demerit points: ${pointToSuspend}`);
        }
    }
}
