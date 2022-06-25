import React from "react";
import { ScrollView, StyleSheet, View,TouchableOpacity } from "react-native";
import { Text, Card } from "react-native-elements";

const Home = () =>{
    
    return(
        <ScrollView style = {styles.container}>
        <ScrollView style = {styles.scrollCategoria} horizontal = {true}>
            <TouchableOpacity
            onPress={() => console.log('Categoria 1 Clicada')}
            style = {styles.botao_categoria}
            >
            <View style = {styles.view}>
                <Text style = {styles.text_categoria}>{'Categoria 1'}</Text>
            </View>
            </TouchableOpacity>
       
            <TouchableOpacity
            onPress={() => console.log('Categoria 2 Clicada')}
            style = {styles.botao_categoria}
            >
            <View style = {styles.view}>
                <Text style = {styles.text_categoria}>{'Categoria 2'}</Text>
            </View>
            </TouchableOpacity>
        
            <TouchableOpacity
            onPress={() => console.log('Categoria 3 Clicada')}
            style = {styles.botao_categoria}
            >
            <View style = {styles.view}>
                <Text style = {styles.text_categoria}>{'Categoria 3'}</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => console.log('Categoria 4 Clicada')}
            style = {styles.botao_categoria}
            >
            <View style = {styles.view}>
                <Text style = {styles.text_categoria}>{'Categoria 4'}</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>
        <Text>{'Recentes'}</Text>
        <ScrollView horizontal = {true}>
        <TouchableOpacity>
            <Card >
                <Card.Image source={require('../../assets/a.jpg')}/>
                <Card.Divider/>
                <Card.Title>
                    Titulo
                </Card.Title>
                <Text> {'Descrição'}</Text>
            </Card>
            </TouchableOpacity>
        </ScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fdd873',
      padding: 16
    },
    scrollCategoria:{
        flexGrow: 0
    },
    view:{
        with: 120,
        height: 120,
        backgroundColor: '#ff0000',
        justifyContent:'center'
    },
    botao_categoria:{
        alignItems:'center',
        padding: 10
    },
    text_categoria:{
        color: '#fff',
        textAlign:'center',
        fontWeight:'bold'
    }
    
    })
    export default Home;