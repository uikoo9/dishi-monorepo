module.exports = {
  '**/*': () => ['npm run prettier', 'npm run eslintfix', 'npm run test'],
};
