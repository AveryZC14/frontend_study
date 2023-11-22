<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Thing | Home </title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">

</head>
<body>
    <div class="grid-container" style="grid-template-rows:10% 80% auto">
        <div class="item1">
            <h1> Various Code Things </h1>
        </div>
        <div class="item2" style="overflow:auto">
            <h2>The Content</h2><hr>
        </div>
        <div class="item3" style="overflow:auto">
            <h2>Navigation</h2><hr>
            <div class=side id=movement>
                <?php require("nav.php")?>
            </div>
        </div>
        <div class="item4">
        </div>
    </div>

</body>
</html>