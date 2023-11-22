<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
</head>
<body>

    <div class="grid-container">
        <div class="item1">
            <h1> Text to Number </h1>
            <?php include("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
        </div>
        <div class="item2">
            <h2>Input</h2>
            <hr>
            <h3>Convert here!</h3>
            <form method="POST">
                <label for="txtInp">Input text:</label>
                <input type="text" name="inpText" id="txtInp" required>
                <br>
                <label for="avg">Find the average of your sentence?</label>
                <input type="checkbox" name="average" id="avg">
                <br>
                <input type="submit" name="convert" value="Convert">
            </form>
        </div>
        <div class="item3">
            <h2>Output</h2>
            <hr>
            <?php

            $convertArray = [
                'A'=>1,'B'=>2,'C'=>3,'D'=>4,'E'=>5,'F'=>6,
                'G'=>7,'H'=>8,'I'=>9,'J'=>10,'K'=>11,'L'=>12,
                'M'=>13,'N'=>14,'O'=>15,'P'=>16,'Q'=>17,'R'=>18,
                'S'=>19,'T'=>20,'U'=>21,'V'=>22,'W'=>23,'X'=>24,
                'Y'=>25,'Z'=>26
            ];

            $letterArray = [
                'A','B','C','D','E','F',
                'G','H','I','J','K','L',
                'M','N','O','P','Q','R',
                'S','T','U','V','W','X',
                'Y','Z'
            ];

            @$inpTxt = $_POST['inpText'];
            @$avg = $_POST['average'];

            $outArray= array();
            
            foreach (str_split($inpTxt) as $letter) {
                if (array_diff($letterArray, array(strtoupper($letter))) != $letterArray){
                    array_push($outArray, $convertArray[strtoupper($letter)]);
                }
                else{
                    array_push($outArray, $letter);
                }
            }
            
            echo join(" ",$outArray);
            
            $total = 0;
            $arrayLen = 0;

            if (isset($avg)){
                foreach ($outArray as $number) {
                    if(gettype($number) == "integer"){
                        $total += $number;
                        $arrayLen++;
                    }
                }
                echo "<hr>";
                echo "Sentence total: ".$total;
                echo "<br>";
                $average = $total / $arrayLen;
                echo "Sentence average: ".$average;
            }
            




            ?>
        </div>
        <div class="item4">
        </div>
    </div>
</body>
</html>