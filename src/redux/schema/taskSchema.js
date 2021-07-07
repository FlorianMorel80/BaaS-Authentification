const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'objectId',
    _partition: 'string',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
  //   relation Many To
  assignee: {
    type: 'linkingObject',
    objectType: 'User',
    property: 'tasks',
  },
};

export default TaskSchema;
