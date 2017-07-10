Archery Notes
=============

I want this to replace my ArcheryScorer app, just to show off my react native skills

### Note
* This is broken / will not compile, wait for react native 46.1 then retry
* Also can't seem to run react-native link?

### Setup
1. react-native-navigation - super buggy, many things missing, native.
    * react-navigation - JS only, still pretty quick and super flexible (better?)
        * I think I'd only recommend this if its super smooth + Drawer works the way native does
    * Initial review: react-navigation is not particularly easy to set up for a complex app, api is not easy to use
2. redux:add
    * Made a node module redux-add
3. eslint
    * flow?
4. testing
    * flow?
5. release (android)
6. fonts (maybe?)
7. Show versions page
8. Show dev debugger - redux-devtools
9. Add kotlin + native bridge stuff

Just an old package:

```
		"redux:add": "node custom-scripts/redux.js",
		"release:android": "cd android && ./gradlew assembleRelease",
    "lint": "eslint .",
		"cdapk": "cd android/app/build/outputs/apk"
	},
	"dependencies": {
		"babel-eslint": "^7.2.3",
		"eslint": "^4.1.1",
		"eslint-plugin-import": "^2.7.0",
		"eslint-plugin-jsx-a11y": "^6.0.2",
		"eslint-plugin-react": "^7.1.0",
		"eslint-plugin-react-native": "^2.3.2",
		"moment": "^2.18.1",
		"react": "16.0.0-alpha.12",
		"react-native": "0.45.1",
		"react-native-image-picker": "^0.26.3",
		"react-native-navigation": "^1.1.112",
		"react-native-swiper": "^1.5.4",
		"react-native-vector-icons": "^4.2.0",
		"react-native-version-number": "^0.1.2",
		"react-redux": "^5.0.5",
		"realm": "^1.8.1",
		"redux": "^3.7.0"
	},
	"devDependencies": {
		"babel-jest": "20.0.3",
		"babel-preset-react-native": "2.0.0",
		"jest": "20.0.4",
		"react-test-renderer": "16.0.0-alpha.12"
	},
	"jest": {
		"preset": "react-native"
	},
	"rnpm": {
		"assets": [
			"./fonts"
		]
	}
}
```
