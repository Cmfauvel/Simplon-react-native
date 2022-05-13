import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { bugToAdd } from "../store/actions/bugs.actions";
import { commentToAdd } from "../store/actions/comments.actions";
import { ressourceToAdd } from "../store/actions/ressources.actions";
import { FeatherIcon } from "./Icon";

const Form = (props: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  let categories: any = [];

  const dispatch = useDispatch();
  const id = Math.random().toString();

  const add = () => {
    categories = category.split(",");
    const data: any = {
      id,
      ...(title.length > 0 && { title }),
      description,
      author,
      ...(categories.length > 0 && categories),
      ...(url.length > 0 && { url }),
    };
    if (props.formType === "ressource") {
      dispatch(ressourceToAdd(data as any));
    } else if (props.formType === "bug") {
      dispatch(bugToAdd(data as any));
    } else if (props.formType === "comment") {
      dispatch(commentToAdd(data as any));
    }
  };

  const addCategory = () => {};

  return (
    <>
      {props.formType === "ressource" ||
        (props.formType === "bug" && (
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            placeholder="Titre..."
            placeholderTextColor="white"
            value={title}
          />
        ))}
      <TextInput
        style={styles.areaInput}
        onChangeText={setDescription}
        placeholder={
          props.formType === "comment" ? "Commentaire..." : "Description..."
        }
        placeholderTextColor="white"
        value={description}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAuthor}
        placeholder="Auteur..."
        placeholderTextColor="white"
        value={author}
      />
      {props.formType === "ressource" && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setCategory}
            placeholder="Catégories..."
            placeholderTextColor="white"
            value={category}
          />

          <TextInput
            style={styles.input}
            onChangeText={setUrl}
            placeholder="Url..."
            placeholderTextColor="white"
            value={url}
          />
        </>
      )}
      <TouchableOpacity onPress={add}>
        <FeatherIcon
          size="large"
          color="#54A487"
          name="arrow-right"
        ></FeatherIcon>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#99D2BD",
    color: "white",
    width: 300,
    height: 40,
    margin: 12,
    padding: 10,
  },
  areaInput: {
    backgroundColor: "#99D2BD",
    color: "white",
    width: 300,
    height: 80,
    margin: 12,
    padding: 10,
  },
});

export default Form;
