self.addEventListener('push', function(e) {
    var options = {
        body: 'Hello MITians!',
        icon: 'images/mit.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [{
                action: 'explore',
                title: 'Accept',
                icon: 'images/checkmark.png'
            },


            {
                action: 'close',
                title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello MITAOE!', options)
    );
});