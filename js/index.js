var quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"― Oscar Wilde",
    },
    {
        quote:"So many books, so little time.",
        author:"― Frank Zappa",
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"― Albert Einstein",
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"― Marcus Tullius Cicero",
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"― Mae West",
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"― Mahatma Gandhi",
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"― Robert Frost",
    },
    {
        quote:"A friend is someone who knows all about you and still loves you.",
        author:"― Elbert Hubbard",
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        author:"― Oscar Wilde",
    },
    {
        quote:"Always forgive your enemies; nothing annoys them so much.",
        author:"― Oscar Wilde",
    },
]



var prev;


function getQuote(){
  var quoteNumber = Math.floor(Math.random()*quotes.length);
if(prev===quoteNumber){
quoteNumber=(quoteNumber+1)%quoteNumber.length;

}
prev=quoteNumber;
document.getElementById("quote").innerHTML=quotes[quoteNumber].quote;
document.getElementById("author").innerHTML=quotes[quoteNumber].author;
}
