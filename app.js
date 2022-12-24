const arr = ['Rock','Paper','Scissors']

function getComputerChoice(arr) {

    return arr[Math.floor(Math.random()*arr.length)]; 
    

}

// const computerSelector = getComputerChoice(arr)
// console.log(computerSelector);

function choice( playerSelector, computerSelector) {
    if ( playerSelector === computerSelector) {
        print('Draw')
    }
    else {
        print ('try again')
    }
}

const playerSelector = 'Rock';
const computerSelector = 'Rock';
const answer = choice( playerSelector, computerSelector);
console.log(answer);