import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {IconSizes, IconProps} from './Icon';
import { Text } from "react-native";

Icon.loadFont();

type IconButtonProps = IconProps & {
  text: string;
  onPress: () => void;
};

export const IconButton = ({
  onPress,
  size,
  name,
  color,
  text,
}: IconButtonProps) => (
  <Icon.Button
    onPress={onPress}
    name={name}
    size={IconSizes[size]}
    color={color}>
    <Text>{text}</Text>
  </Icon.Button>
);