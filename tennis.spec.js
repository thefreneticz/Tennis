test('Echo "Love - Love" when game start', () => {
    // Arrange
    let app = new TennisGame()
    // Act
   app.reset()
   let result = app.echo()
   // Assert
   expect(result).toBe('Love - Love')
})
test('Echo "Fifteen - Love" when playerA get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerAGetScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Fifteen - Love')
})
test('Echo "Love - Fifteen" when playerB get first score', () => {
  // Arrange
  let app = new TennisGame()
  app.reset()
  app.playerBGetScore()

  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Love - Fifteen')
})
test('Echo "Thirty - Fifteen" when score is 30 - 15', () => {
  // Arrange
  let app = new TennisGame()
  app.reset()
  app.playerBGetScore()
  app.playerAGetScore()
  app.playerAGetScore()

  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Thirty - Fifteen')
})
