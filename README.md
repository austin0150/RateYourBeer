# RateYourBeer
A website that allows you to rate beers that you've tried. Made as a final for a web development class

<img src="https://github.com/austin0150/RateYourBeer/blob/main/src/public/assets/RateYourBeerLogo.png" width="400" height="400">

Infrastructure required to use code as is  
* NodeJS hosting
* MongoDB
* public firebase bucket  
  
## Site architecture  
This site uses NodeJS with the Express framework to serve html from the back-end.  
The site also utilized EJS, which allows for me to create templates once and re-use many times.
The beer reviews and comments are stored in the MongoDB.  
The photos that users can upload with their reviews are stored in the Firebase bucket.  
  
### This site utilizes bootstrap css for styling
  
## Site walkthrough  

This is the website homepage  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/Home.PNG">
  
This is the about page  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/About.PNG">
  
This page shows all of the beer reviews, from newest to oldest 
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/Reviews.PNG">
  
After clicking on any of the cards, you are taken to a detailed view of that review, including user comments.  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/Review1.PNG"> 
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/Review2.PNG"> 
  
You can create your own comment by clicking 'Add Comment' 
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/AddComment.PNG">
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/CommentFilled.PNG">  
  
Once you submit the comment, it will be added to the review  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/CommentAdded.PNG">  
  
You can create your own review by clicking the 'Write a Review' button in the nav bar.  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/WriteReview.PNG">  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/WriteReviewFilled.PNG"> 
  
Once you submit the review, it will be added to the feed of reviews  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/WriteReviewAdded.PNG"> 
  
You can use the search function in the nav bar to search using keywords.  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/SearchEntered.PNG">  
  
After the search is submited, only posts matching the keyword will be displayed. In this case, only our new post is shown.  
<img src="https://github.com/austin0150/RateYourBeer/blob/main/walkthrough/SearchResults.PNG"> 
