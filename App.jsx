import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'


export default function App() {
  return (
    <View style={ style.container}> 
      <View style={style.subcontainer} >
        <TouchableOpacity 
        style={style.btn}
        >
          <Text style ={style.btnTxt}> -

          </Text>

        </TouchableOpacity>

        <View style={style.counterContainer} >
        <Text style ={style.counter}> 0 </Text>
        </View>

        <TouchableOpacity 
        style={style.btn}
        >
          <Text style ={style.btnTxt}> +

          </Text>

        </TouchableOpacity>


      </View>
     
      
    </View>
  )
}

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    justifyContent: "center"

  },

  subcontainer: {
    height:50,
    width:"100%",
    paddingHorizontal: 10,
    flexDirection: "row",

  },

  btn: {
    width:50,
    height: 50,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"green"
  }, 

  btnTxt:{
    fontSize: 18,
    color: "red",
    fontWeight: "bold"

  },

  counterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  counter: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold"

  }


})