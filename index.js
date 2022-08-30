let homeCount = document.getElementById("homeCount")
let awayCount = document.getElementById("awayCount")
let homeScore = 0
let awayScore = 0


/**Home score section */
function homeOne() {
    homeScore = homeScore +1
    homeCount.textContent = homeScore
}

function homeTwo() {
    homeScore = homeScore +2
    homeCount.textContent = homeScore
}

function homeThree() {
    homeScore = homeScore +3
    homeCount.textContent = homeScore
}

/**Away score section */
function awayOne() {
    awayScore = awayScore + 1
    awayCount.textContent = awayScore
}

function awayTwo() {
    awayScore = awayScore + 2
    awayCount.textContent = awayScore
}

function awayThree() {
    awayScore = awayScore + 3
    awayCount.textContent = awayScore
}

/**New game section */
function newGAme() {
    homeCount.textContent = 0
    awayCount.textContent = 0
    homeScore = 0
    awayScore = 0
}