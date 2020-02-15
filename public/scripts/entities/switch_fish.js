class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/grey_fish.png'
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
