/*!
 * UEditor-Upload
 * version: Emrys
 * build: 2014年10月22日 10:19:26 (中国标准时间)
 */
$(function () {
    $("body").append(" <div id=\"editor-img\" style=\"display:none\"></div><div id=\"temp-img-list\" style=\"display: none\"></div>");
    var ue = UE.getEditor('editor-img');
    //监听编辑器文本内容变化
    UE.getEditor('editor-img').addListener('contentChange', function (editor) {
        //获取编辑器中的内容（html 代码）
        var img = UE.getEditor('editor-img').getPlainTxt();
        if (img != "") {
            //判断是否是单图片上传，如果是单传不做任何处理，等待回调函数再次调用。
            if (img.indexOf("loadingclass") == -1) {
                //把编辑器中的内容放到临时div中，然后进行获取文件名称。
                $("#temp-img-list").html(img);
                var array = new Array();
                //循环获取文件名称
                $("#temp-img-list img").each(function () {
                    var src = $(this).attr("src");
                    var name = src.replace("/upload/image/", "");
                    array.push(name);
                });
                //清空编辑器中的内容，以便下一次添加图片。
                UE.getEditor('editor-img').execCommand('cleardoc');
                //调用callbackImg获取懂图片名称
                if (typeof callbackImg === "function") {
                    eval("callbackImg('" + array + "')");
                }
            }
        }
    });

});
//单传图片开始上传,显示等待。
function preUploadSingleImg() {
    if ($("#loading").length > 0) {
        $("#loading").html("<img src='/Scripts/ueditor/loading.gif'>");;
    }

}

//单传图片回调,然后清理内容,在清理内容以后会自动调用contentChange事件，然后再获取上传文件的文件名。
function uploadSingleImgCallback() {
    UE.getEditor('editor-img').execCommand('cleardoc');
    if ($("#loading").length > 0) {
        $("#loading").empty();
    }
}

function uploadImg() {
    $(".edui-for-simpleupload input").click();
}

function uploadImgs() {
    $(".edui-for-insertimage .edui-button-body")[0].click();
}
function insertScrawl() {
    $('.edui-for-scrawl .edui-button-body')[0].click();
}