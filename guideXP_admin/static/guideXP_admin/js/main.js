$(document).ready(function(){

    var prevArtist;

    $('#artist-select').change(function(){
        if(prevArtist !== undefined){
            $(prevArtist).css('display','none');
        }
        val = $("#artist-select :selected").val();
        var id = '#artist-details-'+val;
        // console.log(id);
        // record the current id
        prevArtist = id;

        if ( val !== "ignore"){
            $('#artist-form').css('display','none');
            $(id).css('display','inline');

        }else{
            $('#artist-form').css('display','inline');
            $(id).css('display','none');
        }
    });


    var prevExhibition;



});