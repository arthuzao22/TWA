import Shape from "./Shape.js";
import { ctx, width, height } from "./Config.js";

export default class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = 'white';
    this.size = 10;
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) >= width) {
      this.x -= this.size;
    }

    if ((this.x + this.size) <= 0) {
      this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
      this.y -= this.size;
    }

    if ((this.y + this.size) <= 0) {
      this.y += this.size;
    }
  }

  setControls() {
    var _this = this;

    window.onkeydown = function (e) {
      if (e.key === 'a') {
        _this.x -= _this.velX;
      } else if (e.key === 'd') {
        _this.x += _this.velX;
      } else if (e.key === 'w') {
        _this.y -= _this.velY;
      } else if (e.key === 's') {
        _this.y += _this.velY;
      }
    };
  }

  collisionDetect(balls, count, para) {
    balls.forEach(vizinha => {
      if (vizinha.exists) {
        const dx = this.x - vizinha.x;
        const dy = this.y - vizinha.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (this.size + vizinha.size)) {
          vizinha.exists = false;
          count--;
          this.size += 5;
          para.textContent = `Ball count: ${count}`;

          if (count == 0) {
            alert("Você venceu");
            count += 50;
            this.size = 10;
            balls.forEach(bola => {
              bola.exists = true;
            })
            loop();
          }
        }
      }
    });
  }
}
