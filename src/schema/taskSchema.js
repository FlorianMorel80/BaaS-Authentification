export default TaskSchema = {
  name: 'Task',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    _partition: 'string',
    name: 'string',
    statut: {type: 'string', value : ['En cours', 'A faire', 'Terminée']},
  },
};
