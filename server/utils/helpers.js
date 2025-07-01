
function filterDeletedTasks(data){
    const filteredData = data.filter(task => !task.deleted);
    return filteredData;
}
function getRandomNumberForGame() {
    const randomGamersNumber = Math.floor(Math.random() * 11)*50;
    return randomGamersNumber;
}
function extractPoints(entryString) {
    const match = entryString.match(/(\d+)\s*pts/);
    return match ? parseInt(match[1], 10) : 0;
}
function makeFakeLeaderBoards(yourResult){
    const leaderArr = [
        `Alice - ${getRandomNumberForGame()} pts`,
        `Bob - ${getRandomNumberForGame()} pts`,
        `You - ${yourResult} pts`
    ];
    leaderArr.sort((a,b)=>{
        const firstValue = extractPoints(a);
        const secondValue = extractPoints(b);
        return secondValue - firstValue;
    });
    return leaderArr;
}

module.exports = {
    filterDeletedTasks,
    getRandomNumberForGame,
    extractPoints,
    makeFakeLeaderBoards
}