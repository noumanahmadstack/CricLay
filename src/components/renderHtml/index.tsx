import React, { FC } from 'react';
import {
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './styles';
const RenderHtmlComponent: FC<{ html: string }> = ({ html }) => {
    const { width } = useWindowDimensions();
    return (
        <ScrollView>
            <RenderHtml
                contentWidth={width}
                source={{ html }}
                baseStyle={styles.baseStyle}
            />
        </ScrollView>
    )
}
export default RenderHtmlComponent
