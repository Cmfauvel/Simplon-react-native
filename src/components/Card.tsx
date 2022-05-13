import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { FeatherIcon } from "./Icon";

interface CardProps {
  title: string;
  description?: string;
  categories?: string[];
  url?: string;
  author?: string;
  id?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  
  const [isShown, setIsShown] = React.useState<boolean>(false);
  console.log(isShown);

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isShown}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setIsShown(false)}
          >
            <FeatherIcon size="large" color="white" name="x" />
          </TouchableOpacity>
          <View style={styles.containerTextModal}>
            <Text style={styles.textModal}>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <p>{props.author}</p>
              { props.url && <p>{props.url}</p>}
              {props.categories?.map((tag) => {
                return (
                  <Text key={tag} style={styles.tag}>
                    {tag}, ' '
                  </Text>
                );
              })}
            </Text>
            <Text style={[styles.textModal, styles.commentsBloc]}>
            <h2>Commentaires</h2>
            </Text>
          </View>
        </View>
      </Modal>
      <View style={styles.headerCard}>
        <Text style={styles.title}>{props.title}</Text>

        <TouchableOpacity
          onPress={() => {
            console.log("click", isShown);
            setIsShown(true);
          }}
        >
          <FeatherIcon size="large" color="white" name="more-vertical" />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>{props.description}</Text>
      {props.categories?.map((tag) => {
        return (
          <Text key={tag} style={styles.tag}>
            #{tag}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#54A487",
    height: "100vh",
  },
  buttonClose: {
    position: "absolute",
    zIndex: 1000,
    right: 10,
    top: 10,
  },
  commentsBloc: {
    width: "90%",
    marginLeft: "5%",
    borderTopColor: "white",
    borderTopWidth: 1
  },
  card: {
    width: "80%",
    marginLeft: "10%",
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
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    color: "#FFFFFF",
  },
  tag: {
    color: "#FFFFFF",
  },
  containerTextModal: {
    display: "flex",
  },
  textModal: {
    color: "white",
    padding: 20,
    marginTop: 30,
  },
});

export default Card;
