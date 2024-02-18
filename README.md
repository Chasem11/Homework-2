# Web Development Project 3 - *FlashCard App*

Submitted by: **Chase Moffat**

This web app: This web app: My project is a set of 10 flashcards containing facts about the solar system and space. My project works by defining an array of dictionaries that store the information to display on the flashcards. My project initializes with a start button for the user to press, when the button is pressed the first card is shown. My project utilizes use state to intially start at index zero, at the bottom of the page there are buttons that can flip to the next card. There is also a button for the user to shuffle the deck andd randomize the order of the cards. I also have a FlashCard component that takes the array of dictionaries as a prop. The inforamtion from the prop is then displayed in the FlashCard component. In the FlashCard component I also utilize the use state fucntion to initially show the question side of the card. The user can then input their answer inside the text box. When the answer is submitted the back side of the card shows displaying if the user was correct or incorrect in their guess. I also have a use effect function to make sure each card starts with the question showing.

Time spent: **3.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Video Walkthrough](https://github.com/COP4808-Spring2024-Full-Stack-Webdev/hw3-Chasem11/blob/main/src/assets/Project3.gif?raw=true)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

I had a challenge where the answer for the next card would show for a breif second when I went to the next question. I was not able to fix this problem. I tried editing  my css for the transitions but I couldnt get this bug to go away. 

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
