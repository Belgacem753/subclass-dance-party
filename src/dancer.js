// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition();

   }; // Ahlan how are you guys doing so far?

// did u get it

  makeDancer.prototype.step = function() {

    setTimeout(this.step.bind(this), this.timeBetweenSteps);

  };


  makeDancer.prototype.setPosition = function() {
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  };


