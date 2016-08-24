/**
 * Created by tup1tsa on 21.08.2016.
 */
export function saveOptions(firstWord, lastWord, order) {
    let data = getData();
    if (!data) {
        data = {
            options: {
                firstWord,
                lastWord,
                order
            },
            learningPool: [],
            knownWords: [],
            currentWord: 1
        };
        if (order === 'random') {
            data.currentWord = Math.ceil(Math.random() * data.options.lastWord)
        }
        localStorage.setItem('learnWords', JSON.stringify(data))
    } else {
        throw new Error ('Data already set')
    }
}

export function getData () {
    const jsonData = localStorage.getItem('learnWords');
    if (jsonData) {
        try {
            var data = JSON.parse(jsonData);
        } catch (err) {
            throw new Error('Not correct JSON in local storage')
        }
        return data
    }
}

export function saveSession (userData) {
    const jsonData = JSON.stringify(userData);
    localStorage.setItem('learnWords', jsonData)
}