//first gets the first letter or word from a string

//butfirst gets all but the first from a word or a string

//unique сompares butfirst with first and if it's #t it goes into recursion with butfirst
//if #f the first goes into stack and again recursive call of unique with butfirst,
//when length === 0 the base case it returns an empty string
//and concates all the first elements from the stack :)

function butFirst(s) {
  if (s.split(" ").length === 1) {
    return s.slice(1);
  } else {
    return (s = s.split(" ").slice(1).join(" "));
  }
}
function first(s) {
  if (s.split(" ").length === 1) {
    return s.charAt(0);
  } else {
    s = s.split(" ")[0];
    return s;
  }
}

let unique = function (s) {
  if (s.length === 0) {
    return "";
  } else if (butFirst(s).includes(first(s))) {
    return unique(butFirst(s));
  } else {
    return "".concat(first(s), " ", unique(butFirst(s)));
  }
};

console.log(unique("a a b b a u t"));
console.log(unique("1 2 2 1 1 1 0 1 -4"));
