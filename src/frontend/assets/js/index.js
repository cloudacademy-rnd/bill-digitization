$( document ).ready(function() {
    $('.image_container').hide();
});

$('#link_upload').click(function(){
    $('#file-upload').trigger('click')
    console.log("Clicked!!")
})

$('#close-icon').click(function(){
    $('.image_container').hide();
    $('#image-review').attr('src', '#');
    console.log("Clicked!!")
})

function readURL(input) {
    console.log(input.files)
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image-review').attr('src', e.target.result);
            $('.image_container').show();
        };

        reader.readAsDataURL(input.files[0]);
    }
}

