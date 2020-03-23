var makeBlinkyDancer = function(top ,left ,timeBetweenSteps){
  makeDancer.call(this,top ,left ,timeBetweenSteps);
  this.$node = $('<img class="blinkyDancer" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/p960x960/74205832_412088659455987_3528925892682186752_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=OYqlxqprssQAX_x6NSh&_nc_ht=scontent.ftun4-1.fna&_nc_tp=6&oh=61df6b9c8bab1133bf5643ef6a0e85ec&oe=5E9FD61D">');
  this.setPosition();
  // window.dancers.push(this.$node);
};


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
makeBlinkyDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 100

  };
  this.$node.css(styleSettings)
 }


