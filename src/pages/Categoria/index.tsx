import React from "react";
import { TouchableOpacity, ScrollView,Image,StyleSheet, View} from "react-native";

const Categoria = () =>{

    return(
        <>
        <ScrollView style={styles.container}>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/burger.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/cupcake.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/drink.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/hot-dog.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/ice-cream.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/noodle.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/piece-of-cake.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/french-fries.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/gingerbread.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/doughnut.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/croissant.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/crab.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/corn.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/cookie.png')} style={styles.icon} />
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/coffee-cup.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
            <ScrollView style={styles.parte_um} horizontal = {true}>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/chocolate-bar.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/apple.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            <View style={styles.view}>
            <TouchableOpacity>
                <Image source={require('../../assets/honey.png')} style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fdd873',
    padding: 16
  },
  parte_um:{
    display:'flex',
    flexDirection:'row',
    padding:16 
  },
  view:{
    padding: 10
  },
  icon:{
    width:90,
    height: 90
  }
})
export default Categoria;