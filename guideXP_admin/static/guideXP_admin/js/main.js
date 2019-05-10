$(document).ready(function(){

    $('#artist-select').change(function(){
        val = $("#artist-select :selected").val()
        var id = '#artist-details-'+val
        console.log(id)
        if ( val !== "ignore"){
            $('#artist-form').css('display','none');
            $(id).css('display','inline');

        }else{
            $('#artist-form').css('display','inline');
            $(id).css('display','none');
        }
    });
    var pre;
    $('#artist-select').focus(function(){
        pre = this.value;
    }).change(function() {
        var val = $("#artist-select:selected").val();
        var id = '#artist-details-'+val;
        if(val !== 'ignore'){
            $('artist-form').css('display','none');
            if(pre !== 'ignore'){

            }
            $(id).css('display','inline')
        }
    });

});