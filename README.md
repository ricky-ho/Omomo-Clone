# Omomo Tea Shoppe Clone
View the application live at [https://omomoteashoppeclone.netlify.app](https://omomoteashoppeclone.netlify.app/).

View the server/backend repository at [https://github.com/ricky-ho/Omomo-Clone-Server](https://github.com/ricky-ho/Omomo-Clone-Server).

## Important Note
This project was inspired by https://www.omomoteashoppe.com/. All of the images and major designs were replicated 
from their official site. All copyrights go to OMOMO Tea Shoppe. This project is only for my personal educational purposes.

## Description 
This project is a full-stack ecommerce web application for boba milk tea. Users will be able to browse from a variety of beverages, modify
the drink options & add-ons, and add, edit, or remove items from their shopping cart. A user's shopping cart is persisted between each visit by utilizing the browser's LocalStorage. All payment information is handled by [Stripe](https://stripe.com). The application is fully-responsive and can be viewed on mobile, tablet, or desktop screen sizes.

## How the application works
The flow chart shown below demonstrates how the application works and its overall internal logic.

![Flow Chart diagram](https://res.cloudinary.com/ricky-ho/image/upload/c_scale,w_1000/v1635545033/Omomo/Omomo_FlowChart_jdda2w.jpg)

## Future Improvements
- Implement user accounts with order history
- Create and store sessions on the server to migrate all business logic into the server 

## Dependencies
- [Stripe](https://stripe.com/)
  - [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)
  - [@stripe/react-stripe-js](https://www.npmjs.com/package/@stripe/react-stripe-js)
- [react-router-dom](https://reactrouter.com)
- [react-icons](https://react-icons.github.io/react-icons)

### Screenshots
![Home page](https://res.cloudinary.com/ricky-ho/image/upload/v1635461493/Omomo/omomo-home_vja4rt.png)

![Menu page](https://res.cloudinary.com/ricky-ho/image/upload/v1635461492/Omomo/omomo-menu_bpdln7.png)

![Locations page](https://res.cloudinary.com/ricky-ho/image/upload/v1619137361/Omomo/msedge_zJvRlxDf5v_sboouc.png)

![Cart](https://res.cloudinary.com/ricky-ho/image/upload/v1635461492/Omomo/omomo-cart_yfx9dl.png)

![Checkout](https://res.cloudinary.com/ricky-ho/image/upload/v1635461492/Omomo/omomo-checkout_vj6gwy.png)

