const UserSchema = {
    name: "User",
    properties: {
        _id: "objectId",
        _partition: "string",
        name: "string",
        tasks: "Task[]", 
        avatar: "string", 
        // touchID: "string",
    },
    primaryKey: '_id'
}

export default UserSchema;