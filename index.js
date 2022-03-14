var FCM = require('fcm-node');
    var serverKey = 'AAAA-wiZ-jk:APA91bEijgvHNcC9rHtBT5qPo-pviPgiK0kIXtcfYDAf75776Ixo1RsbKwqTiTPuQA_gQbwAjMzkbqi2YKqP7T03ACfgKES2CWBwgv9GvV4QyFJKXBmcYzMVLrziwYfJUeBOQrJuoOyN'; //put your server key here
    var fcm = new FCM(serverKey);

    var message = { 
        to: //token, 
        collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'hey', 
            body: 'testing...123' 
        },
        
        
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });