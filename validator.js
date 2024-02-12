(async () => {
    const validator = require('html-validator')
    const { readFileSync } = require('fs')
    const options = {
      format: 'text',
      data: readFileSync('index.html', 'utf8')
    }
    
    try {
      const result = await validator(options)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  })()