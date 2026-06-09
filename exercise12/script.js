// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================
const searchInput= document.getElementById("search-input");
const searchBin= document.getElementById("search-bin");
const resultsList= documenet.getElementById("results");

async function searchBooks(){
    const query= searchInptu.value.trim();
    if (!query)return ;
    resultsList.innerHTML = "<li class ='loading'> Searching...<li>";
    }
    try{
        const url= `https://openlibrary.org/search.json?q=$ {encodeURIComponent(query)`;
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        deisplayResults(data.docs);

    } 
    catch (error) {resultsList.innerHTML=`<li class='error'>Something went wrong: $ {error.message</li>}`
}
function displayResults(books){
    reslutsList.innerHTML="";
    if (!books || books.length ===0){
        resultsList.innerHTML="<li class='no-results'> No books found</li> ";
        return;
    }
    books.slice(0,20).forEach(book) => {
        const title = book.title||"unknown title";
        let authors= book.author_name;
        if(book.author_name){
            book.author_name.join (",")
            :"Unknown author";
            
        }

    }
}

searchBtn.addEventListener("click", searchBooks);

searchInput.addEventListener("keydown",(e)=> {
    if(e.key==="Eneter") searchBooks();
});


console.log("script loaded");

//fuck this i give up