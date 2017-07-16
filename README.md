Archery Notes
=============

I want this to replace my ArcheryScorer app, just to show off my react native skills

Commands
--------
```bash
# Install everything initially
yarn

# To run Flow type checking (there's probably a watch function too) (starts a flow server)
yarn run flow
# When you're done
yarn run flow stop

# linter
yarn lint

# tests
yarn test
yarn test -- --watch #great for multi monitor
yarn test -- --coverage # This one is kinda slow

# run:
react-native run-ios
react-native run-android
```

Setup
-----
1. react-native-navigation - super buggy, many things missing, native.
    * react-navigation - JS only, still pretty quick and super flexible (better?)
        * I think I'd only recommend this if its super smooth + Drawer works the way native does
    * Initial review: react-navigation is not particularly easy to set up for a complex app, api is not easy to use
2. redux:add
    * Made a node module redux-add
3. eslint
    * flow?
4. testing
5. release (android)
6. fonts (maybe?)
7. Show versions page
8. Show dev debugger - redux-devtools
9. Add kotlin + native bridge stuff
10. Code push
11. Push notifications
12. iOS Support?
13. Travis/CI support

Notes
-----
* StatusBar: https://github.com/wix/react-native-navigation/issues/453
