# Configuring-ESLint-in-a-Node.js-Project

When setting up the ESlint There were many options that seemed to be good choices and I googled what the common settup which was leaning towards javascript and only deviating when I was going to be using node.js. There were no issues till the end when I tried to run this did it throw an error saying it could not work I was able to run this command

```
npm i -D eslint@9.39.4 @eslint/js@^9 eslint-plugin-react@^7 globals
```

That seemed to fix the issue and in my simple Hello World .js file it found 3 errors but nothing that could be fixed so I would need to tweak the config to not throw errors when there should not be one. This tool could help me develop multiple checks before I send code out to test so that way it is organized and well written following best practices.
