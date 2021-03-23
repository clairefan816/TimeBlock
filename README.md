// npm install redux
// npm install router
// npm install framer-motion

Progress:

March 20 2021 9:50 - 10:50 pm
1. Add Router to app

March 16 2021 1:30 - 5:30pm
1. Switch 2D array to 1D array of objects
2. Setting the default status of background color, null works, "null" also works
3. Move all data to redux
4. Complete data communication in between components
5. Handle first click event on Day Component
6. Handle first click event on Task Component
11pm - 12:30pm
7. Fixed all functions
8. Fixed selected and unselected


March 15 2021 1.5 hours

1. After several trys, finally nail down the data structure of the calendar to be 2-D array.

2. Set up tasks and colors for them

3. About how data can be stored in the Database. How about something like this:

   Table: today {
   	user 1{
   		time....[“study":[11:00 - 12:00, 14:00 - 15:00], "sleep":[22:00 - 6:00] ]
   }

   ​	user 2{
    		time....[“play":[11:00  15:00], "sleep":[22:00 - 6:00] ]
   ​	}

   }
   Table: tomorrow {
   	user 1{
    		time....
   	}

   ​	user 2{
    		time....
   ​	}

   }

March 14 2021 1 hour

1. Create the project
2. Create four components: Header, Sidebar, Day, Task
3. Create basic grid layout