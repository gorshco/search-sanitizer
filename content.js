function hideResults() {
    // select all search results (with "#rso > div" selector)
    var searchResults = document.querySelectorAll('#rso > div');

    // iterate through all search results
    for (var i = 0; i < searchResults.length; i++) {

        // try matching "static1.squarespace.com" in the search result URL
        matchedResult = searchResults[i].querySelector('a[href^="https://static1.squarespace.com/"], a[href^="http://static1.squarespace.com/"]');

        // if "static1.squarespace.com" was found in the search result URL
        if (matchedResult) {

            // hide search result
            searchResults[i].style.display = "none";
        }
    }
}
hideResults()
