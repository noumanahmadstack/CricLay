import { FC } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
const CommaSepratedData: FC<{ title: string; description?: string, style?: StyleProp<ViewStyle>, sepratorStyle?: StyleProp<ViewStyle> }> = ({
  title,
  description,
  style,
  sepratorStyle
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.seprator, sepratorStyle]} />
      <Text style={styles.listedTitle}>{title}</Text>
      {description ? (
        <Text style={styles.playerName}>{description}</Text>
      ) : null}
    </View>
  );
};
export default CommaSepratedData;
