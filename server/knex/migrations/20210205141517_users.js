export const up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("name", 128).notNullable();
  });

export const down = (knex) => knex.schema.dropTableIfExists("users");
