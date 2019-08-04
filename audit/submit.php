<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>
    <h1>  you, <?php echo $_POST["name"]; ?><br> </h1>
    Your application has been recorded in the GuideXP Server. <br>
    If you want to delete or edit it, please email to u6611178@anu.edu.au <br>
    Have a nice day!
    <?php
    $file_path = "submission.txt";
    if (file_exists($file_path)) {
        $fp = fopen($file_path, "w");
        $str = $_POST["name"] . PHP_EOL . $_POST["email"] . PHP_EOL . $_POST["github"] . PHP_EOL . $_POST["role"];
        fwrite($fp, $str);
    }
    fclose($fp);
    ?>
    <?php
    $mydbhost = "localhost";
    $mydbuser = "root";
    $mydbpass = 'GuideXP123';
    $conn = mysqli_connect($mydbhost, $mydbuser, $mydbpass);
    if (!$conn) {
        die("connect error: " . mysqli_error($conn));
    }
    mysqli_select_db($conn, 'audit_markers');
    $sql = "INSERT INTO persons (name, email, github_account, role)
			VALUES
			('$_POST[name]','$_POST[email]','$_POST[github]','$_POST[role]')";
    $retval = mysqli_query($conn, $sql);
    if (!$retval) {
        die("create error" . mysqli_error($conn));
    }
    mysqli_close($conn);
    ?>
</body>

</html>