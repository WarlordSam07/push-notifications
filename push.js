var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIPipHRIvFdi-2zFffnCkBv8kyli0DWAIXvUPsoM_4MNoSxG-bD97qgBXz6IvEbmdymGKsMz3NGqq6fd7IQgIaw',
    privateKey: 'hxjaNPl1BtNla2uS_e7kFYyTRlwdvLVcLOypSUXxCDY'
}

push.setVapidDetails('mailto:test@code.ac.in', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://wns2-sg2p.notify.windows.com/w/?token=BQYAAACjaVJGzt06lC0xlHR906Hwi8BWcM6Ck7GhDJZblIKylzSP5aUwmSDTRsVlbxbXszgib5H0HfKvoGChIAJRV7tCYAGnbcy70ej%2bQNvVxj7htnG3ekcAqU3o6q2CKGXp9r9toHsqH5XOTss1iXTRbcwOXC1rwAUpaqUfEBVdFHdiQaHRWNgOcGBMmwNGvagVxizYFuXLzYb4iJ%2bLYfcFurWMHs11yj8QCrWVtu0CIu%2fH7TyIjgQ7Z0YivL%2b7eUwY3b%2bjQ5LsS%2b9NiSSIc%2fM68UXOfRIVAh7cl0ZYNlz62%2fTE8%2fpr93k0OYL7Z0OjwGIIITqwJEyS%2b8YatpKmLpA9JRbP1FmQCLTJQJBBqjHlUZh12g%3d%3d",
    expirationTime: null,
    keys: {
        p256dh: "BJrx9EvPVBG9N0Er5PQcqhQRZXm8TzO3fo9_QXIgcZ6oE38ypcU7CmluuusSNLQVO_vES5PZ9wmI07C4MMtfq9M",
        auth: "wtIWlFXxE-vPUT49yQZaCg"
    }
};
push.sendNotification(sub, 'test message')