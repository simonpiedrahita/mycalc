import { View, Text} from "react-native";
import {styles, myimage} from '../assets/styles/styles1'


function Banner(props) {
    return (
      <View>
        <Text style={styles.texts}>{props.title}</Text>
        <Text>{props.subtitle}</Text>
      </View>
    );
}

export default Banner;
  