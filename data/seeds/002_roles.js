
exports.seed = function (knex)
{


  const roles = [
    {
      name: 'admin',
    },
    {
      name: 'user'
    }
  ]
  // Deletes ALL existing entries
  return knex('roles').insert(roles);
}
