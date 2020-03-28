export class Recipe {
  public name: String;
  public description: String;
  public imagePath: String;

  constructor(nm: String, desc: String, imgPh: String) {
    this.name = nm;
    this.description = desc;
    this.imagePath = imgPh;
  }
}
