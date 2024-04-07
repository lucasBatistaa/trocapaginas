import React, { useState } from 'react';
import { View, Text } from 'react-native';

import CreatePassword from '../../components/CreatePassword/index.jsx';

export default function resetPassword (){
    return (
        <View>
            <Text> ALTERAR SENHA </Text>
        
            <CreatePassword
                buttonText={"ALTERAR"}
            />
        </View>
    )
}