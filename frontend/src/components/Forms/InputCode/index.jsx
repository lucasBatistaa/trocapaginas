import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

export default function InputCode ({onSubmit}) {
  const [confirmationCode, setConfirmationCode] = useState('');
  const inputs = [];

  const handleChangeText = (index, value) => {
    const newConfirmationCode = confirmationCode.split('');
    newConfirmationCode[index] = value;
    setConfirmationCode(newConfirmationCode.join(''));
    onSubmit(newConfirmationCode.join(''));
  };

  for (let i = 0; i < 4; i++) {
    inputs.push(
      <TextInput
        key={i}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value={confirmationCode[i] || ''}
        onChangeText={text => handleChangeText(i, text)}
      />
    );
  }

  return (
    <View style={styles.container}>
      {inputs}
    </View>
  );
};

