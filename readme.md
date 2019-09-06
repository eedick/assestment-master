# Code Assessment

### Time Limit: 6 hours

Please try to complete this exercise within six hours. If you're not able to complete it by then, please provide a link to your work along with a list of challenges, reasons why they were a challenge, and how you would overcome them if you had more time. It's more important to see your process and approach than it is to deliver production-ready code (though it doesn't hurt).

I'll be looking for correctness, thoughtfulness, efficiency, and intent.

The goal is to demonstrate your abilities in;

- parsing and manipulating data

- using a third-party library

- developing responsive, efficient web pages with readable code


## Tasks:

1. Using the files found in `/public`, correct all errors on the web page. The page should be responsive and adhere to strict HTML/CSS/JS standards. Vanilla Javascript is preferred.

2. Build a data structure that captures the count of each word in the content of the "bodyHtml" field(s) from JSON document `/test_feed.json`.

3. Utilize the Chart.js library (http://www.chartjs.org/) to visualize the results on the web page. You're free to implement it in anyway you see fit, including the use of other libraries.

4. Using git, put the files in a publically accesible repo so that the test can be run on a local machine.


## My progress:
1. Cleaned up index.html file
    - cleaned out inline styling and moved to index.css
    - added meta tags
    - cleaned up script and link tags
    - added jump link ids for each section
    - moved scripts to footer
    - second section modified mobile styling
    - removed the margin surrounding the whole page
2. Deleted common.css and merged into index.css
    - merged all into one since there was duplicate style calls in each
    - easier to work with
    - to make it work in original .html file needed to remove the </link> since it's a self closing tag
3. Created a new .js file for chart data
4. I was able to find the pattern in the .json file, where {"vis": 1,} contained bodyHtml and {"vis": 0,} did not contain bodyHtml. In the chart repeating 1's will be highlighted blue, the dots indicate the "word count":
    - Originally I tried looping through each item when vis == 1 to gain the count of those objects (commented out in chart.js)
    - Then I converted the JSON into a string -- which gave me the value of variable x
    - Through the commented out code (key + " -> " + x[key]); I was able to get each character individually
    - Throughout the whole process I've only been able to get the character count
    - To get the word count, I would try to loop through the string and write a function to eliminate the parts that aren't technically words
    - I was able to gain the character count of the first bodyHTML in the JSON file through the code commented out in chart.js, however it stops looping after the first one
        - Missing a piece of the puzzle here, but definitely exhausted my searches and spent a bit too much time trying to debug why the if statement wouldn't loop. Have a feeling it has to do with the else if statement and I'm missing something in the actual if statement
5. Chart.js
    - I've used chart.js before for a different project but not to the extent of pulling in JSON data -- was given the values to input to make the graph accurate for our website
6. Existing .js files:
    - common.js had to be switched in the .html to src="..." instead of href="..."
    - index.js moved everything into the align function relating to the footer, in order to get the footer to have a text-align:center with position:absolute I had to give the id a width value of 100%

## Struggles:
1. Getting the JSON data to load and read properly in the chart
    - Wanted to submit some kind of chart even though it's not correct
