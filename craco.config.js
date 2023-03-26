const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    // ...
    webpack: {
        alias: {
            '@utility': resolvePath('./src/utility'),
            '@mathExamples': resolvePath('./src/math-examples')
        }
    },
  // ...
}