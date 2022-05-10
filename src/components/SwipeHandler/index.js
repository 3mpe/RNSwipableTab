import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { State, TapGestureHandler } from "react-native-gesture-handler";

export default function SwipeHandler({ children, onSwipeNext, onSwipePrevious }) {
    const [startPosition, setStartPosition] = useState(0);

    const onHandlerStateChange = ({ nativeEvent }) => {
        const { x, state } = nativeEvent;

        if (state === State.BEGAN) { setStartPosition(x); }
        if (state === State.END) { 
            const endPosition = x;

            const isNext = (startPosition - endPosition) > 0;
            const isPrevious = (startPosition - endPosition) < 0;

            if (isNext) onSwipeNext();
            else if (isPrevious) onSwipePrevious();

            setStartPosition(0);
        }
    };

    return (
        <TapGestureHandler onHandlerStateChange={onHandlerStateChange} >
            <View style={styles.container}>
                {children}
            </View>
        </TapGestureHandler>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
