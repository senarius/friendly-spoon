import app from './app'

const PORT: string | number = process.env.PORT || 4000

try {
  app.listen(PORT, (): void => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
} catch (error) {
  throw error
}