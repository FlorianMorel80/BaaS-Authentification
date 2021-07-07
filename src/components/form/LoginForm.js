// *************** React Components*****************************
import React, {useState, useContext} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
// import Input from "@material-ui/core/Input";
import * as yup from 'yup';

import {AuthContext} from '../../redux/contexts/AuthContext';
// *************************************************************

// ----------------------------REGEX--------------------------------
const REGEXP_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//-------------------------- END OF REGEX---------------------------

const schema = yup.object().shape({
  // EMAIL
  email: yup
    .string()
    .email("L'adresse mail est incorrecte")
    .required('Ce champs est requis'),

  // PASSWORD
  password: yup
    .string('Doit contenir des lettres')
    .matches(
      REGEXP_PASSWORD,
      'Le mot de passe doit contenir : \n 8 caractères, \n 1 majuscule, \n 1 minuscule \n 1 caractère spéciale \n 1 numéro"',
    )
    .required('Ce champs est requis'),

    // Confirm password
  passwordVerify: yup.string()
    .oneOf([yup.ref('password'),null], 'Les mots de passe ne correspondent pas')
    .required('Champs requis'),
});

const LoginForm = ({navigation}) => {
  const {
    control,
    handleSubmit,
    value,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });


  const {signIn} = useContext(AuthContext);

  async function onSignIn(data) {
    console.log(data);
    signIn(data);
  }

  //*********/ Afficher ou cacher le mot de passe********
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  // ****************************************************
  const [passwordVerify, setPasswordVerify] = useState(null);
  const [showRegex, setShowRegex] = useState(false);

//   const validateVerifyPWD = password => {
//     if (password !== passwordVerify && passwordVerify == null) {
//       setPasswordVerify(true);
//       console.log('bad');
//     } else {
//       setPasswordVerify(false);
//       console.log('good ');
//     }
//     console.log(passwordVerify);
//   };

  function onSubmit(value) {
    console.log(value);
  }

  return (
    <ScrollView>
      <View style={styles.background}>
        <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:24, color: 'lightblue'}}>CONNEXION</Text>
          <Image
            source={require('../../../assets/img/mobileLogin.gif')}
            style={styles.image}
          />
          {/* ************************* MAIL ************************ */}
          <View style={styles.emailBox}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={text => onChange(text)}
                  placeholder={'email'}
                  value={value}
                />
              )}
              name="email"
              defaultValue="user80@hotmail.fr"
            />
          </View>
          {errors.email?.message ? (
            <Text style={styles.error}>{errors.email?.message}</Text>
          ) : null}
          {/* **************************************************** */}

          {/* ************************* PASSWORD ************************ */}
          <View style={styles.passwordBox}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={() => {
                    setShowRegex(false);
                    onBlur;
                  }}
                  onFocus={() => setShowRegex(true)}
                  style={{width: '90%'}}
                  onChangeText={text => onChange(text)}
                  placeholder={'Mot de passe'}
                  secureTextEntry={hidePass ? true : false}
                  value={value}
                />
              )}
              name="password"
              defaultValue=""
            />
            <Icon
              name={hidePass ? 'eye-off' : 'eye'}
              size={20}
              color="#4B6D72"
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          {showRegex ? (
            <Text style={{textAlign: 'center', width: '80%'}}>
              Le mot de passe doit contenir au moins 8 Caractères (dont 1
              Majuscule, 1 Minusucle, 1 Caractère spécial et 1 Numéro)
            </Text>
          ) : null}
          {errors.password?.message ? (
            <Text style={styles.error}>{errors.password?.message}</Text>
          ) : null}
          {/* ********************************************************* */}


          {/* ************************* BUTTON ************************ */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSignIn)}>
            <Text style={styles.title}>Me connecter</Text>
          </TouchableOpacity>
          <View style={styles.loginText}>
            <Text>Pas encore inscrit ?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={{color: '#75CFB8'}}> S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FEFEFE',
    padding: 5,
    width: '97%',
    marginTop: '35%',
  },
  image: {
    flex: 1,
    height: 200,
    width: 200,
  },
  emailBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    width: '80%',

    paddingHorizontal: 20,
    backgroundColor: '#FBFBFB',
    elevation: 2,
  },
  passwordBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
    width: '80%',
    paddingHorizontal: 20,
    backgroundColor: '#FBFBFB',
    elevation: 2,
  },
  error: {
    color: 'red',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    width: 140,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#284065',
    borderRadius: 25,
    margin: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    flexDirection: 'row',
  },
});

export default LoginForm;
