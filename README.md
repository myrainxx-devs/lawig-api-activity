# RESTful API Activity - Myren Joy N. Lawig


## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
- Answer: Putting `BASE_URI` in `.env` allows configuration changes without modifying the source code. This makes the application easier to maintain and safer across different environments.

**2. Resource Modeling:**
- Why did we use plural nouns (e.g., `/dishes`) for our routes?
- Answer: Plural nouns represent a collection of resources following RESTful API conventions. This makes the API more consistent and easier to understand.

**3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?
- Answer: `201 Created` is used when a new resource is successfully created using a POST request. `200 OK` is used when a request succeeds and returns data or confirms an update.

- Why is it important to return `404` instead of just an empty array or a generic error?
- Answer: Returning `404` clearly indicates that the requested resource does not exist. This helps clients properly handle errors instead of assuming the request was successful.

**4. Testing:**
(Paste a screenshot of a successful GET request here)
![GET /dishes screenshot](image.png)


## Data Modeling Decisions

### Why did we choose to Embed the Review / Tag / Log?

We decided to embed the Review, Tag, and Log because they are minor and dependent pieces of data that are closely tied to the main document. Since they are typically accessed together with the parent record and do not need to exist independently, embedding them keeps the data structure simple, efficient, and optimized for faster reads.

### Why did we choose to Reference the Chef / User / Guest?

We chose to reference the Chef, User, and Guest entities because they exist independently and can be associated with multiple records in the system. Referencing helps prevent data duplication, maintains normalization, and ensures consistency when their information is updated.
