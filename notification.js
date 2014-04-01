document.querySelector( '.notify' ).addEventListener( 'click', function () {
	'use strict';

	var titulo = "Titulo da Mensagem";
	var icone = 'icon.png';
	var mensagem = 'Essa é uma notificação com HTML 5 :)';

	if ( !( "Notification" in window ) ) {
		alert( "Your browser doesn't support Notifications, but I brought this ooold alert for you :)" );
	} else if ( Notification.permission === 'granted' ) {
		var notification = new Notification( titulo, {
			icon: icone,
			body: mensagem
		} );
	} else {
		Notification.requestPermission( function ( permission ) {
			if ( !( 'permission' in Notification ) ) {
				Notification.permission = permission;
			}
			if ( Notification.permission === 'granted' ) {
				var notification = new Notification( titulo, {
					icon: icone,
					body: mensagem
				} )
			}
		} )
	}
} )