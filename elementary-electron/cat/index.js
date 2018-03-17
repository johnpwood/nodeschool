var picture = require('cat-picture');
var src = picture.src;
picture.remove();
var image = require('lightning-image-poly');
var remote = require('electron').remote;
var fs = require('fs');

function save () {
  remote.getCurrentWebContents().printToPDF({
    portrait: true
  }, function(err, data) {
    fs.writeFile('annotation.pdf', data, function(err) {
      if(err) alert('error generating pdf!' + err.message);
      else alert('pdf-saved!');
    })
  })
}

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 80) save();
});
