import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';

const AskQuestions = (props) => {
  const _goBack = () => props.navigation.navigate('Welcome');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 3,
        text: 'What about the delivery charges?',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
      {
        _id: 4,
        text: 'Yes.We will deliver all over the island',
        createdAt: new Date(),
        user: {
          _id: 1
        },
      },
      {
        _id: 2,
        text: 'Do you have the delivery to Batticaloa?',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
      {
        _id: 1,
        text: 'I wish to order some common medicine',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        
      },
      {
        _id: 5,
        text: 'What do you want to know from us?',
        createdAt: new Date(),
        user: {
          _id: 1,
        },
        
      },
      {
        _id: 6,
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
    <><Appbar.Header style={{ backgroundColor: '#0FC1A7' }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Ask Questions" />
      </Appbar.Header>
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
    /></>
  );
};

export default AskQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});