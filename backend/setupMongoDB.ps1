# Start mongosh and execute the commands in one line
mongosh --eval "use meetingDB; db.users.insertOne({ _id: 'safdsafgghfdhsg13243', username: 'TestUser', password: 'testuser' });"
