# Point of Sales (POS) System

Welcome to the Point of Sales (POS) project! This is an Angular-based web application integrated with Firebase for managing sales transactions in a retail environment. The system provides a user-friendly interface for both customers and store personnel to facilitate the sales process efficiently. Additionally, it includes the functionality to generate barcodes for different products.

## Features

- User authentication: Secure user registration and login functionality using Firebase Authentication.
- Product management: Add, update, and delete products with details such as name, price, and quantity.
- Barcode generation: Automatically generate unique barcodes for each product for easy scanning at the point of sale.
- Inventory management: Track the available stock of each product and receive low stock notifications.
- Sales transactions: Create, edit, and finalize sales orders, including adding and removing products.
- Sales reports: Generate reports to analyze sales data and monitor business performance.
- Customer management: Maintain a database of customer information, including contact details and purchase history.
- Responsive design: Ensure a seamless experience across devices, including desktops, tablets, and mobile devices.

## Technologies Used

- Angular: An open-source framework for building efficient web applications.
- TypeScript: A free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. 
- Firebase: A powerful development platform that provides various cloud services, including real-time database, authentication, and hosting.
- Barcode API: Integration with a barcode generation API to dynamically create unique barcodes for each product.

## Installation

To run the POS system locally on your machine, follow these steps:

1. Clone the repository to your local machine using the following command:

   git clone https://github.com/your-username/pos-system.git

2. Navigate to the project directory:

   cd pos-system

3. Install the project dependencies using npm:

   npm install

4. Configure Firebase:

   - Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
   - Enable the Authentication, Firestore, and Storage services in your Firebase project.
   - Generate the Firebase configuration object.
   - Update the `src/environments/environment.ts` file with your Firebase configuration.


5. Start the development server:

   ng serve

6. Open your browser and visit [http://localhost:4200](http://localhost:4200) to access the application.

## Usage

- Upon accessing the application, users will be directed to the login page. If you don't have an account, click the "Sign Up" button to create one.
- After logging in, the dashboard will be displayed, providing an overview of sales, products, and inventory status.
- Use the navigation menu to access different sections of the application, such as products, sales, customers, and reports.
- Manage products by adding, editing, or deleting them from the product management section. The system will automatically generate unique barcodes for each product.
- Create new sales transactions by adding products to the cart and proceeding to the checkout section.
- Generate reports to analyze sales data and gain insights into your business performance.
- Admin users can manage user roles and permissions, granting or revoking access to specific features.

## Contributing

Contributions to the POS project are always welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature