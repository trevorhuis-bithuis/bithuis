CREATE VIRTUAL TABLE recipe_search USING fts5(title, description, slug);