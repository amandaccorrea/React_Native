import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Icon, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


 const Login =({navigation})=>{

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')

  const handleLogin =({email, senha}) =>{
    console.log(`E-mail: ${email} - Senha: ${senha}`);
    // console.log("Email : ", email, "Senha :", senha);
    navigation.navigate('Home')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto_entrada}>
        {'Bem-vindo'}
        </Text>
        <Input
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
          leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24}/>}
        />
        <Input
          placeholder="Senha"
          onChangeText={setSenha}
          value={senha}
          leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24}/>}
        />
        <Button
          title='Entrar'
          onPress={() => handleLogin({ email, senha })}

        />
        {/* <TouchableOpacity onPress={()=>({email,senha})} style = {styles.botao}>
            <Text>{'Entrar'}</Text>
        </TouchableOpacity> */}
      
    </View>
  )
 }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fdd873',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
  }, 
  texto_entrada:{
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 10,
      color: '#12447f'
  },
  botao:{
    backgroundColor: '##f6a7a9',
    borderRadius:5
  }
})
export default Login;