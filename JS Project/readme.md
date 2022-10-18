# Employee Department Project

## This Project Will Give us a Whole Some Idea about How Classes, File Organization, Local Storage, Styling , Structuring Layout

<hr>
- <h2>This Project is WrapUp in 5 Folders </h2>
    1. <strong>Model</strong> <br>
    2. <strong>Implementation</strong> <br>
    3. <strong>Pages</strong> <br>
    4. <strong>Scripts</strong><br>
    5. <strong> Readme.md </strong>
<hr>

> ## Model Folder

- This is Made Up of BaseModel of the States or attributes which we are going to use in folder, which is also
- Where we have 2 more Class EmployeeModel and DepartmentModel which are also Inheriting From Base Model

> ## Implementation Folder

- this is build with 3 Files which hare Implementation for our base Model More like Interface.
- all the Logic is in these 3 Files - BaseImplementation -> all the Related Function are Defined Here - DepartmentImplementation -> all the Related Function related to Department and also Inheriting from BaseImplementation  
   - EmployeeImplementation -> all the Related Function related to Employee and also Inheriting from BaseImplementation  
   <br>
  > ## Pages
- This is Where Our Html files Lies for Everything our Structure of Webpage and Styling Everything. > Note: Internal CSS is Used
  <br>

> ## Scripts

- This is Where magic Happens.
- Consist of multiple Files to do all the Rendering, UI Stuff, Pagination , Utility Functions
- Made up of 9 Files:
  - <u>common.js</u> : This Files Is Just for Doing Drop Down Animation for Menu.
  - <u>departmentAdd.js</u> : IT tells us how to add Department in the List
  - <u>DepartmentEdit.js</u> : it take ID From Url to Edit the Data inside our Local Storage
  - <u> DepartmentList</u> : Create TableFor Department and also made with UI EventListener for Edit and Delete button
  - <u>EmployeeAdd.js</u> : IT tells us how to add Employee in the List
  - <u>EmployeeEdit.js</u> : it take ID From Url to Edit the Data inside our Local Storage
  - <u> EmployeeList</u> : Create TableFor Employee and also made with UI EventListener for Edit and Delete button
  - <u>Pagination.js</u> : Pagination Function How It Works
  - <u>Utility.js</u> : this is some Utility Function Which hare common in Files, Like like CreateTable, URlDecoder, checkAttribute  - can be Use Directly via importing  