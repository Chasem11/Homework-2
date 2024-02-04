# Web Development Project 2 - *FlashCard App*

Submitted by: **Chase Moffat**

This web app: My project is a set of 10 flashcards containing facts about the solar system and space. My project works by defining an array of dictionaries that store the information to display on the flashcards. My project utilizes use state to intially start at index zero, at the bottom of the page there are buttons that can flip to the next card. When the button is pressed a random index is calculated and is then passed to the usestate to display the card at that index. I also have a FlashCard component that takes the array of dictionaries as a prop. The inforamtion from the prop is then displayed in the FlashCard component. In the FlashCard component I also utilize the use state fucntion to initially show the question side of the card. When the card is clicked the use state is updated to then show the back side of the card. I also have a use effect function to make sure each card starts with the question showing. 

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Video Walkthrough](https://github.com/COP4808-Spring2024-Full-Stack-Webdev/hw2-Chasem11/blob/main/src/assets/Project2.gif?raw=true)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

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
