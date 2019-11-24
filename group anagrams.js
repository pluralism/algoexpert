function groupAnagrams(words) {
    const sortedMap = Object.create(null);

    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (sortedMap[sortedWord]) {
            sortedMap[sortedWord].push(word);
        } else {
            sortedMap[sortedWord] = [word];
        }
    });
    return Object.values(sortedMap);
}
