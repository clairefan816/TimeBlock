Progress:
March 14 2021 1 hour

1. Create the project
2. Create four components: Header, Sidebar, Day, Task
3. Create basic grid layout

March 15 2021 1.5 hours

- After several trys, finally nail down the data structure of the calendar to be 2-D array.

- About how data can be stored in the Database. How about something like this:

  - Table: today {
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

    where each table is a day, and entries would be all the users within that day. The time array would be based on categories of activity.