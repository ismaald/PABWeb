<?php
    $old_id = $_POST['old_id'];
    $id = $_POST['id'];

    echo $old_id;
    include "../..config/db_connection.php";

    $query = "UPDATE ruangan SET Nama_Ruangan='$nama' WHERE ID_Ruangan='$id'";

    $res = $conn->query($query);
    mysqli_close($conn);

    if($res){
        header("location:../admin_home_page.php?page=ruangan");
    }
    else{
        header("location:../admin_home_page.php?page=ruangan&statur=error");
    }
?>