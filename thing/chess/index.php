<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
    <link rel="stylesheet" href="/thing/chess/game-style.css">
</head>
<body>
    <div class="grid-container">
        <div class="item1">
            <h1> Chess </h1>
            <?php include("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
        </div>
        <div class="item2" style="overflow:auto">
            <h2>Input</h2><hr>
            <!-- <div id="test"></div> -->
            <center>
                <div id='whiteLost'></div>

                <div class="game-container" id='gameArea'></div>

                <div id='blackLost'></div>
            </center>
        </div>
        <div class="item3" style="overflow:auto">
            <h2>Output</h2><hr>
        </div>
        <div class="item4">
        </div>
    </div>
    <script src="game.js"></script>
</body>
</html>