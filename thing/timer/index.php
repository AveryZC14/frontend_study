<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/thing/decoration.css">
    <link rel="stylesheet" href="/thing/format.css">
    <link rel="stylesheet" href="timerStyle.css">
</head>
<body>
    <b><p id="timer">--- --- --- ---</p></b>
    <hr>
    <div class=foot>
        <select id="timeSel" style="height:50px;margin:15px 25%">
            <option value="Oct 17, 2022" selected> Tomorrow </option>
            <option value="Nov 15, 2022 17:15:00"> End of Exams </option>
            <option value="Dec 12, 2022 07:00:00"> VCE Results </option>
            <option value="19:00:00"> VCE Results </option>
        </select>
        <?php include("{$_SERVER['DOCUMENT_ROOT']}/thing/nav.php")?>
    </div>
    <script src="time.js"></script>
</body>
</html>