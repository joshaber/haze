exports.main = (req, res) => {
  const msg = "Hello comrade"
  console.log(`responding with "${msg}"`)
  res.send(msg)
}
