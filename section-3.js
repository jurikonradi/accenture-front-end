/*
Section 3: Discussion

Look at this two-page app design:
Profile Listing Page
Profile Listing Page
Profile Page
Profile Page


You have 15mins to review and create a technical design; following this we will discuss the technical design and concerns. Some things you might consider:

	•	What data do you need and how would you design the APIs?
	•	How do you structure your UI components?
	•	How would you structure your code?
    •	How might SPA/React affect this?
    
*/

/* data needed:
profile id, photo url, photo size, name, surname, address, email, phone, status
*/

// API:
profile = {
  1: {
    ID: 1,
    photoUrl: "",
    photoSizeW: 0,
    photoSizeH: 0,
    name: "",
    surname: "",
    address: "",
    email: "",
    phoneCountryCode: 0,
    phone: "",
    status: "",
  },
  2: {
    ID: 2, //...
  },
};

//Methods:
Profile.add(){ // code };
Profile.remove(){ // code };
Profile.edit(){ // code };

//UI components:
/*
srv/components:

Navigation/
Navigation.js
Navigation.sass

ProfileListing/
ProfileListing.js
ProfileListing.sass

ProfilePage/
ProfilePage.js
ProfilePage.sass

Footer/
Footer.js
Footer.sass

/Additional components after destucturing

*/

// Code structure:
/* Imports, component should make one thing only (responsibile for one function), defaut export
 */
