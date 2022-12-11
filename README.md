![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Football Quiz

The Football Quiz website is for people who wish to take part in a fun football quiz game. The website allows users to enter their name and answer 10 football related questions to test their football knowledge. It is a exciting website for football fans around the world to test their knowledge, whilst trying to achieve 10 correct answers out of 10! 



## Features

- The landing page and hero image
    - The landing includes a hero image and header which allows the user to see what the website is about. The image includes an animation which should draw the user into the page, whilst the header details clearly what the website is about. 

- Username Entry
    - Featured on the Index Page. 
    - This allows the user to input their name before they can gain access to the Quiz questions. 
    - Users are only able to submit a name that is made up only of 'A-Z' or 'a-z' characters otherwise the following message will pop up on the screen "Please enter a valid name with no spaces or numbers" and not allow the name to be accepted until it meets the requirements.  
    - Users are not able to submit a name that is under 3 characters in length as the following message will pop up on the screen "Name must be longer than 3 Characters" and not allow the name to be accepted until it meets the requirements.  
    - Once a user has entered a name that meets the requirements, it is accepted and the User is taken to the Quiz questions. 


- Click to Play! Button
    - The Click to Play! button allows the user to submit their name. If all the requirements of the Username Entry are met, clicking this button will take the user to the question area where they will be able to take part in the Quiz. 


- The Quiz
    - This is where the questions are displayed. Each questions loads 1 at a time and provides 4 answers (which are clickable buttons) for the user to click on to select their answer. 
    - Once the user clicks on a answer, if the answer is correct the box will turn green. However, if the user has clicked on a wrong answer, the answer box will turn red. 
    - The user will click on the 'next question' button to bring the next question for the user to answer. 


- Correct and Incorrect Score
    - This allows the user to see how many of the answers they have answered correctly or incorrectly. It is updated every time the User answers a question. 


- Footer
    - The footer includes links to all of the social media sites for the Football Quiz. 
    - The footer allows the user further access to the Football Quiz through their social media sites. 


- Message box
    - Once all 10 questions have been answered by the User, the message box displays to inform the User the following 'You have completed the Quiz. Please see your correct and incorrect answers on the screen!.' 
    - This informs the user that the Quiz has been completed and no more questions are available for the user to answer. 

    


- Possible Future Features to Implement

    - 
    - 


## Testing

### HTML

- No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

- index.html 

![Image of no errors](assets/images/README/Doc_noerrors_html.jpg)

- games.html

![Image of no errors](assets/images/README/Doc_noerrors_html.jpg)

- signup.html 

![Image of no errors](assets/images/README/Doc_noerrors_html.jpg)

### CSS

- No errors were returned when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/)

- style.css

![Image of no errors](assets/images/README/css_noerrors.jpg)

### Responsive

- Am I responsive: The site is responsive to different screen sizes. Tested through [Am I Responsive?](https://amiresponsive.co.uk/)

- Website tested using Chrome devtools on various screen sizes. 
- Media Queries were added to the CSS Stylesheet:
    - For larger to medium screens size from 1200px wide and down
    - Medium screen sizes from 950px wide and down

### Lighthouse

- Website tested on lighthouse
    - Perfomance 53
    - Accessibility 97
    - Best Practices 92
    - SEO 93

![Lighthouse score](assets/images/README/lighthouse_test.jpg)

To improve this, I used [Optimizilla](https://imagecompressor.com/) to reduce the size of the images on the website. After compressing all of the images, I performed the lighthouse test again which returned an huge improvement on the performance score without affecting images quality on the site. 

- After compressing images - Website tested on lighthouse 
    - Perfomance 53
    - Accessibility 97
    - Best Practices 92
    - SEO 93

![Lighthouse score](assets/images/README/New_Performance_Compressed.jpg)

### Unfixed Bugs

- The flexbox css styling on the Games page does not line up all the images as neatly as I would like. This is something I would want to work on and improve in the future. 

- Images that are used on the site are rather large in size and they could be adjusted to allow for faster loading times on those with a slower internet connection

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In GitHub repository, naviagte to the Settings tab
    - Click on Pages
    - Select main branch and GitHub builds site from main branch

The live link is here - https://richburman.github.io/Project-1/

## Credits

### Contents

- Research using [w3schools](https://www.w3schools.com/css/css3_flexbox.asp) to learn about how to use flexbox
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- The fonts were taken from [Google Fonts](https://fonts.google.com/)
- The football teams used in the website are members of the [Premier League](https://www.premierleague.com/)
    - [Manchester United](https://www.manutd.com/)
    - [Arsenal FC](https://www.arsenal.com/)
    - [Chelsea FC](https://www.chelseafc.com/en)
    - [Manchester City FC](https://www.mancity.com/)
    - [Tottenham Hotspur FC](https://www.tottenhamhotspur.com/)
- Information take from [Web.Dev](https://web.dev/serve-images-with-correct-dimensions/#the-good-approach) to reduce images size to improve loading performance speeds. After reading this webite I added 'aspect-ratio= 16/9' to my imgs to help improve performance speeds on lighthouse score. 


### Media

- All images were taken from [Unsplash](https://unsplash.com/)
- All images were compressed using [Optimizilla](https://imagecompressor.com/) to aid website performance.
- Screenshots taken from the following website for this README
    - [Lighthouse](https://web.dev/measure/)
    - [Jigsaw validator](https://jigsaw.w3.org/css-validator/)
    - [W3C validator](https://validator.w3.org/)
    - [Am I Responsive?](https://amiresponsive.co.uk/)

## Acknowledgements

- Thank you to my mentor for your support throughout my project. It has been greatly appreciated. 
- Thank you to the CI slack community for your support throughout my project. 



