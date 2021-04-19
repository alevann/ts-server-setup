import 'module-alias/register'
import '@src/ext'

import app from './app'

const port = process.env.PORT ?? 5000
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`)
    console.log(`Testing extensions... (expected: 0, got: ${[0, 1, 2].first})`)
    console.log(`                      (expected: 2, got: ${[0, 1, 2].last})`)
    console.log(`                      (expected: 1, got: ${[0, 1, 2].remove(1)})`)
})
