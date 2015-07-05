function passworD()
{
	var lengTH = document.getElementById('length').value;
    var pasS = '';
    var dD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for( var i=0; i < lengTH; i++ )
        pasS+= dD.charAt(Math.floor(Math.random() * dD.length));

	document.getElementById('result').innerHTML ='Twoje hasło: <b>'+ pasS +'</b>';
}

$(document).ready(function() {
	
	$('.form-control').keydown(function(event) {
		switch(event.which){
			case 8:
				return true
				break;
			case 9:
				return true;
				break;			
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				return true;
				break;
			default:
				return  false;
		}
	});
});
