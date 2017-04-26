module.exports = function(bp) {
  bp.middlewares.load()
}

module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear(/hello/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.slack.sendText(event.user.id, 'Hello, ' + first_name, { typing: true })
  })
}