<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
    <script src="slide-puzzle.js"></script>
    <style id="boardStyle"></style>
</head>
<body>
    <div class="grid-container" style="grid-template-rows: auto auto auto;grid-template-columns:50% auto">    
        <div class="item1">
            <h1> Slide Puzzle </h1>
            <?php include("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
        </div>
        <div class="item2">
            <h2 onclick="invertTroll()">Game</h2><hr>
            <br>
            <br><br>
            <center>
                <div id="puzzle-container" style="width:100%;height:100%;">
        
                </div>
            </center>


        </div>
        <div class="item3">
            <h2>Options</h2><hr>
            <button id="submit" style="justify-self:center" onclick="main()">Create new board</button><br><br>
            <?php
                echo "How many rows? <br>";
                for ($i=3; $i<16; $i++) { 
                    echo "
                    <label> $i
                    <input type=\"radio\" name=\"rows\" value=\"$i\" checked>
                    </label>
                    ";
                }
                echo "<br>";
                echo "How many columns? <br>";
                for ($i=3; $i<16; $i++) { 
                    echo "
                    <label> $i
                    <input type=\"radio\" name=\"cols\" value=\"$i\" checked>
                    </label>
                    ";
                }
            ?>
            <div>
                <img src="https://i.imgur.com/CmFuOpx.png" height=100 onclick="imgChange('https://i.imgur.com/CmFuOpx.png')">
                <img src="images/1.jpg" height=100 onclick="imgChange('images/1.jpg')">
                <img src="images/2.jpg" height=100 onclick="imgChange('images/2.jpg')">
                <img src="images/3.jpg" height=100 onclick="imgChange('images/3.jpg')">
                <img src="images/4.jpg" height=100 onclick="imgChange('images/4.jpg')">
                <img src="images/5.jpg" height=100 onclick="imgChange('images/5.jpg')">
            </div>
            <br>
        </div>
        <div class="item4">
            <h2>Statistics</h2><hr onclick="document.getElementById('puzzle-container').innerHTML = solution">
            <p id="stats">
                Moves: 0 <br>
                0 minutes 0 seconds
            </p>
        </div>
    </div>
</body>
</html>