<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
    <script src="/thing/external.js"></script>
    <script src="buttonGame.js"></script>
</head>
<body>
    <div class="grid-container" id="container">
        <div class="item1">
            <h1> Javascript Tutorial </h1>
            <?php require("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
        </div>
        <div id="input" class="item2" style="overflow:auto">
            <h2>Input</h2><hr>
            
            <button onclick="warn(); dayRuined()">Change the Text</button>
            <br>
            <button onclick="randomise()">Randomise output</button>
            <br>
            <div style="display:block">
                <button id="runnaway" style="position:relative;" onmouseover="escape()" onclick="caught()">You'll never take me alive!!</button>
            </div>
            
        </div>
        <div id="output" class="item3" style="overflow:auto">
            <h2 id="opTitle">Output</h2><hr>
            <p id="innocentBystander">Oh boy what a wonderful day to stay completely as I am!</p>
            <p id="RNG">RNG output</p>
        </div>
        <div class="item4">
        </div>
    </div>
</body>
</html>