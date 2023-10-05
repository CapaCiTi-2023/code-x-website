function performSearch() {
    var searchQuery = document.getElementById('searchQuery').value;
    var regex = new RegExp(searchQuery, 'gi');

    var contentToSearch = [];

    // Function to extract text content from an element
    function extractText(element) {
        var text = element.textContent || element.innerText || '';
        return text.trim();
    }

    // Recursive function to traverse all elements and extract text content
    function traverseElements(element) {
        var children = element.children;

        for (var i = 0; i < children.length; i++) {
            var child = children[i];

            if (child.nodeType === 1) {
                var text = extractText(child);
                if (text) contentToSearch.push(text);
                traverseElements(child);
            }
        }
    }

    // Call the function to start extracting content
    traverseElements(document.body);

    var searchResults = contentToSearch.filter(function(item) {
        return item.match(regex);
    });

    displaySearchResultsInPopup(searchResults);
}

function displaySearchResultsInPopup(results) {
    var popupWindow = window.open('', '_blank', 'width=600,height=400');
    popupWindow.document.write('<html><head><title>Search Results</title></head><body>');
    popupWindow.document.write('<h2>Search Results</h2>');

    if (results.length > 0) {
        results.forEach(function(result) {
            popupWindow.document.write('<div>' + result + '</div>');
        });
    } else {
        popupWindow.document.write('<div>No matching results found.</div>');
    }

    popupWindow.document.write('</body></html>');
    popupWindow.document.close();
}
