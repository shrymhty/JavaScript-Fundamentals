const menu = [
    {
        name: 'pancakes',
        category:'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name:'salad',
        category: 'dinner',
    },
    {
        name:'soup',
        category: 'dinner',
    },
    {
        name: 'pizza',
        category: 'dinner',
    }, 
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'coffee',
        category: 'breakfast',
    }
];

const categories = ['all', ...new Set(menu.map((item) => item.category))];
const result = document.querySelector('.result');
result.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`;
  }).join('');