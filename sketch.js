var colors = ['#19595b','#258083','#a2ba5c','#e57373','#800000','#bc8f8f','#8fbc8b','#bdb76b','#ffdab9','#ff8c00','#b22222','#fa8072','#123456','#999333','#369939','#c6162b','#e4a42e','#899b36','#f94b1e','#97ceb2','#3ceeb9','#d2b48c','#c8537b','#fefcd7','#8382ff','#d79ff0','#93e4f0','#c1fff4','#fbea86','#b66969','#a083b0','#95c9c0','#a5d496','#f4afaf','#a6ddff','#00bfff','#ffd900','#7851a9'
];
var quotes = ['Why are you shaking me?', 'Please stop', 'If you don\'t stop i\'ll throw up', 'I hate to be shaken', 'Do you like eartquakes? I don\'t', 'I\'ll call the cellphone syndicate', 'would you like to be shaken like that?', 'Maybe I don\'t have feelings, but surely I have sensors!', 'I feel bad', 'I hate humans', 'I\'m about to throw up', 'Do it again and I\'ll delete ALL your kitten gifs'];

var quote = "shake the device";
var colore = "#666666";

function setup() {
  createCanvas(windowWidth,windowHeight);

  setShakeThreshold(150);
  frameRate(12);
}

function draw() {
  background(colore);
  textSize(40);
  textAlign(CENTER);
  text(quote,width/2,height/2+30)
}

function deviceShaken() {
  var indexColors = floor(random() * colors.length);
  colore = colors[indexColors];
  var indexQuotes = floor(random() * quotes.length);
  quote = quotes[indexQuotes];
}
