📄 Statement of Purpose (SOP) – Recipe Finder App
## Objective

The primary objective of this project is to build an intelligent recipe discovery platform that dynamically fetches and presents meals based on a user’s context — such as mood, preferred category, available time, or available ingredients. The application aims to provide an engaging, interactive, and personalized cooking assistant experience.

## Motivation

Choosing what to cook is often a frustrating task, especially when limited by time, ingredients, or indecision. Inspired by the idea of tailoring recipes to moods and constraints, this project was designed to simplify the decision-making process using multiple APIs, while also strengthening skills in frontend development, API integration, and state management in React.



Features Developed

1) Dynamic Recipe Search Modes

    👉 Users can select how they want to discover meals:

    👉 Random Meal

    👉 Random 10 Meals

    👉 Category-wise

    👉 Area-wise (Cuisine-based)

    👉 Ingredients-based

2) Dropdown Search Bar

    👉 A unified search interface lets users choose their preferred mode, which dynamically updates the API endpoint.

3) API Integration

    👉 Multiple endpoints integrated seamlessly (random_meal, random10_meals, categories, area, list_of_ingredients).

4) Conditional Rendering

    👉 Results are displayed differently based on API data structure (handling both idMeal & idIngredient).

5) Error & Loading Handling

    👉 Loading indicators while fetching data.

    👉 Graceful error handling for network/API failures.

    👉 Empty state messages when no recipes are found.

6) Reusable Components

    SearchBar for query handling.

    RecipeCard for displaying recipes uniformly.

    State-driven rendering in Home.jsx.

7) Technical Implementations

    Frontend: React.js

    State Management: React Hooks (useState, useEffect)

    API Calls: Fetch API with async/await

    Error Handling: Try/catch with descriptive messages

    Component Design: Modular & reusable

    UI Feedback: Loading spinners, error states, empty states

## Technical Implementation

    # To run this project in the local computer follow this command

    git clone https://github.com/sadiqbasha190133/recipe-ideas.git

    npm install # to install dependencies

    npm run dev # to start the server

🚀 View Project: https://3mx7mn-5173.csb.app/


## Project Images:

![Home Page](https://i.ibb.co/MkMgqyCP/1.png)

![Search Meals by ingredients](https://i.ibb.co/39HZtXp0/2.png)

![Cooking details](https://i.ibb.co/TD9ytyyB/3.png)

![Searching types](https://i.ibb.co/Xff4QgqS/4.png)



## API`S USED

https://www.themealdb.com/api/json/v1/1/list.php?c=list # for getting categories list

https://www.themealdb.com/api/json/v1/1/list.php?a=list #for getting areas list

https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient} # to search by ingredient

https://www.themealdb.com/api/json/v1/1/filter.php?c={category_name} # to get meals by category

https://www.themealdb.com/api/json/v1/1/filter.php?a={area_name} # to get meals by area

https://www.themealdb.com/api/json/v1/1/random.php # to get a random meal

https://www.themealdb.com/api/json/v1/1/search.php?s={meal_name} # to get by meal name

https://www.themealdb.com/api/json/v1/1/search.php?f={a} # to search by the first letter



