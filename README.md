<h2>Task 1 </h2>
<h4>
  Develop a single page application where you need to insert, update, delete and visualize data on a webpage. 
</h4>
<h5>Overview</h5>
<p>This project is a single-page application (SPA) built using Angular 18 and styled with Material UI. The application allows users to manage a list of products, including inserting, updating, deleting, and viewing product details. The data is stored in a JSON file and served using a JSON Server.</p>
<li>Product Management: Users can view a list of products, add new products, update existing ones, and delete products.</li>
<li>Responsive UI: The application uses Angular Material UI components to provide a clean and responsive user interface.</li>
 <li>Modular Structure: The application is structured into different components for better organization and maintainability.</li>
 <h5>Project Structure</h5>
 <h6>1. Components</h6>
 <li>Header Component: Displays the header of the application.</li>
  <li>Product Component: Shows the list of products retrieved from the JSON server. Each product entry includes action buttons for editing and deleting the product.</li>
   <li>AddProduct Component: This component is used to add a new product. It is displayed when the "Add Product" button is clicked.</li>
<h6>2. Product Model</h6>
<li>Defines the structure of a product, including properties like id, name, price, description, etc.</li>
<h5>Work Flow</h5>
<ol>
  <li>Viewing Products: On loading the application, the product component fetches and displays the list of products from the JSON server.</li>
  <img src="https://raw.githubusercontent.com/sivaramakrishna-27/RIMES_assignment/main/Task_img/task-01-1.png">
  <li>Adding a Product: Clicking the "Add Product" button opens the AddProduct component, where users can fill out a form to create a new product. After submission, the new product is added to the list.</li>
  <img src="https://raw.githubusercontent.com/sivaramakrishna-27/RIMES_assignment/main/Task_img/task-01-2.png">
  <li>Editing a Product: Each product entry has an "Edit" button. When clicked, it allows users to modify the product's details.</li>
  <img src="https://raw.githubusercontent.com/sivaramakrishna-27/RIMES_assignment/main/Task_img/task-01-03.png">
  <li>Deleting a Product: Each product entry also has a "Delete" button, allowing users to remove the product from the list.</li>
  <img src="https://raw.githubusercontent.com/sivaramakrishna-27/RIMES_assignment/main/Task_img/task-01-04.png">
</ol>

<h4>Prerequisites</h4>
<ul>
  <li>Node.js and npm: Ensure you have Node.js and npm installed on your machine</li>
  <li>Angular CLI: Install Angular CLI globally using npm.</li>
  <ul>
    <li>npm install -g @angular/cli</li>
  </ul>
  <li>JSON Server: Install JSON Server globally using npm.</li>
  <ul>
    <li>npm install -g json-server</li>
  </ul>
  <li>Run the Application: Start the Angular development server.</li>
  <ul>
    <li>ng serve</li>
  </ul>
</ul>
<h4>Conclusion</h4>
<p>This single-page application provides a straightforward way to manage product data with a user-friendly interface. The modular design and use of Angular Material UI make the application both maintainable and visually appealing.</p>
