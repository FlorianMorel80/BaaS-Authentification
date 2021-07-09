import Realm from 'realm';
import {TaskSchema, UserSchema} from '../redux/schema';
import { getApp } from './realmApp';

export default async function openRealm() {
  let realm;

  const app = getApp();

  try {
   
    const config = {
      schema: [TaskSchema, UserSchema],
      sync: {
        user: app.currentUser,
        partitionValue: app.currentUser?.id,
      },
    };
    
    realm = await Realm.open(config);
    console.log('dedans 2 ', realm)
    return realm;
  } catch (error) {
    throw `Error opening realm: ${JSON.stringify(error, null, 2)}`;
  }
}
