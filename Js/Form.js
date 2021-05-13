class Form
{
    constructor()
    {
      this.title = createElement("h2")
      this.input = createInput("name")
      this.button = createButton("play")
      this.greeting = createElement("h3")
      this.reset = createButton("Reset")
    }
    display()
    {
      this.title.html("CarRacingGame")
      this.title.position(width/2 - 50,100)

      this.input.position(width/2 - 120, 200)

      this.button.position(width/2 - 120, 250)
      this.button.mousePressed(() =>
      {

        this.input.hide()
        this.button.hide()

       var name = this.input.value()
       this.greeting.html("Hello " + name)
       this.greeting.position(width/2 - 120,250)

       playerCount = playerCount+ 1
       player.updateCount(playerCount)
       player.name = name
       player.index = playerCount
       player.update()
      })

      this.reset.position(width - 100,60)

      this.reset.mousePressed(()=> 
      {
        console.log("RESET")

        game.updateState(0)
        player.updateCount(0)
        //database.ref("/").update({"playerCount": 0})

        window.location.reload()

      })
    }

    hideform()
    {
      this.greeting.hide()
      this.button.hide()
      this.input.hide()

    }
}