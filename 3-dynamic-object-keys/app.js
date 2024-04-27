const person = {
    name: 'John',
};
//console.log(person.name);
person.age = 23;
//console.log(person);

const items = {
    'featured-items': ['item1', 'item2']
};

console.log(items["featured-items"]);
console.log(person['name']);

let appState = 'loading';
appState = 'error';
const keyName = 'computer';
const app = {
    [appState]: true
}

app[keyName] = 'apple';
console.log(app);

const state = {
    loading: true,
    name: '',
    job: ''
};

function updateState(key, value) {
    state[key] = value;
};

updateState('name', 'John');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', [])

console.log(state);