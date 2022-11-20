
# Real Estate Test:

  

### Here is some notes to take in consideration while reviewing this project:

  

1- Database:

- The database (mockDB.js) contains the data for the following:

  - email/password - information about properties - and information about the "more homes" section, etc.

- Since the data I have created has the same amount of rooms and location names, I have decided to not use these parameters in the filtration process, but they are there as UI elements. So please take that in consideration while testing the app.

  

2- Google Map API:

- Due to the API being a paid service, I was unable to create a 1-to-1 "clone" shown in the design files.

- The coordinates of the random location generated by each refreshed is shared among "Rent" page as well as "Info" page via Context API, thought I suppose it is a bit difficult to check that due to the annoying pop up that Google creates.

  

3- Reasons for URL of "Info" page:

- As a developer it is extremely vital to be able to handle API requests and generate URLs accordingly. With that being said, I had mimicked the type of URLs a developer would create when dynamically creating pages when consuming APIs (or RESTful APIs).

  

4- Notes on the filtration process:

- It doesn't matter if the user navigated to the "Rent" page right away to use the form there, or used the one that exists in "Home", the results of both options will be the same (provided that the query is the exact same), as the information about the data to be fetched is shared via Context API, between the two pages.

5- Notes on repeated images/cards/carousel items etc: 

- Since this is a project to allow the participants to display their knowledge of React.JS and Web Design, I thought it was okay to re-use the same images/texts to hasten the process of development, as well as shift the focus of the viewer to the layout and functionality, rather than the content.

6- Notes on my shortcomings: 

- There was a couple of things I did not succeed in cloning well enough, like I did with the rest of the website: 
    - Such as, the Carousel at the bottom of the "Home" page. I generally know how to handle carousels, but I couldn't manage this one, because it wasn't the type to transition from one slide to a completely different one, but rather to transition as if one is pressing on the scrollbar arrows. 

    - Another thing is my inability to design the "for rent/ for invest/ for sale" buttons in the "Home" page.



    **Thank you so much for reviewing my application and I wish you a great rest of your day**
    **Kind Regards,**
    **Mhd Ali Houria**
