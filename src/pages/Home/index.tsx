import React from "react";
import { ScrollView, StyleSheet, View,TouchableOpacity,Text, Image } from "react-native";
import {  Card } from "react-native-elements";

const Home = () =>{
    
    return(
        <ScrollView style = {styles.container}>
            <Text>{'Categorias'}</Text>
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
        <ScrollView style={styles.container_recentes} horizontal = {true}>
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
        <Text>{'Mais Pedidos da sua Região'}</Text>
        <ScrollView>
        <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                {/* <Image source={{uri: 'asset:/lombinho.jpg'}} 
                style={styles.stretch}/> */}
                <Image source={require('../../assets/lombinho.jpeg')}
                style={styles.stretch}
                />
                <Text style={styles.texto_pedidos}>{'Lombinho'}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={require('../../assets/frango-com-fritas.jpeg')}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={require('../../assets/feijoada.jpeg')}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={require('../../assets/frango-assado.jpeg')}
                style={styles.stretch}
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style = {styles.mais_pedidos}>
                <Image source={require('../../assets/yakisoba.jpeg')}
                style={styles.stretch}
                />
                </View>
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
    },
    mais_pedidos:{
        
        justifyContent:'center'
    },
    stretch: {
        width: 450,
        height: 500,
        resizeMode: 'stretch',
      },
      texto_pedidos:{
        textAlign:"center",
        backfaceVisibility:"hidden",
        fontSize:23,
        color:'#f5ebeb'
      }
    });
    
    export default Home;