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
            $('#id_artist_name').val(val);
        }else{
            $('#artist-form').css('display','inline');
            $(id).css('display','none');
        }
    });


    var prevExhibition;

    $('#exhibition-select').change(function(){
        if(prevExhibition !== undefined){
            $(prevArtist).css('display', 'none');
        }

        val = $("#exhibition-select :selected").val();
        var id = '#exhibition-details-'+val;
        prevExhibition = id;

        if ( val !== "ignore"){
            $('#exhibition-form').css('display','none');
            $(id).css('display','inline');
            $('#id_exhibition_name').val(val);

        }else{
            $('#exhibition-form').css('display','inline');
            $(id).css('display','none');
        }

    })



});