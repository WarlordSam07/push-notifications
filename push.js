var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIPipHRIvFdi-2zFffnCkBv8kyli0DWAIXvUPsoM_4MNoSxG-bD97qgBXz6IvEbmdymGKsMz3NGqq6fd7IQgIaw',
    privateKey: 'hxjaNPl1BtNla2uS_e7kFYyTRlwdvLVcLOypSUXxCDY'
}

push.setVapidDetails('mailto:test@code.ac.in', vapidKeys.publicKey, vapidKeys.privateKey)

const pushSubscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/dPf4EjcN2Ew:APA91bH5vtHLbmCe17Ax6DhsCuLlMdm7r08v-bnb-bJc5iYjLQuGsDOSZKT9cotv8joO1r0r-LM65Uth79NKHkL8SLyc6MRJCrvZEGRtIepFgpOT_OSMrGwlDvXTYgZgEHq595Sv1FuE", "expirationTime": null, "keys": { "p256dh": "BARu_c1WwFwEhKI4ZNR2YX3mK0-8Xh8U_qZ7MFmY-YvC4J8Zjs5V0sjD5531ASC-SHw_QNpIonR8jYKZWBrmaZ8", "auth": "IhTzXXvHoWarGnKbr_AOAw" } }

push.sendNotification(pushSubscription, 'test message')