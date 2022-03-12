# Level Up Tutorials JavaScript Testing 101

## Help Support

1. https://www.youtube.com/watch?v=D9DdY2WmM-s&ab_channel=LevelUpTuts

2. https://www.youtube.com/watch?v=b3VJVwQzw_Q&ab_channel=LevelUpTuts

3. https://www.youtube.com/watch?v=QzznzOlkgGw&ab_channel=LevelUpTuts

https://www.leveluptutorials.com/store

## How To Use

```
git clone https://github.com/leveluptuts/Level-Up-JavaScript-Testing-101.git
cd Level-Up-JavaScript-Testing-101
npm install
npm test
```

Then follow along on Youtube


# Troubleshooting

## Upgrade to Babel 7: Cannot read property 'bindings' of null

https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null

In your .babelrc file, change

```{ "presets": ["env"] } ```


to

```{ "presets": ["@babel/preset-env"] }```
