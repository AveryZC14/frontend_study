<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
</head>
<body>
    <div class="grid-container">    
        <div class="item1">
            <h1> Patterns </h1>
            <?php include("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
        </div>
        <div class="item2">
            <h2>Display</h2><hr>
            <canvas id="drawZone" style="border: 1px solid black" width=600 height=400></canvas>
        </div>
        <div class="item3">
            <h2>Options</h2><hr>
            <button onclick="drawLines()">lines</button>
            <button onclick="clearCanvas()">reset</button>
            <button onclick="makeSpin(makeShape(6),[10,10],1,'array',false)">shapè do a speen</button>
        </div>
        <!-- <div class="item4">
        </div> -->
    </div>
    <script src="patterns.js"></script>
</body>
</html>