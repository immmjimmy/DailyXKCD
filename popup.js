document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateButton')
          .addEventListener('click', generate);
  document.getElementById('explain')
          .addEventListener('click', function() {
            window.open(document.getElementById('explain').href)
          })
});

function generate() {
  var num = Math.floor(Math.random()*1899) + 1;
  var image = document.getElementById('comic');
  var file = 'xkcd_pictures/' + num + '.png';
  
  if(num == 802 || num == 1697) {
    file = 'xkcd_pictures/' + num + '.jpg';
  } else if(num <= 107 && num != 91 && num != 106) {
    file = 'xkcd_pictures/' + num + '.jpeg';
  } else if(num == 110 || num == 113 || num == 115 || num == 116 ||
            num == 119 || num == 126 || num == 127 || num == 130 ||
            num == 133 || num == 144 || num == 154 || num == 162 ||
            num == 195 || num == 223 || num == 224 || num == 235 ||
            num == 254 || num == 256 || num == 264 || num == 265 ||
            num == 266 || num == 267 || num == 288 || num == 304 ||
            num == 556 || num ==1037 || num == 1537 || num == 1543 ||
            num == 1545 || num == 1564) {
    file = 'xkcd_pictures/' + num + '.jpeg';
  }
  image.src = file;

  var link = "http://www.explainxkcd.com/wiki/index.php/" + num;
  var explain = document.getElementById('explain');
  explain.href = link;
}

window.onload=generate;