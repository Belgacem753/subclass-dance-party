var makePopDancer = function(top ,left ,timeBetweenSteps){
  makeDancer.call(this,top ,left ,timeBetweenSteps);
  this.$node = $('<img class="popDancer" src="https://pngimg.com/uploads/dancer/dancer_PNG54.png">');
  this.setPosition();
  // window.dancers.push(this.$node);

};


makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.oldStep = makeDancer.prototype.step;

makePopDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle("sidetoside");
};
makePopDancer.prototype.lineUp = function() {
  var styleSettings = {
    top:5

  };
  this.$node.css(styleSettings)
 }
