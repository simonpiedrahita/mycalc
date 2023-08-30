import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texts:{
      color:'red',
      fontSize:22
    }
  });

  const myimage = StyleSheet.create({
    images:{
        width:'100%',
        height:'100%'
    }
  })

  export {styles, myimage}