# React Starter Kit (softcom.ng)

Based on [kenshinman](https://github.com/kenshinman)'s [react-redux-base](https://github.com/kenshinman/react-redux-base)

## Modifications

1. Add `.prettierrc`. Install `prettier` and [prettier-vscode](https://github.com/prettier/prettier-vscode) and add `pretty` script command.

        yarn add prettier -D

1. Add `.eslintrc.js`
1. Add `lint` script command
1. Install `classnames`
1. Install and use `redux-logger`
1. Add and configure `enzyme` test library. [Guide](https://alligator.io/react/testing-react-redux-with-jest-enzyme/)

        yarn add -D enzyme enzyme-adapter-react-16 enzyme-to-json
        yarn add -D redux-mock-store
        yarn add -D babel-jest @babel/core @babel/preset-env @babel/preset-react
        yarn add -D sinon chai
        yarn add -D @babel/plugin-proposal-class-properties
1. Mock out css styles in jest
