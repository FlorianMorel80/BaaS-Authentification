import Realm from 'realm';
import UserSchema from '../schema/userSchema';
import TaskSchema from '../schema/taskSchema';
import { getApp } from './realmApp';

async function anonymousLogin() {
  let user;
  try {
    const app = getRealmApp(); // pass in the appConfig variable that you created earlier
    const credentials = Realm.Credentials.anonymous(); // create an anonymous credential
    
    user = await app.logIn(credentials);
    return user;
  } catch (error) {
    throw `Error logging in anonymously: ${JSON.stringify(error, null, 2)}`;
  }
}

async function openRealm() {
  let user;
  let realm;
  const app = getApp(); 
  try {
    user = await anonymousLogin();

    console.log(`Logged in with the user: ${user.id}`);
    const config = {
      schema: [UserSchema, TaskSchema],
      sync: {
        user: app.currentUser,
        partitionValue: '60e412bc38cb740acd5e1e0e',
      },
    };

    realm = await Realm.open(config);
  } catch (error) {
    throw `Error opening realm: ${JSON.stringify(error, null, 2)}`;
  }
}

export default openRealm;
