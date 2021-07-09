import {ObjectId} from 'bson';
import openRealm from '../../database/openRealm';
export function getActions(app, dispatch) {
  return {
    signIn: async data => {
      const {email, password} = data;
      const credentials = Realm.Credentials.emailPassword(email, password);

      try {
        const user = await app.logIn(credentials);

        dispatch({type: 'SIGN_IN', userId: user.id});
        console.log('successfully logged in ', user.id);
      } catch (error) {
        console.log(
          "l'authentification a échouée avec l'erreur : ",
          error.message,
        );
      }
    },

    signOut: async () => {
      await app.currentUser.logOut();
      dispatch({type: 'SIGN_OUT'});
    },

    signUp: async data => {
      const {email, password} = data;
      try {
        const newuser = await app.emailPasswordAuth.registerUser(
          email,
          password,
        );
        console.log(newuser);

        const credentials = Realm.Credentials.emailPassword(email, password);

        const user = await app.logIn(credentials);

        // enregister l'utilisateur dans la collection user
        // If an object exists, setting the third parameter (`updateMode`) to
        // "modified" only updates properties that have changed, resulting in
        // faster operations.
        const realm = await openRealm();
        realm.write(() => {
          realm.create(
            'User',
            {name: email, _id: ObjectId(user.id), _partition: user.id, avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
          );
        });
        realm.close();
        dispatch({type: 'SIGN_IN', userId: user.id});
      } catch (error) {
        console.log(
          "l'authentification a échouée avec l'erreur : ",
          error.message,
        );
      }
    },
  };
}
