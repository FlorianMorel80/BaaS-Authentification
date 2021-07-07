const UserSchema = {
    name: "User",
    properties: {
        _id: "objectId",
        _partition: "string",
        name: "string",
        tasks: "Task[]"
    },
    primaryKey: '_id'
}

export default UserSchema;