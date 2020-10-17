import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

import Home from '../pages/Home'
import Menu from '../pages/Menu';
import Tasks from '../pages/Tasks'

import Profile from '../pages/Profile';
import CreateTask from '../pages/Profile/CreateTask'

import EditProfile from '../pages/Profile/EditProfile'
import Validation from '../pages/Profile/CreateTask/Validation'
import EditTasks from '../pages/Profile/CreateTask/EditTasks'

import QuizAnimals from '../pages/Quizzes/Animals'
import Numbers from '../pages/Quizzes/Numbers'

function AppRoutes(){
    return(
    <Navigator>
      <Screen 
      name="Home" 
      component={Home}
      options={{headerShown: false}}
      />

      <Screen 
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />

      <Screen 
        name="Tasks"
        component={Tasks}
        options={{headerShown: false}}
      />

      <Screen 
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Screen 
        name="CreateTask"
        component={CreateTask}
        options={{headerShown: false}}
      />

      <Screen 
        name="EditTasks"
        component={EditTasks}
        options={{headerShown: false}}
      />

      <Screen 
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />

      <Screen 
        name="Validation"
        component={Validation}
        options={{headerShown: false}}
      />

      <Screen 
        name="QuizAnimals"
        component={QuizAnimals}
        options={{headerShown: false}}
      />

      <Screen 
        name="Numbers"
        component={Numbers}
        options={{headerShown: false}}
      />

    </Navigator>
    );
}

export default AppRoutes;
