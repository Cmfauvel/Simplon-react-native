import * as React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { FieldError } from 'react-hook-form';

interface Props extends TextInputProps {
  name: string
  label?: string
  labelStyle?: TextStyle
  error?: FieldError | undefined
}

export default React.forwardRef<any, Props>(
  (props, ref): React.ReactElement => {
    const { label, labelStyle, error, ...inputProps } = props

    return (
      <View style={styles.container}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <TextInput
          autoCapitalize="none"
          ref={ref}
          style={[
            styles.inputContainer,
            { borderColor: error ? '#fc6d47' : '#c0cbd3' },
          ]}
          {...inputProps}
        />
        <Text style={styles.textError}>{error && error.message}</Text>
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {
  },
  label: {
  },
  inputContainer: {
      fontSize: 24,
      fontWeight: "600", 
  },
  textError: {
    fontSize: 18,
    fontWeight: "300",
    textAlign: 'center',
    padding: 20
  },
});