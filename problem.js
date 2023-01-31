/*
From the Figma wireframe designs above, develop frontend and backend services for a fully functional Step Addition. The tech stack to used is React (for Frontend), NodeJS  + Express (for backend)

Description: 1. The Step Addition should have 1 screen - that is Home Screen given above.
2. On Home screen, a user puts two numbers to add. He then can click on “Generate Steps”.
3. The click on button would trigger an API call using npm module Axios. In API call we would pass the two numbers to add.
4. This API is supposed to give JSON object of step by step addition process.
5. Show the JSON object received from API in the output area shown above.
6. Documentation in Readme about how to run the blog services (frontent, backend and db) in local.
7. Upload your code to github and share github URL.


API Details:
1. Method: POST
2. Request Body


    {
      num1: <user’s first_number, e.g 1489>
      num2: <user’s second_nember, e.g 714>
    }


3. Response Body: (as shown in home page)
4. Validate the request body using REGEX to accept only valid numbers. That is, only positive numbers are allowed.

Explanation of Steps generation:
The step generation process is very simple.
When we do addition in a notebook, we are only concerned about carry and sum.
Suppose we want to add 1489 and 714.
The first step is to add digits at unit places. That is add “9” (from 1489) to “4” (from 714).
In this process, the sum is 13 (because 9+4=13). 
The “1” of 13 goes as carry to tens place. So the actual sum is “3” and “1” is carry. 
As the “1” which goes to carry is at tens place, we are appending underscore for unit place. So carryString is “1_”
Hence, in step-1, we have carryString =”1_” and sumString =”3”.
Now its turn to add digits at tens place. That is “1” from carry of previous step, “8” from 1489 and “1” from 714.
The sum is “10” (1+8+1), but “1” would go as carry. So sumString updates to  “03” and carryString updates to “11_”.
Therefore, in step-2, carryString=”11_” and sumString=”03”.
See whole sum process below

 carryString --->       111_
                       1489
                        714
                      =====
  sumString --->       2203
                      =====

*/








