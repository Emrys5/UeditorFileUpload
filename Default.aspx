<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="UploadImg" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>图片上传</title>
    <script src="Scripts/ueditor/third-party/jquery-1.10.2.js"></script>
    <script src="Scripts/ueditor/ueditor.config.js"></script>
    <script src="Scripts/ueditor/ueditor.all.js"></script>
    <script src="Scripts/ueditor/custom.js"></script>
    <script type="text/javascript">
        function callbackImg(imgName) {
            var names = imgName.split(",");
            for (var i = 0; i < names.length; i++) {
                $("#show-img-name").append($("<div></div>").html($("<a></a>").html(names[i]).attr("href", "/upload/image/" + names[i] + "").attr("target", "_blank")));
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <a href="javascript:uploadImgs()">多图片上传</a>
            <a href="javascript:uploadImg()">单图片上传</a>
            <a href="javascript:insertScrawl()">涂鸦</a>
        </div>
        <div id="loading"></div>
        <div id="show-img-name"></div>
    </form>
</body>
</html>
