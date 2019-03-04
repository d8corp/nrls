class Nrls {
  static radToDeg (rad) {
    return (rad * 180) / Math.PI;
  }
  static arcctg (x) {
    return Math.PI / 2 - Math.atan(x)
  }
  get x () {
    return this._x || 0
  }
  set x (x) {
    this._x = x
  }
  get y () {
    return this._y || 0
  }
  set y (y) {
    this._y = y
  }
  get rate () {
    return this.x ? this.y / this.x : this.y > 0 ? Infinity : -Infinity
  }
  get value () {
    const {arctg} = this
    return this.x < 0 ? 180 + arctg : arctg
  }
  get arctg () {
    return Nrls.radToDeg(Nrls.arcctg(this.rate))
  }
  get length () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

export default Nrls