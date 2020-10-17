import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native'
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if(storageUser){
          setUser(JSON.parse(storageUser));
          setLoading(false);
      }
      setLoading(false);
    }
  
  loadStorage();
  }, []);

  //Funcao para logar o usario
  async function signIn(email, password){
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value)=>{
        let uid = value.user.uid;
        await firebase.database().ref('users').child(uid).once('value')
        .then((snapshot)=>{
          let data = {
            uid: uid,
            nome: snapshot.val().nome,
            idade: snapshot.val().idade,
            nomeResponsavel: snapshot.val().nomeResponsavel,
            email: value.user.email,
          };

          setUser(data);
          storageUser(data);
          setLoadingAuth(false);
        })
    })
    .catch((error)=> {
      if(error.code === 'auth/invalid-email') {
        Alert.alert('Ops...', 'Email inválido!')
      } else if(error.code === 'auth/wrong-password') {
        Alert.alert('Ops...', 'Senha incorreta!')
      }
      else if(error.code === 'auth/user-not-found') {
        Alert.alert('Ops...', 'Esse usuário não existe!')
      } else if(error.code === 'auth/network-request-failed') {
        Alert.alert('Ops...', 'Sem conexão com a internet!')
      }
      else {
        alert(error.code);
      }
      setLoadingAuth(false);
    });
  }
  
  //Cadastrar usuario
  async function signUp(email, password, nome, idade, nomeResponsavel){
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(async (value)=>{
        let uid = value.user.uid;
        await firebase.database().ref('users').child(uid).set({
          nome: nome,
          idade: idade,
          nomeResponsavel: nomeResponsavel
        })
        .then(()=>{
          let data = {
            uid: uid,
            nome: nome,
            idade: idade,
            nomeResponsavel: nomeResponsavel,
            email: value.user.email,
          };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error)=> {
      if(error.code === 'auth/invalid-email') {
        Alert.alert('Ops...', 'Email inválido!')
      } else if(error.code === 'auth/weak-password') {
        Alert.alert('Ops...', 'Essa senha é muito fraca!')
      } else if(error.code === 'auth/email-already-in-use') {
        Alert.alert('Ops...', 'Esse email já está sendo usado!')
      }
      else {
        alert(error.code);
      }
      setLoadingAuth(false);
    });
  }

  async function storageUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function signOut(){
    await firebase.auth().signOut();
    await AsyncStorage.clear()
    .then(() => {
      setUser(null); 
    })

  }

  return(
    <AuthContext.Provider value={{ signed: !!user , user, loading, signUp, signIn, signOut, loadingAuth }}>
      {children}
    </AuthContext.Provider>   
  );
}

export default AuthProvider;