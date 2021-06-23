const wakeUp = () => {return 'Acordando!!'};
const coffee = () => {return 'Bora tomar café!!'};
const sleep = () => {return 'Partiu dormir!!'};

const doingThings = (param) => {console.log(param())};

doingThings(wakeUp);