<p align="center">
  <img src="https://i.ibb.co/N7RjwTk/headerseuchef.png">
</p><br>

[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/petruspierre/seuchef)

### SeuChef is an mobile application to **share** and **discover** recipes easily.

![Screenshots](https://i.ibb.co/jh8kkBt/Group-19.png)

---

## Features
- Share your own recipes;
- Discover new recipes;
- Favorite recipes for easy access later;
- Search recipes by name and category;
- User register with email code confirmation.

## Main technologies 

- [React Native](https://reactnative.dev/) v37.0.1
- [Expo](https://expo.io/) v37.0.3
- [Django](https://www.djangoproject.com/) v3.0.6

## How to Use

First of all you have to setup the backend in Django, so you will need:
- [Python 3](https://www.python.org/downloads/)
- PIP

Next you have to clone the [backend repo](https://github.com/pauloe314/receitas-backend/). Inside the directory you have to create a virtual environment with the follow command in your commandline:
```
$ python -m venv venv
```
and now you have to use your venv (command in Windows)
```
$ venv\Scripts\activate
```
so finally you will install the dependences with:
```
(venv) ~$ python -m pip install --upgrade pip
(venv) ~$ pip install -r requirements.txt
```
and run the project
```
(venv) ~$ python manage.py runserver
```
> If you are not using emulator add yourIP:8000 in the end of the latter command.

Now your backend should be working as well.

**And for mobile:**

Make sure you have [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed

Clone this repo and install the project dependences
```
$ git clone https://github.com/petruspierre/seuchef.git .
$ yarn
```
and run the project
```
expo start
```
> if you don't have the expo installed you can use npx expo-cli start

### Important steps

In your ```node_modules/react-native-shimmer-placeholder/lib/ShimmerPlaceholder.js``` change the 5th line to ```import {LinearGradient} from "expo-linear-gradient";```

And in ```src/services/api.js``` change the ```baseURL``` to the IP where is running the backend

---

## Acknowledgments
- Images and recipes from [TudoGostoso](https://www.tudogostoso.com.br/)
- [Quicksand](https://fonts.google.com/specimen/Quicksand?query=quick) and [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) fonts from [Google Fonts](https://fonts.google.com/)

## Authors
- [Petrus Pierre](https://github.com/petruspierre/) [Mobile]
- [Paulo Eduardo](https://github.com/pauloe314/) [Backend]

<p align="right">Made with 🖤 by Nocton</p>
