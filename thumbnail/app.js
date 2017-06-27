class Thumbnail {
    constructor(objects) {
        this.obj = objects;
        this.dom = document.createElement('div');
        this.dom.className = 'thumbnail';
        document.querySelector('#main').appendChild(this.dom);
        this.canvas = document.createElement('canvas');
        let domStyle = getComputedStyle(this.dom);
        this.height = parseInt(domStyle.height);
        this.width = parseInt(domStyle.width);
        this.canvas.height = parseInt(domStyle.height) * 2;
        this.canvas.width = parseInt(domStyle.width) * 2;
        this.canvas.style.height = domStyle.height;
        this.canvas.style.width = domStyle.width;
        this.dom.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(2, 2);

        //
        this.system();
        //
        this.drawTitle();
        this.drawMap();
    }

    system() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = '255';
        canvas.height = '1';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.zIndex = '100';
        var grandient = ctx.createLinearGradient(0, 0, 255, 0);
        grandient.addColorStop(.25, "rgb(0,0,255)");
        grandient.addColorStop(0.5, "rgb(0,255,0)");
        grandient.addColorStop(0.75, "yellow");
        grandient.addColorStop(1, "rgb(250,0,0)");
        ctx.fillStyle = grandient;
        ctx.fillRect(0, 0, 255, 1);
        var colordata = ctx.getImageData(0, 0, 255, 1).data;
        this.colordata = colordata;
    }

    drawTitle() {
        let padding = 10;
        this.ctx.font = '14px sans-serif';
        this.ctx.fillText(this.obj.title, padding, 10 + padding);
        this.ctx.fillText(`拥堵里程：${this.obj.length} km`, padding, this.height - 40 - padding);
        this.ctx.fillText(`拥堵指数：${this.obj.index}`, padding, this.height - 20 - padding);
        this.ctx.fillText(`平均速度：${this.obj.speed} km/h`, padding, this.height - padding);
    }

    drawMap() {
        this.MercatorProjection = this.MercatorProjection || new MercatorProjection();
        let minBorderX = Infinity;
        let maxBorderX = -Infinity;
        let minBorderY = Infinity;
        let maxBorderY = -Infinity;
        let maxSpeed = -Infinity;
        let minSpeed = Infinity;

        let newPoints = this.obj.locations.map((item, index) => {
            maxSpeed = Math.max(maxSpeed, this.obj.speeds[index]);
            minSpeed = Math.min(minSpeed, this.obj.speeds[index]);
            let points = item.split(',');
            let returnPoints = [];
            for (let i = 0; i < points.length; i += 2) {
                let newPoint = this.MercatorProjection.lngLatToPoint({
                    lng: points[i],
                    lat: points[i + 1]
                });

                minBorderX = Math.min(minBorderX, newPoint.x);
                maxBorderX = Math.max(maxBorderX, newPoint.x);
                minBorderY = Math.min(minBorderY, newPoint.y);
                maxBorderY = Math.max(maxBorderY, newPoint.y);
                returnPoints.push(newPoint);
            }
            return returnPoints;
        });

        let padding = [40, 20, 80, 20];
        let useHeight = this.height - padding[0] - padding[2];
        let useWidth = this.width - padding[1] - padding[3];

        let borderInfo = {
            startX: minBorderX,
            endX: maxBorderX,
            startY: minBorderY,
            endY: maxBorderY,
            deltaX: maxBorderX - minBorderX,
            deltaY: maxBorderY - minBorderY,
            preX: useWidth / (maxBorderX - minBorderX),
            preY: useHeight / (maxBorderY - minBorderY),
        }
        let usePreRatio = Math.min(borderInfo.preX, borderInfo.preY);

        let offsetX = (usePreRatio * borderInfo.deltaX - useWidth) / 2;
        let offsetY = (usePreRatio * borderInfo.deltaY - useHeight) / 2;

        newPoints.forEach((item, index) => {
            this.ctx.beginPath();
            this.ctx.lineWidth = 6;

            let present = (this.obj.speeds[index] - minSpeed) / (maxSpeed - minSpeed);
            let colorIndex = Math.min(254, parseInt(present * 255, 10));
            let color = `rgb(${this.colordata[colorIndex*4]},${this.colordata[colorIndex*4+1]},${this.colordata[colorIndex*4+2]})`
            this.ctx.strokeStyle = color;

            item.forEach((point, pointIndx) => {
                let x = (point.x - borderInfo.startX) * usePreRatio + offsetX;
                let y = useHeight - (point.y - borderInfo.startY) * usePreRatio + offsetY;
                if (pointIndx === 0) {
                    this.ctx.moveTo(x + padding[3], y + padding[0]);
                } else {
                    this.ctx.lineTo(x + padding[3], y + padding[0]);
                }
            });
            this.ctx.stroke();
        });
    }
}