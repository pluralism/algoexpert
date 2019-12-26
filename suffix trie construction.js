class SuffixTrie {
    constructor(string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string) {
        for(let i = 0; i < string.length; i++) {
            let currentNode = this.root;

            for(let j = i; j < string.length; j++) {
                currentNode[string[j]] = currentNode[string[j]] || {};
                currentNode = currentNode[string[j]];
            }
            currentNode[this.endSymbol] = true;
        }
    }

    contains(string) {
        let currentNode = this.root;
        for(let i = 0; i < string.length; i++) {
            currentNode = currentNode[string[i]];
            if (i === string.length - 1) {
                return currentNode.hasOwnProperty(this.endSymbol);
            }

            if (!currentNode) {
                return false;
            }
        }
    }
}
