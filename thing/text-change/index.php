<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Thing | Text Changer </title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
</head>
<body>
    <div class="grid-container">

        <div class="item1">
            <h1> Text Changer </h1>
            <?php include("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
        </div>



        <div class="item2">
            <h2>Input</h2>
            <hr>
            <div class="codeInput">
                <form method="POST">
                    
                    <label for="inputText">Enter a sentence Here:</label>
                    <input type="text" id="inputText" name="txtInput" require>
                    
                    <br>
                    
                    <h3>Select which changes you would like to apply:</h3>
                    <label for="noVowel"> Remove Vowels </label>
                    <input type="checkbox" name="noVowel" id="noVowel" value="1">
                    <br>
                    <label for="leet"> Convert to 1337 5p34k </label>
                    <input type="checkbox" name="1337" id="leet" value="1">
                    <br>
                    <label for="toNum"> Convert letters to numbers</label>
                    <input type="checkbox" name="toNum" id="toNum">
                    <br>
                    <label for="reverse"> Reverse Letters </label>
                    <input type="checkbox" name="reverse" id="reverse">
                    <br>
                    <label for=""></label>
                    <input type="checkbox" name="" id="">
                    <br>
                    <label for=""></label>
                    <input type="checkbox" name="" id="">
                    <br>
                    <label for=""></label>
                    <input type="checkbox" name="" id="">
                    <br>
                    <label for=""></label>
                    <input type="checkbox" name="" id="">
                    <br>
                    <label for=""></label>
                    <input type="checkbox" name="" id="">

                    <br><br><br><br>

                    <input type="submit">
                </form>
            </div>
        </div>

        
        <div class="item3">
            <h2>Output</h2>
            <hr>
            <div class="codeOutput">
                <?php
                    $vowels = ['a','e','i','o','u','A','E','I','O','U'];
                    $LEET = [
                        'a'=>'4','b'=>'8','e'=>'3','g'=>'9','i'=>'1',
                        'l'=>'1','o'=>'0','s'=>'5','z'=>'2'
                    ];

                    @$inputText = $_POST['txtInput'];
                    @$noVowel = $_POST['noVowel'];
                    @$LEET = $_POST['1337'];

                    $stringArray = array();

                    
                    foreach (str_split($inputText) as $char){
                        array_push($stringArray, $char);
                    }

                    if (isset($noVowel)){
                        $stringArray = array_diff($stringArray, $vowels);
                    }
                    if (isset($LEET)){
                        foreach ($stringArray as $char){

                        }
                    }



                    echo join($stringArray);
                ?>
            </div>

        </div>

        <div class="item4">
        </div>

    </div>

</body>
</html>