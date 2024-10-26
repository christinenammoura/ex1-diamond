function diamond(rows) {
    var result = ''; //O(1)

    
    for (var i = 0; i < rows; i++) { //O(rows)
        
        var spaces = ' '.repeat(rows - i - 1); //O(rows)
        var stars = '*'.repeat(2 * i + 1); ////O(rows)
        result += spaces + stars + '\n'; 
    } //=> O(n^2)

    
    for (var i = rows - 2; i >= 0; i--) {
        var spaces = ' '.repeat(rows - i - 1); 
        var stars = '*'.repeat(2 * i + 1); 
        result += spaces + stars + '\n'; 
    } // O(n^2)

    console.log(result); 
}


var rows = parseInt(prompt("Enter the number of rows: ")); //O(1)
diamond(rows); 

// ==> # ===> O (n^2) + O (n^2) + O(1) = O(n^2)