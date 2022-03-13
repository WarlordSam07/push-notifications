var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIPipHRIvFdi-2zFffnCkBv8kyli0DWAIXvUPsoM_4MNoSxG-bD97qgBXz6IvEbmdymGKsMz3NGqq6fd7IQgIaw',
    privateKey: 'hxjaNPl1BtNla2uS_e7kFYyTRlwdvLVcLOypSUXxCDY'
}

push.setVapidDetails('mailto:test@code.ac.in', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')