import supertest, { SuperAgentTest } from 'supertest'
import application from '../app'

let app: SuperAgentTest

beforeAll(async () => {
    app = supertest.agent(application)
})

it('should return 200 when calling `/`',
async () => {
    const { status } = await app.get('/')
    expect(status).toBe(200)
})
