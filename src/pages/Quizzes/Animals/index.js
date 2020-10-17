import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler'

import { AnimalsQuiz } from '../quizData' 

import styles from '../styles'

export default class Animals extends Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    image: [],
    score: 0,
    disabled: true,
    isEnd: false,
  };

  loadAnimalsQuiz = () => {
    this.setState(() => {
      return {
        questions: AnimalsQuiz[this.state.currentQuestion].question,
        answer: AnimalsQuiz[this.state.currentQuestion].answer,
        options: AnimalsQuiz[this.state.currentQuestion].options,
        image: AnimalsQuiz[this.state.currentQuestion].image
      };
    });
  };

  componentDidMount() {
    this.loadAnimalsQuiz();
  }
  nextQuestionHandler = () => {
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: AnimalsQuiz[this.state.currentQuestion].question,
          options: AnimalsQuiz[this.state.currentQuestion].options,
          answer: AnimalsQuiz[this.state.currentQuestion].answer,
          image: AnimalsQuiz[this.state.currentQuestion].image
        };
      });
    }
  }
  
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };

  finishHandler = () => {
    if (this.state.currentQuestion === AnimalsQuiz.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };


  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    const { navigation } = this.props

    if (isEnd) {
      return (
          <View style={styles.container}>
            <View style={{ marginTop: '20%'}}>
              { this.state.score === 1 ? (
                <Text style={styles.msgFinishGame}>Fim de jogo! Sua pontuação final foi de: {this.state.score} ponto </Text> 
              ) : (
                <Text style={styles.msgFinishGame}>Fim de jogo! Sua pontuação final foi de: {this.state.score} pontos </Text> 
              )}       
            </View>

            <View style={{ marginTop: '10%'}}>
              <Text style={styles.subtitle}>As respostas corretas para as perguntas eram:</Text>
                {AnimalsQuiz.map((item, index) => (
                  <Text style={styles.questionsCorrects} key={index}>
                    {item.answer}
                  </Text>
                ))}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Text style={[styles.btn, styles.btnFinish, { width: '45%', marginTop: '10%'}]}>Continuar</Text>
            </TouchableOpacity>
          </View>
      );
    } else {
      return (
        <ScrollView>
        <View style={styles.container}>
          <RectButton onPress={() => navigation.navigate('Menu')} style={styles.icon}>
            <AntDesign name="back" size={30} color="#fff" />
          </RectButton>

          <View style={{ marginTop: '5%'}}>
            <View>
              <Text style={styles.title}>{this.state.questions} </Text>
              <Image style={styles.image} source={this.state.image} />
            </View>

            <View>
              <View style={styles.questionsContainer}>
                {options.map(option => (
                    <Text
                      key={option.id}
                      style={myAnswer === option ? [styles.questions, styles.selected] : styles.questions}
                      onPress={() => this.checkAnswer(option)}
                    >
                      {option}
                    </Text>
                ))}
              </View>

              <View style={styles.line}></View>

              {currentQuestion < AnimalsQuiz.length - 1 && (
                <TouchableOpacity
                  disabled={this.state.disabled}
                  onPress={this.nextQuestionHandler}
                >
                  <Text style={[styles.btn, styles.btnNext]}>Próxima</Text>
                </TouchableOpacity>
              )}

              {currentQuestion === AnimalsQuiz.length - 1 && (
                <TouchableOpacity onPress={this.finishHandler}>
                  <Text style={[styles.btn, styles.btnFinish]}>Finalizar</Text>
                </TouchableOpacity>
              )}
            </View>

          </View>
        </View>
        </ScrollView>
      );
    }
  }
}