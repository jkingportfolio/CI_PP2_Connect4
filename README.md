# Connect 4
Developer: Jamie King

![Responsive image](docs/am-i-responsive.png)

[Connect 4](https://jkingportfolio.github.io/CI_PP2_Connect4/) website has been developed to provide (insert description).

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
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
    6. [Game Flowchart](#game-flowchart)
4. [Technologies Used](#technologies)
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
8. [Deployment](#deployment)
    1. [EmailJS API](#emailjs-api)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals

- A user would want to play a fun game of connect 4.
- A user would want to know the aim the game if this is my first time doing so.
- A user would want to what the controls of the game are.
- A user would want to have the option to play a computer opponent or with a fried (locally).
- A user would want to be able to check how many wins and losses they have had in their current session.

### Site Owner Goals

- As the site owner i wanted to create an enjoyable interactive game which was responsive over multiple devices.
- As the site owner i wanted to provide a fun user experience which would make users want to come back and play again. 
- As the site owner i wanted to allow my users to provide myself some feedback via a contact form
- As the site owner i wanted to have the ability to connect with my users via Github and Linkedin

## User Experience

### Target Audience

- Casual gamers.
- Adults who want to teach their children a new game.
- People from all walks of life hoping to pass time.

### User Requirements and Expectations

- A great game to pass time and have fun with friends
- Links and website functions to act as expected
- Notifications to indicate the current state of play
- Simple "to the point" content that a user can quickly digest
- An easy method to leave feedback on the game
- Accessibility for impaired users
- Responsiveness to allow play across devices of different screen sizes

### User stories

1. As a user, I want to understand the aim of the game.
2. As a user, I want to chose between playing a friend locally or a computer opponent.
3. As a user, I want to be notified as to whos turn it is.
4. As a user, I want to be notified if my move is invalid.
5. As a user, I want to be notified of who won the game.
6. As a user, I want to be able to see the total wins and draws in the current session .
7. As a user, I want to be able to turn on and off in game music and sounds.
8. As a user, I want to be able to provide feedback to the site owner and confirmation the feedback was sent.

### Site Owner Stories

9. As the site owner, I want users to be able to provide feedback via a contact form.
10. As the site owner, I want to connect with users via social networks.
11. As the site owner, I would not want the user to have to result in using the browser back button to navigate back to the site if a 404 error occurs.

## Design

### Design Choices

The game was designed with a clean simple design in mind. Using the original colours of the official game of a blue game board with red and yellow counters. This was done to induce a sense of nostalgia to older users and to make the game easily identifiable to younger users who may be new to the game. 

### Colour

The colour palette for the website is made up of X main colours

- #xxxxxx (xxxxx)
- #xxxxxx (xxxxx)
- #xxxxxx (xxxxx)
- #xxxxxx (xxxxx)
- #xxxxxx (xxxxx)

All colours contrast was tested using [EightShapes contrast grid](http://eightshapes.com/)

<details>
<summary>Colour Contrast Results</summary>
<img src="docs/validation-colour-contrast.png">
</details>

### Fonts

There were 3 fonts used in this project, as stated below:
- Alfa Slab One with a backup of cursive is the main font used throughout the website
- Dosis with a backup of sans-serif was used for the number identifiers on the counters

### Structure

The website's structure was carefully constructed whilst making it recognizable, user friendly and simple kept in mind. On arrival to the website the user will be presented with a notification that indicates click to play and a navigation bar which is uniform across all pages. The website is made of one main page, a 404 page and 4 modals:

- A homepage, which houses the game and comes with a nav bar which on click will display the desired modal
- A new game modal, where a user can select to play a human or computer opponent, a yes button to start new game or cancel button to return to the existing game currenlty in play if there is one.
- A Help modal, which displays the aim of the game, how to play and game controls.
- A Settings modal, where a user can turn on and off music and sounds individually
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

## Technologies

### Coding Languages
- HTML - Used to structure page content
- CSS - Used to style the content
- JavaScript - Used to create interactive features and content

### Frameworks and Tools
- Balsamiq - Used to create wireframes.
- Git - Used for version control.
- Github - Used to deploy the projects code.
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

In its entirety the website consists of one main page, four modals and one 404 error page consiting of xx features, one of which has a mobile version and tablet/desktop version. 

### Existing features

#### Nav Bar 

The navigation bar is featured on the main page and the error 404 page. It includes 4 clickable modals:

- New Game
- Help
- Settings
- Contact

Other features of the Nav Bar include:

- It is fully responsive due to using the Bootstrap v5.0.2 nav bar which then produces a toggler menu for smaller screens. 
- A hover effect on the text of the navigation bar text allows the user to understand that it is a clickable link. Upon clicking the link the user will be taken to the desired page

- Covered in user story: xx

##### Desktop 

![Nav Bar Desktop](docs/features/feature-nav-bar-tablet-desktop.png)

##### Mobile

![Nav Bar Mobile](docs/features/feature-nav-bar-mobile.png)

#### Contact Form

The contact form provides a way for the user to book a table at the bar by providing the following details:

- Name
- Email
- Phone number 
- Date and time
- A text area for additional comments or questions

- Covered in user stories: xx

![Form](docs/features/feature-form.png)

#### Footer

- The footer is featured on all five main pages and the error 404 page and includes 3 sections:

    - Contact
    - Opening Times
    - Socials

- There are three clickable links
    - The email address in the contact section will open an email mailbox of the user in order for them to easily email the bar with any questions they may have
    - The GitHub icon which links to my own personal GitHub page for future showcasing of my projects
    - The LinkedIn icon which links to my own personal LinkedIn page for networking with fellow coders or potential future employers

- Covered in user stories: xx

- Desktop

![Footer](docs/features/feature-footer-tablet-desktop.png)

#### 404 error page

- The 404 error page feature is used when a user tries to navigate to a page that does not exist. This page will allow users to navigate back to the home page via the return home button or by clicking on any of the nav bar links creating a good user experience that does not require the use of the browser back button.

- Covered in user story: xx

![where to find us](docs/features/feature-404-page.png)

### Future implementations

In the future as my skills grow I would like to implement the following features:

- Future implementation 1
- Future implementation 2
- Future implementation 3

## Testing

### HTML Validation
[W3C Markup Validation](https://validator.w3.org/) was used to validate the HTML code of The Cocktail Bar website. All pages passed and produced no errors.
<details>
<summary>Index</summary>
<img src="">
</details>
<details>
<summary>404 page</summary>
<img src="">
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

[JShint JavaScript Validation](https://jshint.com/) was used to validate the JavaScript used in the website. The files all passed however it did issue some warnings of un-used functions as they were being called from a different file.

<details>
<summary>JavaScrip file - connect-4</summary>
<img src="docs/validation-js/validation-jshint-connect-4.png">
</details>
<details>
<summary>JavaScript file - welcome</summary>
<img src="docs/validation-js/validation-jshint-welcome.png">
</details>
<details>
<summary>JavaScrip file - modals</summary>
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
<img src="">
</details>
<details>


- Icons from Font Awesome are used in the site. As they are for decorative purposes only, Font Awesome already populates the code to be copied with an aria-hidden="true" attribute to accommodate accessibility.

### Performance

[Chrome dev tools lighthouse](https://developers.google.com/web/tools/lighthouse) was used to test all pages for performance, accessibility, best practices and SEO

<details>
<summary>Index</summary>
<img src="">
</details>
<details>
<summary>404 page</summary>
<img src="">
</details>


### Device Testing

The website was tested on the following devices:
- Xiaomi Redmi Note 10 Pro
- Windows 10 PC with a 24" MSI Curved gaming monitor

In addition to testing on physical devices, the site was also tested using Google Chrome Developer Tools pre-defined devices and also the responsive mode in which I would slowly increase the width of the screen to ensure responsiveness worked across all display sizes.

### Browser Compatibility

The website was tested on the following web browsers:
- Google Chrome Version 101.0.4951.67
- DuckDuckGo

### Testing User Stories

#### First time users

1. As a first time user I would want to gain insight as to what type of establishment the bar is

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Gallery  | Using the Nav Bar navigate to the Gallery page  | Gallery page opens and displays all images     | Works as intended  |
| Video  | Navigate to the About page, scroll down to video  | Video is displayed on page ready to play, this will not autoplay     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-gallery.png">
<img src="docs/testing-user-stories/testing-user-stories-video.png">
</details>

2. As a first time user I would want to know more about the bar	

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Our Story  | Navigate to the About page, Our story is located at the top of the page  | To be presented with information about the bar    | Works as intended  |
| Customer reviews | Navigate to the About page, scroll down to customer views section  | To be presented with customer reviews of the bar     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-our-story.png">
<img src="docs/testing-user-stories/testing-user-stories-customer-reviews.png">
</details>

3. As a first time user I would want to know where the bar is located

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|Visit us  | On Home page scroll down to Visit us section and click on the Visit us button  | To be taken to the contact page to see the map and address of the bar     | Works as intended  |
| Google Map  | Navigate to the Contact page  | To be presented with a map of the bar location    | Works as intended  |
| Footer - contact section  | Scroll down to the footer section on any page   | To be provided with bar location details     | Works as intended  |
| Where to find us  | Navigate to the Contact page to view the where to find us section on the right hand side  | To be provided with bar location details     | Works as intended when on desktop, this will not work on mobile as it is a feature that is not display on displays smaller than 768px |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-visit-us.png">
<img src="docs/testing-user-stories/testing-user-stories-map.png">
<img src="docs/testing-user-stories/testing-user-stories-footer-contact.png">
<img src="docs/testing-user-stories/testing-user-stories-where-to-find-us.png">
</details>

4. As a first time user I would want to know the opening hours of the bar

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Footer - Opening times section  | Scroll down to the footer section on any page  | To be provided with opening times     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-footer-opening-times.png">
</details>

5. As a first time user I would want to know the drinks available and their prices

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Menu  | Navigate to the Menu page  | To arrive at the menu page and be presented with information on drink types and prices     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-menu.png">
</details>

#### Returning users

6. As a returning user I would want to know of recent news related to the bar

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| What's new  | On the home page scroll down to the What's new section and click on the Whats new button  | To be taken to the News section on the About page     | Works as intended  |
| News  | Navigate to the About page, scroll down to the News section  | To view the news section at the bottom of the page     | works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-whats-new.png">
<img src="docs/testing-user-stories/testing-user-stories-news.png">
</details>

7. As a returning user I would want to see the menu

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Our Menu  | On the home page scroll down to the Our menu section and click on the Our Menu button  | To arrive at the menu page and be presented with information on drink types and prices      | Works as intended  |
| Menu  | Navigate to the Menu page  | To arrive at the menu page and be presented with information on drink types and prices     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-our-menu.png">
<img src="docs/testing-user-stories/testing-user-stories-menu.png">
</details>

8. As a returning user I would want to find the phone number to book a table via telephone

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Footer - Contact section  | Scroll down to the footer section on any page  | To be presented with the phone number for the bar     | Works as intended  |
| Where to find us  | Navigate to the Contact page to view the where to find us section on the right hand side  | To be presented with the phone number for the bar     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-footer-contact.png">
<img src="docs/testing-user-stories/testing-user-stories-where-to-find-us.png">
</details>


9. As a returning user I would want to see the opening times

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Footer - Opening times section  | Scroll down to the footer section on any page  | To be presented with the opening times for the bar     | Works as intended  |
| Where to find us  | Navigate to the Contact page to view the where to find us section on the right hand side  | To be presented with the opening time for the bar     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-footer-opening-times.png">
<img src="docs/testing-user-stories/testing-user-stories-where-to-find-us.png">
</details>


10. As a returning user I would want to book a table via an online booking system

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Contact form  | Navigate to the contact page and fill in the fields and click submit  | For the codeinstitute form dump page to display with all information that was entered     | Works as intended  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-user-stories/testing-user-stories-contact-form-entered.png">
</details>


## Bugs

During the project i encountered a number of bugs some of which were solved some of which were not as stated below:

| Bug           | Fix           |
| ------------- | ------------- |
| Bug 1  | Fix 1 |
| Bug 2  | Fix 2 | 
| Bug 3  | Fix 3 |

## Deployment

### Github Pages

This project was deployed to GitHub pages in the project's early stages to allow continual responsive testing. This was achieved via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the projects [GitHub Repository](https://github.com/jkingportfolio/CI_PP1_TheCocktailBar)
3. Click on the settings button at the top right corner of the repository.
4. Select Pages from the left hand side menu.
5. For the source, select Branch:Master and click save.
6. The webpage will refresh automatically displaying a message at the top of the ribbon stating "Your site is publish at https://jkingportfolio.github.io/CI_PP1_TheCocktailBar/
7. The site is now live online and can be viewed by anyone.

### Forking the GitHub Repository

We can make a copy of the original repository on our GitHub account to view or make changes too without affecting the original repository, this is known as forking. Forking in GitHub can be done via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/CI_PP1_TheCocktailBar) that you would like to fork.
3. At the top right corner of the page click on the fork icon.
4. There should now be a copy of your original repository in your Github account.

Please note if you are not a member of an organisation on GitHub then you will not be able to fork your own repository.

### Clone a GitHub Repository

You can make a local clone of a repository via the following steps: 

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/CI_PP1_TheCocktailBar) that you would like to clone.
3. Locate the code button at the top, above the repository file structure.
4. Select the prefered clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
5. Open Git Bash
6. Update the current working direction to the location in which you would like the clone directory to be created.
7. Type `git clone` and paste the previously copied URL at Step 4.
8. `$ clone https://github.com/jkingportfolio/CI_PP1_TheCocktailBar`
9. Now press enter and the local clone will be created at the desired local location

## Credits

### Images

### Code

 Code from external sources were used in this project, they are credited below:


### Literature

The use of reference books were used throughout the creation of this project and are credited below:



### Misc

The source of where I learned how to produce a GitHub fork and clone was from the following pages of the GitHub Documentation. Although I did not use a fork or clone in this project it is something I hope to implement to future projects now I have the knowledge to do so.

- https://docs.github.com/en/get-started/quickstart/fork-a-repo
- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


## Acknowledgements

I would like to also thank the following:
- My wife and family for their support and feedback whilst doing this project
- My fellow Code Institute students whom i have bounced ideas and problems back and forth with via Slack