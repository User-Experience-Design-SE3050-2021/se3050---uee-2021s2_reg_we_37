import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TypePrescription = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 3,
        text: 'How much for these medicine',
        createdAt: new Date(),
        user: {
          _id: 2
        },
      },
      {
        _id: 2,
        text: 'This is the list',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
      {
        _id: 1,
        text: 'Panadol - 5 cards\n  Deepheat - 2 tubes\n  Vitamin C - 5 cards\n  Vitamin E - 3 cards',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        
      },
      {
        _id: 4,
        text: 'Please type your prescription',
        createdAt: new Date(),
        user: {
          _id: 1,
        },
        
      },
      {
        _id: 5,
        text: 'Hey Abarna',
        createdAt: new Date(),
        user: {
          _id: 1,
        },
        
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#0FC1A7"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#0FC1A7',
          },
          left: {
            backgroundColor: '#fff',
            borderColor: '#0FC1A7',
            borderWidth: 1,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
            fontSize:12,
          },
          left: {
            color: '#000',
            fontSize:12,
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 2,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      renderAvatar={null}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default TypePrescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 