# Sensoteq Technical Challenge

The assessment involves accessing a provided PostgreSQL database and returning results via a small set of APIs to be built through the use of Javascript. There are only a few requirements that must be met when completing the assessment:

1. Any Javascript runtime can be used
2. Use a package manager such as pnpm, bun, npm or yarn
3. PostgreSQL must be used

## Assessment Details
The provided database will contain multiple tables; the ER model for it is provided below. The database is named `dvdrental`.

![image](https://user-images.githubusercontent.com/21364333/197232749-2ad14346-40a1-4b21-94a1-713ed23cdd5f.png)

Not all the tables in this diagram will be needed but pay attention when interacting with the various tables, especially when writing, to not have any unintended side effects.

## Requirements
The following requirements should be met by your API. For the sake of this assessment four separate endpoints should be developed, one for each requirement.

1. Customers wish to know all the movies in a category - given the category return a list of films. The `film_id`, `title`, `description` and `rental_rate` should be returned. The `GET` request will have the query string parameters specified below.

   - `category_name` - The name of the category which should be searched for.

2. A new customer is joining the system, give them all the various details needed. The new customer may only exist in one of the pre-existing cities as no new stores have opened. It is expected that both the customer and address tables will be fully populated for the new customer, the `POST` request will contain the parameters specified below. Any other parameters not specified in the `POST` should be populated automatically (e.g. `active`).
   - `store_id` - The ID of the store where the customer was signed up
   - `first_name` - the customer's first name
   - `last_name` - the customer's last name
   - `email` - the customer's email address
   - `phone` - the customer's phone number
   - `address` and `address2` - the customer's address lines
   - `district` - the district of the city in which the customer lives
   - `city_id` - the ID of the city in which the customer lives
   - `postal_code` - The postal code of the customer
   
3. Deletion of a customer is occurring due to GDPR issues, their rentals and payments cannot be deleted but their customer record and address must be removed. The endpoint should take the customer ID for deletion. The `DELETE` request will contain the parameters specified below.
   - `customer_id` - The ID of the customer to be deleted.
   
4. Server-side searching for films is required, given some or all of the following, an incomplete (or complete) film title or a length that the film must be below. For example a title of "to" and length 60 might be provided, this would return 6 films. When returning the category and language of the film should be included. The `GET` request will have the query string parameters specified below.
   - `title` - an optional title of film parameter
   - `length` - an optional length of film parameter
   
   
## Criteria
In general the criteria for the assessment is relatively flexible, we will look at any work you produce/provide to us. We will be assessing code quality, use of packages, general design and structure and compliance with general industry expectations.

Be prepared to discuss your solution at interview as it is likely we will take some interesting points and ask for explanation as to why that was the particular method used in the solution.

Finally, do not overthink/work this assessment, we hope to get an idea of how you approach the problem but if a particular part proves to be too difficult then work on other components, we will assess everything you provide us with.

## Setup
Use the following docker image to create a restored PostgreSQL database with workable data: https://hub.docker.com/r/sensoteq/tech-assessment-db

For example:
`docker run -p 8989:5432 -e POSTGRES_PASSWORD=postgres -d sensoteq/tech-assessment-db:latest`

This will create a docker container accessible via port 8989 and a user with the login credentials of postgres:postgres.
You are entirely free to adjust your docker containers run parameters.



