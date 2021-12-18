function prefixTreeBuilder(wordList) {
    const root = {};
    for (const word of wordList) {
      let node = root;
      for (const char of word) {
        let nextNode = node[char];
        if (!nextNode) node[char] = nextNode = {end: false};
        node = nextNode;
      }
      node.end = true; // mark the nodes that are endings of real words
    }
  
    function findChildren(node, prefix, list, maxLength) {
      if (node.end) list.push(prefix);
      for (const char in node) {
        findChildren(node[char], prefix + char, list, maxLength);
        if (list.length >= maxLength) return list;
      }
      return list;
    }
  
    function findSuffixes(prefix, maxLength) {
      prefix = prefix.toLowerCase();
      let node = root;
      for (const char of prefix) {
        let nextNode = node[char];
        if (!nextNode) return [""];
        node = node[char];
      }
      let words = findChildren(node, prefix, [], maxLength);
      return words;
    }
  
    return {root, findSuffixes};
  }

wordlist = ['appel', 'banaan', 'citroen']

prefixTreeBuilder(wordlist)