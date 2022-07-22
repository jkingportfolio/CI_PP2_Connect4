# Connect 4
Developer: Jamie King

![Responsive image](docs/am-i-responsive.png)

[Connect 4](https://jkingportfolio.github.io/CI_PP2_Connect4/) website has been developed to provide users the chance to play the classic two player strategy game of Connect 4. The game consists of players taking turns to drop their counters into the game board with the aim of the game to have four of their own counters in a row horizontally, vertically or diagonally. 

## Table of Contents

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colours](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
    6. [Game Flowchart](#game-flowchart)
4. [Technologies Used](#technologies-used)
    1. [Coding Languages](#coding-languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
5. [Features](#features)
6. [Testing](#testing)
    1. [HTML Valiadation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device Testing](#device-testing)
    7. [Browser Compatibility](#browser-compatibility)
    8. [Testing User Stories](#testing-user-stories)
7. [Bugs](#bugs)
    1. [Code Bugs](#code-bugs)
    2. [Console Bugs](#console-bugs)
8. [Deployment](#deployment)
    1. [EmailJS API](#emailjs-api)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals

- A user would want to play a fun game of connect 4.
- A user would want to know the aim the game if this is their first time to play.
- A user would want to know what the controls of the game are.
- A user would want to have the option to play a computer opponent or with a friend (locally).
- A user would want to be able to check how many wins and losses they have had in their current session.

### Site Owner Goals

- As the site owner i wanted to create an enjoyable interactive game which was responsive over multiple devices.
- As the site owner i wanted to provide a fun user experience which would make users want to come back and play again. 
- As the site owner i wanted to allow my users to provide myself some feedback via a contact form.
- As the site owner i wanted to have the ability to connect with my users via GitHub and LinkedIn.

## User Experience

### Target Audience

- Casual gamers.
- Adults who want to teach their children a new game.
- People from all walks of life hoping to pass time.

### User Requirements and Expectations

- A great game with a high level of interactiveness to pass time and have fun with friends.
- Links and website functions to act as expected.
- Notifications to provide feedback as to the current state of play.
- Simple "to the point" content that a user can quickly digest.
- An easy method to leave feedback on the game with validation that feedback has been sent.
- Accessibility for impaired users.
- Responsiveness to allow play across devices of different screen sizes.

### User stories

1. As a user, I want to understand the aim of the game.
2. As a user, I want to chose between playing a friend locally or a computer opponent.
3. As a user, I want to be notified as to whos turn it is.
4. As a user, I want to be notified if my move is invalid.
5. As a user, I want to be notified with who won the game.
6. As a user, I want to be able to see the total wins and draws in the current session.
7. As a user, I want to be able to turn on and off in game music and sounds.
8. As a user, I want to be able to provide feedback to the site owner and confirmation the feedback was sent.
9. As a user, I want to be able to easily play another game once the current one has finished.
10. As a user, I want to be able to easily access options such as opponent type, audio settings and how to play.
11. As a user, I want to be able to play the game on a mobile device so i can play wherever i am.

### Site Owner Stories

12. As the site owner, I want users to be able to provide feedback via a contact form.
13. As the site owner, I want to connect with users via social networks.
14. As the site owner, I would want the user to be presented with a 404 page on the odd chance an error does occur.
15. As the site owner, I would not want the user to have to result in using the browser back button to navigate back to the site if a 404 error occurs.
16. As the site owner, I would want users to be warned that to best experience the game to have their mobile or tablet device in portrait mode.
17. As the site owner, I want users to be greeted with a welcome message to give a friendly feel to the site. 

## Design

### Design Choices

The game was designed with a clean simple design in mind. Using the original colours of the official game of a blue game board with red and yellow counters. This was done to induce a sense of nostalgia to older users and to make the game easily identifiable to younger users who may be new to the game. 

### Colours

The colour palette for the website is made up of 5 main colours:

- #FFFFFF (White)
- #000000 (Black)
- #FF0000 (Red)
- #FFFF00 (Yellow)
- #2B2EE2 (Blue)

The background gradient consists of 5 colours:

- #E0B5B5 
- #EABFB0
- #ECCBAD
- #D6DAAF
- #DAE9BA

When a button in New game or settings is active it is Green:

- #00C800

Two colours are used in the Winning Animation which flashes:

- #820000
- #828200

Two colours are used for the Stats button when active and inactive

- #CCCCCC
- #ACACAC

All colours contrast was tested using [EightShapes contrast grid](http://eightshapes.com/)

<details>
<summary>Colour Contrast Results</summary>
<img src="docs/validation-colour-contrast.png">
</details>

### Fonts

There were 2 fonts used in this project, as stated below:
- Alfa Slab One with a backup of cursive is the main font used throughout the website.
- Dosis with a backup of sans-serif was used for the number identifiers on the counters.

### Structure

The website's structure was carefully constructed whilst making it recognizable, user friendly and simple. On arrival to the website the user will be presented with a notification that indicates click to play and a navigation bar which in which page modals can be accessed. The website is made of one main page, a 404 page and 4 modals:

- A homepage, which houses the game and comes with a nav bar which on click will display the desired modal.
- A new game modal, where a user can select to play a human or computer opponent, a yes button to start new game or cancel button to return to the existing game currently in play if there is one.
- A Help modal, which displays the aim of the game, how to play and game controls.
- A Settings modal, where a user can turn on and off music and sounds individually.
- A Contact modal, where a user can provide feedback to the site owner and also be provided with feedback as to if the message was sent successfully.
- A 404 page, which will allow the user to navigate back to the main site in the instance of a page 404 error.

### Wireframes

Balsamiq was used in the initial design stage to layout sketches of each page and its design intent

<details>
<summary>Index</summary>
<img src="docs/wireframes/index.html.png">
</details>
<details>
<summary>Welcome Modal</summary>
<img src="docs/wireframes/index.html-(welcome-modal).png">
</details>
<details>
<summary>New Game Modal</summary>
<img src="docs/wireframes/index.html-(new-game-modal).png">
</details>
<details>
<summary>Help Modal</summary>
<img src="docs/wireframes/index.html-(help-modal).png">
</details>
<details>
<summary>Settings Modal</summary>
<img src="docs/wireframes/index.html-(settings-modal).png">
</details>
<details>
<summary>Contact Modal</summary>
<img src="docs/wireframes/index.html-(contact-modal).png">
</details>
<details>
<summary>Contact submission Modal</summary>
<img src="docs/wireframes/index.html-(submission-modal).png">
</details>
<details>
<summary>In Game Modal (Player Turn)</summary>
<img src="docs/wireframes/index.html-(in-game-modal-player-turn).png">
</details>
<details>
<summary>In Game Modal (Invalid Turn)</summary>
<img src="docs/wireframes/index.html-(in-game-modal-invalid-turn).png">
</details>
<details>
<summary>In Game Modal (Game End)</summary>
<img src="docs/wireframes/index.html-(in-game-modal-game-end).png">
</details>
<details>
<summary>404 page</summary>
<img src="docs/wireframes/404.html.png">
</details>

### Game Flowchart

A game flowchart was created during the design process to help identify functions that would be required in the JavaScript files.

<details>
<summary>Flow Chart</summary>
<img src="docs/js-logic-flow-annotated.jpg">
</details>

## Technologies Used

### Coding Languages
- HTML - Used to structure page content
- CSS - Used to style the content
- JavaScript - Used to create interactive features and content

### Frameworks and Tools
- Balsamiq - Used to create wireframes.
- Git - Used for version control.
- GitHub - Used to deploy the projects code.
- Gitpod - Used to develop and test code.
- Bootstrap v5.0 - Used for the Responsive Nav Bar.
- Google Fonts - Used for the fonts on the site.
- Google Chrome Dev Tools - Used for testing of the site.
- Font Awesome - Used for Socials icons.
- Microsoft Paint - Used to create a favicon image.
- Affinity Designer - Used to create the site logo.
- LibreOffice Draw - Used to create the game logic flowchart.
- Eightshapes - Used to check colours for contrast and accessibility.
- EmailJs - Used for sending user feedback to the site owner.
- W3C Markup Validation - Used to check HTML markup validity.
- W3C Jigsaw CSS Validation - Used to check CSS validity.
- WAVE WebAim web accessibility evaluation tool - Used to evaluate accessibility.
- JSHint - Used to check JavaScript validity.

## Features

In its entirety the website consists of one main page, four modals and one 404 error page consisting of 15 features, one of which has a mobile version and tablet/desktop version. 

### Existing features

#### Nav Bar 

The navigation bar is featured on the main page and will aid the user in interacting with the page. It includes 4 clickable modals:

- New Game
- Help
- Settings
- Contact

Other features of the Nav Bar include:

- It is fully responsive due to using the Bootstrap v5.0.2 nav bar which then produces a toggle menu for smaller screens. 
- A hover effect on the text of the navigation bar text allows the user to understand that it is a clickable link. Upon clicking the link the user will be presented with the desired modal.

- Covered in user story: 10

##### Desktop 

![Nav Bar Desktop](docs/features/feature-nav-bar-tablet-desktop.png)

##### Mobile

![Nav Bar Mobile](docs/features/feature-nav-bar-mobile.png)

#### Main game area

The main game area is situated in the middle of the main page and is where the user will interact with the site to play the game.

- Covered in user story: 11

![Main game area](docs/features/feature-main-game-area.png)

#### Welcome modal

The welcome modal will display on load of the page and will help users know where to navigate to to find out how to play if they dont already know how to.

- Covered in user story: 17

![Welcome modal](docs/features/feature-welcome-modal.png)

#### New game modal

The new game modal allows users to select their opponent, confirm or cancel the change of opponent.

- Covered in user story: 2

![New game modal](docs/features/feature-new-game-modal.png)

##### Who do you want to play?

- The choice between a computer player which randomly selects a move or a human player to play against locally using the same device. The current opponents button will be coloured green.

##### Are you sure you want to start a new game?

- The option to confirm changes to opponent and start a new game or cancel and return to the current game.

#### Help modal

The help modal displays to the user all information needed to understand how to play the game, user controls and how to display session stats.

- Covered in user story: 1

![Help modal](docs/features/feature-help-modal.png)

#### Settings modal 

The settings modal allows users to turn music or sounds on and off individually. Having audio in the game will provide additional feedback to the user. To improve user experience music and sounds are off by default.

- Covered in user story: 7

![Settings modal](docs/features/feature-settings-modal.png)

##### Music

- The option to turn background music on or off. There is one track which will be looped. This is done by selecting the ON or OFF button. The active button will be coloured green.

##### Sound Effects

- The option to have game sounds such as counter placement sound and winner sound on or off. This is done by selecting the ON or OFF button. The active button will be coloured green.

#### Contact modal

The contact modal displays a form which enables the user to provide feedback to the Site Owner by populating the following validated information:

- Name
- Email
- A text area for additional comments or questions

- Covered in user stories: 8 & 12

![Contact modal](docs/features/feature-contact-modal.png)

##### Success

- Upon submission of the form, if successful the user will be presented with a Thank you modal.

![Submission success](docs/features/feature-submission-success.png)

##### Error

- Upon submission of the form, if unsuccessful the user will be presented with an Error please try again modal.

![Submission error](docs/features/feature-submission-error.png)

#### Notification Bar

The notification bar is located above the game board and will display a notification relevant to the state of the game to the user.

- Covered in user stories: 3, 4 & 5

##### Player turn

- The notification bar will display whos turn it currently it is. When turn swaps from one player to the other an animation will run to create a visually pleasing experience. If sounds are ON then a sound effect for placing a counter will also run.

##### Invalid Turn

- The notification bar will display Invalid turn if the user tries to place a counter in an occupied cell or a cell which does not have a counter underneath. This notification will run a "shake" type animation which will be coloured red to clearly display to users the move was incorrect. If playing on a device with vibration capabilities, the device will also vibrate to further alert the user of the invalid move. A sound will also play if the user has sounds set to ON.

##### Winner

- Upon a player having 4 counters in a row, the Notification bar will run an animation and display the winner. If sounds are set to ON a sound will also play.

##### Animations

The notification bar has 4 animations. One for each of the messages that can be displayed:
 - Click to play!
 - Player X turn!
 - Invalid move!
 - Player X wins!

![Notification bar](docs/features/feature-notification-bar.png)

#### Play again button

The play again button will display when a game ends allowing a use to quickly and easily start a new game. Once clicked it will reset the game board and its display states will change to none. 

- Covered in user story: 9

![Play again button](docs/features/feature-play-again-button.png)

#### Stats Button

The stats button will display the current session player 1 / player 2 wins and how many draws have occurred to the user. On Desktops this will be displayed by hovering over, while on touch screen devices will be displayed with a touch of the screen on the button.

- Covered in user story: 6

![Stats button](docs/features/feature-stats-button.png)

#### Footer

- The footer is featured on the main page and the error 404 page and includes 2 sections:

    - Description of the site owner
    - Social links

- There are two clickable links
    - The GitHub icon which links to my own personal GitHub page for future showcasing of my projects
    - The LinkedIn icon which links to my own personal LinkedIn page for networking with fellow coders or potential future employers

- Covered in user story: 13

![Footer](docs/features/feature-footer-tablet-desktop.png)

#### Orientation warning modal

The orientation warning modal detects if the orientation of the screen has changed from portrait to landscape and displays a warning that the game is best played in portrait mode. This warning will only display once per session so not to provide a poor user experience by having to close this warning every time the orientation is changed.

- Covered in user story: 16

![Footer](docs/features/feature-orientation-warning.png)

#### Master Mute Button

The master mute button is located just below the main game board. This feature will give the user an easily accesible option to control all audio in the site. When this button is pressed it will turn on or off both music and sounds dependant on its current state. 

- Covered in user story: 7

![Footer](docs/features/feature-master-mute-button.png)

#### Vibration alert

A vibration alert has been implemented when a user tries to place a counter which results in an Invalid Move which will provide additional feedback from the game to the user. This feature is only available on devices which support device vibration.

- Covered in user story: 4

#### 404 error page

- The 404 error page feature is used when a user tries to navigate to a page that does not exist. This page will allow users to navigate back to the home page via the return home button creating a good user experience that does not require the use of the browser back button.

- Covered in user story: 14

![where to find us](docs/features/feature-404-page.png)

#### 404 error page Return Home button

- The Return Home button is located on the error 404 page. By clicking on this button the user will be redirect back to the main page creating a good user experience that does not require the use of the browser back button.

- Covered in user story: 15

![where to find us](docs/features/feature-return-home-button.png)

### Future implementations

In the future as my skills grow I would like to implement the following features:

- AI for the computer player
    - At present the computer player only selects a cell based on a random number. I would like to implement some logic to this function to seek out if there is a potential win within the next turn of player 1 so that the computer will actively try and block a win.
- Online PvP
    - Currently when playing another human, this can only be done when physically beside each other and using the same device. At present the means to create a platform for this is outwith my skills, however when i have completed the back-end lessons of Code Institutes Diploma i have confidence that i will be able to implement this feature.
- Online leader board
    - Like the online PvP future implementation i would like to add a global leader board in which users can see how many games they have played and who has won the most, this would encourage users to come back and try to become the leader of the scoreboard.

## Testing

### HTML Validation
[W3C Markup Validation](https://validator.w3.org/) was used to validate the HTML code of The Connect 4 website. All pages passed and produced no errors.
<details>
<summary>Index</summary>
<img src="docs/validation-html/validation-index-html.png">
</details>
<details>
<summary>404 page</summary>
<img src="docs/validation-html/validation-404-html.png">
</details>

### CSS Validation

[W3C Jigsaw CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate the CSS used in the website. The file passed and produced no errors if testing my own CSS however it did produce some warnings which are related to Bootstrap 5.0.2
<details>
<summary>CSS styles</summary>
<img src="docs/validation-css/validation-css-style.png">
</details>
<details>
<summary>Bootstrap warnings</summary>
<img src="docs/validation-css/validation-bootstrap-css-warnings.png">
</details>

### JavaScript Validation

[JShint JavaScript Validation](https://jshint.com/) was used to validate the JavaScript used in the website. The files all passed reporting no significant issues, however it did issue some warnings of un-used variables and functions. This is due to those variables and functions being written within a different JavaScript file. Jshint only allows the Validation of one file at a time therefore produces an error. All un-used functions and variables were cross checked on all files and all are in use, the only exception being the variable emailjs as it is part of the EmailJS API. Another warning stated was "functions declared within loops referencing an outer scoped variable may lead to confusing semantics". These variables need to be referenced from outside of the loop as they are global variables and are used within other functions in the project.

<details>
<summary>JavaScript file - connect-4</summary>
<img src="docs/validation-js/validation-jshint-connect-4.png">
</details>
<details>
<summary>JavaScript file - welcome</summary>
<img src="docs/validation-js/validation-jshint-welcome.png">
</details>
<details>
<summary>JavaScript file - modals</summary>
<img src="docs/validation-js/validation-jshint-modals.png">
</details>
<details>
<summary>JavaScript file - contact</summary>
<img src="docs/validation-js/validation-jshint-contact.png">
</details>

### Accessibility

[The WAVE WebAIM](https://wave.webaim.org/) tool for evaluating accessibility of a webpage was used to verify that all pages of the site met the needs for users with disabilities.

<details>
<summary>Index</summary>
<img src="docs/validation-accessibility/accessibility-validation-index.png">
</details>

<details>
<summary>404 Page</summary>
<img src="docs/validation-accessibility/accessibility-validation-404.png">
</details>

- Icons from Font Awesome are used in the site. Font Awesome already populates the code to be copied with an aria-hidden="true" attribute to accommodate accessibility.

### Performance

[Chrome dev tools lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test all pages for performance, accessibility, best practices and SEO.

<details>
<summary>Index</summary>
<img src="docs/validation-performance-lighthouse/lighthouse-performance-index.png">
</details>
<details>
<summary>404 page</summary>
<img src="docs/validation-performance-lighthouse/lighthouse-performance-404.png">
</details>


### Device Testing

The website was tested on the following devices:
- Xiaomi Redmi Note 10 Pro
- Windows 10 PC with a 24" MSI Curved gaming monitor

In addition to testing on physical devices, the site was also tested using Google Chrome Developer Tools pre-defined devices and also the responsive mode in which I would slowly increase the width of the screen to ensure responsiveness worked across all display sizes.

### Browser Compatibility

The website was tested on the following web browsers:
- Google Chrome (Version 103.0.5060.114)
- DuckDuckGo

### Testing User Stories

#### Users

1. As a user, I want to understand the aim of the game.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Help Modal  | Click on the Help link from the Nav Bar  | The Help link from the nav bar is clicked and the help modal with information on the aim of the game, how to play and user controls is displayed     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-1.png">
</details>

2. As a user, I want to chose between playing a friend locally or a computer opponent.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| New game modal  | Click on the New game modal from the Nav Bar  |  The New Game link from the nav bar is clicked and the new game modal will display. From there two buttons are presented, one being human the other being computer. The desired opponent button is clicked and the yes button is clicked to confirm and start the new game    | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-2.png">
</details>

3. As a user, I want to be notified as to whos turn it is.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Notification Bar  | Play a game and the notification bar will display the correct notification  | Whilst in game the notification bar will be updated to state which player currently has a turn to take    | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-3.png">
</details>

4. As a user, I want to be notified if my move is invalid.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Notification Bar  | Try to place a counter on an invalid cell  | Whilst in game the notification bar will be updated to state invalid move if the user clicks on a cell which is either occupied or does not have a counter beneath it     | Works as intended |
| Vibration Alert | Try to place a counter on an invalid cell | If a user is playing on a device which supports vibration, the device will vibrate to indicate a wrong move | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-4.png">
</details>

5. As a user, I want to be notified with who won the game.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Notification Bar  | Play a game and the notification bar will display the correct notification |  When a player achieves 4 in a row the notification bar will update to state who won and disable all clicks    | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-5.png">
</details>

6. As a user, I want to be able to see the total wins and draws in the current session.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Stats Button  | Hover over the stats button on Desktop or click if on a Mobile / Tablet device  | Whilst hover / click occurs the stats information will display to show the total number of player 1 wins, player 2 wins and draws     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-6.png">
</details>

7. As a user, I want to be able to turn on and off in game music and sounds.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Settings modal  | Click on the Settings link in the Nav Bar, from the settings modal set music / sounds to be on or off | To be able to control if music / sounds are on or off whilst playing the game     | Works as intended |
| Master mute button  | Locate master mute button below the game board and click on it  | If clicked on it will turn both music and sounds off or on dependant on what state the sounds currently are     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-7.png">
<img src="docs/testing-user-stories/testing-user-stories-7.1.png">
</details>

8. As a user, I want to be able to provide feedback to the site owner and confirmation the feedback was sent.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Contact modal  | Click on the Contact link in the Nav Bar, from the contact modal enter relevant information  | To be presented with the contact modal which once populated, entered information validated and submit button clicked will send the information to the site owner and a message will display to let the user know if the submission was successful or not      | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-8.png">
</details>

9. As a user, I want to be able to easily play another game once the current one has finished.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Play again button  | Click on the Play Again button  | On game end the Play again button would appear and when clicked, the board will clear and a new game will commence  | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-9.png">
</details>

10. As a user, I want to be able to easily access options such as opponent type, audio settings and how to play.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Nav Bar  | Click on the desired Nav Bar link  |  To display the desired modal dependant on the choice of the user   | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-10.png">
</details>

11. As a user, I want to be able to play the game on a mobile device so i can play wherever i am.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Main game area  | Open the game on a mobile device  | The site to show a high level of responsiveness to adjust to the mobile device screen     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-11.png">
</details>




12. As the site owner, I want users to be able to provide feedback via a contact form.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Contact modal  | Click on the Contact link in the Nav Bar  | To be presented with the contact modal which once populated, entered information validated and submit button clicked will send the information to the site owner and a message will display to let the user know if the submission was successful or not      | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-12.png">
</details>


13. As the site owner, I want to connect with users via social networks.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Footer  | Scroll to the bottom of the page and locate the social icons  | Social pages to open in new window if clicked on from the footer     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-13.png">
</details>

14. As the site owner, I would want the user to be presented with a 404 page on the odd chance an error does occur.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| 404 page      | Try to access a page which does not exist   |  The user will be presented with a 404 error page indicating that the page does not exist    | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-14.png">
</details>

15. As the site owner, I would not want the user to have to result in using the browser back button to navigate back to the site if a 404 error occurs.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| 404 page return button  | Locate the Return Home button and click on it  | To be returned to the main page to be able to start a new game     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-15.png">
</details>

16. As the site owner, I would want users to be warned that to best experience the game to have their mobile or tablet device in portrait mode.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Orientation warning modal  |  On a mobile device rotate the screen from portrait to landscape |  On first instance of this orientation change the Orientation Warning modal will display. Once it has been shown once it will not be shown again until the page is reloaded.   | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-16.png">
</details>

17. As the site owner, I want users to be greeted with a welcome message to give a friendly feel to the site.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Welcome modal  | Navigate to the connect 4 website  | On page load the welcome modal will display automatically     | Works as intended |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-17.png">
</details>


## Bugs

### Code Bugs

During the project i encountered a number of bugs some of which were solved some of which were not as stated below:

| Bug           | Fix           |
| ------------- | ------------- |
| Computer opponent not placing a counter and turn reverting back to player 1  | This bug was due to the cells array adding 7 to the total length of the array when trying to validate if there was a counter underneath it thus trying to find a number outside of the array length if one of the randomly selected cells for placement was on the last row of the board, to fix this a variable called maxCells was added. Then the game play functioned as expected |
| Multiple turns for player 1 whilst it is computer player 2s turn  | There was no code to stop clicks, a function called disableClicks was added which would loop all cells and add the disable-click class to them which had pointer events set to none. This would then limit clicks by player one whilst the computer took its turn. | 
| Multiple wins within one game  | If there was an instance in which a player managed to get multiple 4 in a rows due to the loop looking for a match on all combinations a win could be counted multiple times in one game, a simple break was added to the function which would exit the function once one had been found. |
| Sound button does not update to reflect set values in settings modal  | A function was added to the click event listener for the buttons located in settings which if both buttons are set to off would be reflected by the master sound button displaying the muted symbol and if both music and sound settings were set to on the image would display the on symbol |
| In vs computer game, on game end the invalid move sound will still sound if clicked  | This bug happened due to the disable-click class being removed as soon as it was added. To fix this, the gameActive variable was added to control if the onePlayerGame function should run, previously it would by default which would be the cause of removal for disable-click class thus creating the bug in which the invalid move sound would still play. |
| Viewport height glitch whilst Player 2 animation running  | This glitch only happens when it is player 2s turn. The height of the page is set to 100vh and when the computer players turn animation runs the page can be scrolled down. This then stops once the animation stops running. After spending a lot of time trying to fix this I could not find the reason behind the bug and due to this bug self fixing and not effecting the user experience i decided to leave it as a known bug |

### Console Bugs

| Bug           | Reason           |
| ------------- | ---------------- |
| Interest cohort error | When the page is reloaded using Chrome there is an error message in the console `Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.` Research online has shown that this is an effort to protect the privacy of users whilst using GitHub pages sites. As this bug is outwith my own control and does not affect functionality or User Experience it has been left as a known bug.|
| Navigator user agent error |When using Chrome there is an issue `Audit usage of navigator.userAgent, navigator.appVersion, and navigator.platform`. According to Chrome documentation this is done to "limit browser data shared to remove sensitive information and reduce fingerprints. As this bug is outwith my own control and does not affect functionality or User Experience it has been left as a known bug.|

<details>
<summary>Screenshots</summary>
<img src="docs/console-bugs/interest-cohort-error.png">
<img src="docs/console-bugs/navigator-user-agent-error.png">
</details>



## Deployment

### GitHub Pages

This project was deployed to GitHub pages in the project's early stages to allow continual responsive testing. This was achieved via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the projects [GitHub Repository](https://github.com/jkingportfolio/CI_PP2_Connect4)
3. Click on the settings button at the top right corner of the repository.
4. Select Pages from the left hand side menu.
5. For the source, select Branch:Master and click save.
6. The webpage will refresh automatically displaying a message at the top of the ribbon stating "Your site is publish at https://jkingportfolio.github.io/CI_PP2_Connect4/
7. The site is now live online and can be viewed by anyone.

### Forking the GitHub Repository

We can make a copy of the original repository on our GitHub account to view or make changes too without affecting the original repository, this is known as forking. Forking in GitHub can be done via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/CI_PP2_Connect4) that you would like to fork.
3. At the top right corner of the page click on the fork icon.
4. There should now be a copy of your original repository in your GitHub account.

Please note if you are not a member of an organisation on GitHub then you will not be able to fork your own repository.

### Clone a GitHub Repository

You can make a local clone of a repository via the following steps: 

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/CI_PP2_Connect4) that you would like to clone.
3. Locate the code button at the top, above the repository file structure.
4. Select the preferred clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
5. Open Git Bash
6. Update the current working direction to the location in which you would like the clone directory to be created.
7. Type `git clone` and paste the previously copied URL at Step 4.
8. `$ clone https://github.com/jkingportfolio/CI_PP2_Connect4`
9. Now press enter and the local clone will be created at the desired local location

### EmailJS API

An EmailJS account was created and templates made using EmailJS tutorial as per their [documentation](https://www.emailjs.com/docs/tutorial/overview/)

1. Create a user account at emailjs.com
2. Add an email service, call this Contact Service and give it an ID name contact_service
3. Add a new email template, call this Contact Form and give it an ID name contact_form
4. Load the EmailJS SDK in the head of your HTML file (it must be placed here to work)
5. Create a JavaScript file to paste the function provided in the documentation, replacing the emailjs.init function parameter with your own public key.

## Credits

### Tutorials

- When beginning this project i watched a [YouTube tutorial by Ania Kubow](https://www.youtube.com/watch?v=aroYjgQH8Tw) to help with the fundamentals of how to implement my JavaScript
- Creative CSS Animations, Transitions and Transforms Course by Ahmed Sadek, Published on Packt Publishing was used to help create the animations in my site.
- How to make a modal - [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp)

### Images

All images used in this website were created by myself. The icons for Github and LinkedIn were taken from FontAwesome.

### Code

 Code from external sources were used as a basis and built on top of in this project, they are credited below:

 - How to check if a cell is occupied and has produced a winning combination by [Ania Kubow](https://github.com/kubowania/connect-four)
 - CSS Animation help from [Animista](https://animista.net/)


### Literature

The use of reference books were used throughout the creation of this project and are credited below:

- JavaScript & JQuery by Jon Duckett
- JavaScript Pocket Reference by David Flanagan, published by O'Reilly

### Sounds

The sounds and music used in this project were taken from pixabay.com and are credited as per below:

- Background music - 'Corporate Ambient' by [Coma-Media](https://pixabay.com/music/corporate-corporate-ambient-95417/)
- Counter placement sound - 'Correct' by [Eponn](https://pixabay.com/sound-effects/correct-6033/) 
- Invalid move sound - 'wrong' by [lionelmatthew001](https://pixabay.com/sound-effects/wrong-38598/)
- Winning sound - 'Success Fanfare Trumpets' by [FunWithSound](https://pixabay.com/sound-effects/success-fanfare-trumpets-6185/)

### Misc

The source of where I learned how to produce a GitHub fork and clone was from the following pages of the GitHub Documentation. Although I did not use a fork or clone in this project it is something I hope to implement to future projects now I have the knowledge to do so.

- https://docs.github.com/en/get-started/quickstart/fork-a-repo
- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


## Acknowledgements

I would like to also thank the following:
- My wife and family for their support and feedback whilst doing this project
- My fellow Code Institute students whom i have bounced ideas and problems back and forth with via Slack
- Code Institute tutor support who helped with an issue i had with game functionality.
- My Code Institute mentor Mo Shami for his guidance through this project.