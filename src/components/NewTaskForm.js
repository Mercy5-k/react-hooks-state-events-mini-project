import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Controlled inputs state
  const [text, setText] = useState("");
  const [category, setCategory] = useState(
    categories.find((cat) => cat !== "All") || ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    // Call the callback with the new task object
    onTaskFormSubmit({ text, category });
    // Reset the form
    setText("");
    setCategory(categories.find((cat) => cat !== "All") || "");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories
            .filter((cat) => cat !== "All")
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

