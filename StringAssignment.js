let story = "Cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either. They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back. Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended. Pop quiz: what’s the greatest thing to happen to your mind, body, and soul in recent history? A cheeseburger, obviously. Cheeseburgers know that what you want can also be what you need."


//replacing cheeseburgers to hamburgers
let hamburgersStory = story.replace(/Cheeseburgers/gi, 'Hamburgers')
console.log(hamburgersStory)

//capitalizing all bun occurences
var storyArray= story.split(' ')
for (let i = 0; i < storyArray.length; i++) {
    if (storyArray[i] == 'bun') {
        storyArray[i] = storyArray[i].toUpperCase()
    }
}
let bunStory = storyArray.join(' ')
console.log(bunStory)

//getting story length and words count
let storyLength = story.length
let wordsCount = story.split(' ').length


console.log(`There are ${storyLength} characters in the story`)
console.log(`There are ${wordsCount} words in the story`)