import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import { FeatherIcon } from "./Icon";
import { useModal } from "../state/useModal";

interface CardProps {
  title: string;
  paragraph?: string;
  tags?: string[];
}


const Card: React.FC<CardProps> = ({ title, paragraph, tags }) => {
  const { isShown, toggle } = useModal();
  console.log(isShown)

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Modal
            animationType = {"slide"}
            transparent={false}
            visible={isShown}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>
              <TouchableOpacity
              onPress={() => toggle(isShown)}>
              <FeatherIcon size="large" color="white" name="x" />
          </TouchableOpacity>  
              <Text style = { styles.textModal }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Maecenas eget tempus augue, a convallis velit.</Text>
                  <Text 
                style={styles.closeText}
                onPress={() => { console.log("click")
                  toggle}}>Close Modal</Text>
          </Modal>
      <View style={styles.headerCard}>
        <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity
              onPress={() => { console.log("click") 
              toggle(!isShown)}}>
              <FeatherIcon size="large" color="white" name="more-vertical" />
          </TouchableOpacity>  
      </View>
      
      <Text style={styles.paragraph}>x{paragraph}</Text>
      {
        tags?.map(tag => {
          return <Text style={styles.tag}>#{ tag }</Text>
        })
      }
    </View>
  );
};



const styles = StyleSheet.create({
  card: {
    width: '80%',
    marginLeft: '10%',
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    maxHeight: 150,
    flex: 1,
    padding: 10,
    backgroundColor: "#54A487",
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "300",
    color: "#FFFFFF",
  },
  tag: {
    color: "#FFFFFF",
  },
  textModal: {
    fontFamily: "Montserrat"
  },
  closeText: {

  }
});

export default Card;
