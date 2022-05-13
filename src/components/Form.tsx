import React, {useState} from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { ressourceToAdd } from "../store/actions/ressources.actions";
import { action_ressource } from "../store/types/actions.type";
import crypto from 'crypto';

const Form = (props: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const id = Math.random().toString();
  
  const data: action_ressource['payload'] = {
      id,
      title,
      description,
      author,
      ...(category.length > 0 && {category}),
      ...(url.length > 0 && {url}),
    };
    
  const add = () => dispatch(ressourceToAdd(data as any))

  return (
    <>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            placeholder='Titre...'
            placeholderTextColor='white'
            value={title} />
          <TextInput
            style={styles.areaInput}
            onChangeText={setDescription}
            placeholder='Description...'
            placeholderTextColor='white'
            value={description} />
          <TextInput
            style={styles.input}
            onChangeText={setAuthor}
            placeholder='Auteur...'
            placeholderTextColor='white'
            value={author}
          />
          {props.formType === 'ressource' &&
          <>
            <TextInput
              style={styles.input}
              onChangeText={setCategory}
              placeholder='Catégorie...'
              placeholderTextColor='white'
              value={category}
            />
            <TextInput
              style={styles.input}
              onChangeText={setUrl}
              placeholder='Url...'
              placeholderTextColor='white'
              value={url}
            />
          </>
          }
          <Button title='ADD' onPress={add} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#99D2BD",
    color: 'white',
    width: 300,
    height: 40,
    margin: 12,
    padding: 10,
  },
  areaInput: {
    backgroundColor: "#99D2BD",
    color: 'white',
    width: 300,
    height: 80,
    margin: 12,
    padding: 10,
  }
});

export default Form;
