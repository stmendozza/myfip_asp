$(document).ready(function(){
    $('#order_cuentas').change(function(e){
        e.preventDefault(); 
        var sistema =getUrl();
        location.href = sistema+'order_gastos.php?order='+$(this).val();
    });
}); //End Ready

function getUrl(){
    var loc = window.location;
    var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') +1);
    return loc.href.substring(0, loc.href.length -((loc.pathname + loc.search + loc.hash).length -pathName.length));
}