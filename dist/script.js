function plotEquation() {
            var a = parseFloat(document.getElementById('aInput').value);
            var b = parseFloat(document.getElementById('bInput').value);
            var c = parseFloat(document.getElementById('cInput').value);

            var canvas = document.getElementById('plotCanvas');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);  // 移動到左邊界的中心
            ctx.lineTo(canvas.width, canvas.height / 2);  // 畫水平軸
            ctx.moveTo(canvas.width / 2, 0);  // 移動到上邊界的中心
            ctx.lineTo(canvas.width / 2, canvas.height);  // 畫垂直軸
            ctx.strokeStyle = 'black';
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = 'blue';

            for (var x = -10; x <= 10; x += 0.1) {
                var y = a * x * x + b * x + c;
                var plotX = canvas.width / 2 + x * 20;
                var plotY = canvas.height / 2 - y * 20;
                if (x === -10) {
                    ctx.moveTo(plotX, plotY);
                } else {
                    ctx.lineTo(plotX, plotY);
                }
            }

            ctx.stroke();
        }