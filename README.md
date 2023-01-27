## Project Name: 
Wheel Mania, an website which offers Second Hand cars to the customers and help sellers to get their cars sold.


##Live site Link(Firebase):
https://wheel-mania.web.app

##Client Public Repo Link:
https://github.com/17-35060-2Akash/wheel-mania-client-side-assignment-12

##Server Public Repo Link:
https://github.com/17-35060-2Akash/wheel-mania-server-side-assignment-12



## Description:
Here is an website named Wheel Mania. It's a react application which is designed to offer Second hand cars for resale to the differentiated 
users categorized as Buyers and sellers. There's also a third category which is the admin. The three experience different feel from Wheel Mania Resellers.

#common parts:
A navbar which is always in the top and the footer which is at the bottom of the page are common always. 
For Smaller screens when you toggle the navbar toggler it opens a side panel from the left. Moreover you can see the conditional toggling 
between Login vs Dashboard and Sign out. If you login you can see the username in the navbar corner.
 
#Home Page:
Everyone is allowed to see Home. first we'll encounter the main home where you can see some introductory sections along with the car categories. There's an advertisement section as well
but the section depends on if a seller advertises his/her product or not. Each car category can redirected you to Wheel Mania listings by catergory if you login.

##Dashboard:

#When a Buyer logs in and goes to the Dashboard he can see:

My Orders where he can see products from the categories he selected,and 
My Wishlist showing his wishlist. 

#When a Seller logs in and goes to the Dashboard he can see:

Add a Product where he can add his own listing and when he is done he'll get redirected to My Products page,
where he can see what he'as added.

#When an Admin logs in and goes to the Dashboard he can see:

All Sellers and All Buyers page where he can delete one user if he has the access and 
verifying a seller. If sellers are verified there will show a blue tick a aside of their names.



#Login, Logout and Sign Up: 
The login page has two types of login options. Email password based and google login.
The signup page'll take you to the home. They are both secured properly.


#Other pages:
There are a Blog, Display error and an Not Found Page.

Features implemented:
Structure and logic: React, js, react router, nodeexpress, mongodb etc.
Security: Firebase Authentication and JWT Authorization.
Beauty: tailwind Css, daisyUI, react icons, sweetalert, react hot toast, stripe etc.



##API links:

https://wheel-mania-server.vercel.app
