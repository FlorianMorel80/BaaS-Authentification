import Realm from 'realm';
import {TaskSchema, UserSchema} from '../redux/schema';
import { getApp } from './realmApp';

export default async function openRealm() {
  let realm;
// Permet la connexion à la base de données 
  const app = getApp();

  try {
   
    const config = {
      schema: [TaskSchema, UserSchema],
      sync: {
        user: app.currentUser,
        // Récupère l'id seulement si l'user est connecté 
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
