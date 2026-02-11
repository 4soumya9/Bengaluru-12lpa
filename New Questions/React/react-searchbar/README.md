ProductTable decides what to render

When a new category starts → it renders ProductCategoryRow

For every valid product → it renders ProductRow

🏆 Interview Answer (Short & Strong)

ProductTable handles filtering and grouping logic.
ProductCategoryRow displays category headers.
ProductRow displays individual product details.
This separation keeps logic and UI clean and reusable.

| Component              | Role          | Responsibility       |
| ---------------------- | ------------- | -------------------- |
| **ProductTable**       | Manager       | Decides WHAT to show |
| **ProductCategoryRow** | Section Label | Shows category title |
| **ProductRow**         | Worker        | Shows one product    |

🧠 Why we did NOT use map() in ProductTable

Because the UI we are generating is not a simple 1 item → 1 row situation.

Instead, we are:

1️⃣ Filtering items
2️⃣ Grouping by category
3️⃣ Inserting extra rows (category headers)
4️⃣ Sometimes skipping items entirely

That breaks the normal purpose of map().

🔹 What map() is best for

Use map() when:

✔ Each data item becomes exactly one JSX element
✔ No extra elements added
✔ No complex control flow

Example:

products.map(product => (
<ProductRow key={product.name} product={product} />
));

This works only when:
products.length === rows.length

🔹 What happens in YOUR table

For this data:

Fruits
Apple
Dragonfruit
Passionfruit
Vegetables
Spinach
Pumpkin
Peas

We actually render:

Category Row (Fruits)
Product Row (Apple)
Product Row (Dragonfruit)
Product Row (Passionfruit)
Category Row (Vegetables)
Product Row (Spinach)
Product Row (Pumpkin)
Product Row (Peas)

👉 6 products → 8 rows rendered

So it is NOT a direct transformation.

🔹 Why forEach() fits better

forEach lets us manually push elements into an array:
🔹 Why forEach() fits better

forEach lets us manually push elements into an array:

const rows = [];

products.forEach(product => {
if (filters fail) return;

if (new category) {
rows.push(<ProductCategoryRow ... />);
}

rows.push(<ProductRow ... />);
});

We control:

When to add rows

When to skip rows

When to add extra rows

That flexibility is why forEach is used.
