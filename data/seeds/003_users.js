
exports.seed = function (knex)
{
  // Deletes ALL existing entries

  const users = [
    {
      username: 'groot',
      password: 'iamgroot',
      role: 2
    },
    {
      username: 'Aladdin',
      password: 'jasmine',
      role: 2
    },
    {
      username: 'pumba',
      password: 'getonit',
      role: 2
    },
    {
      username: 'Jafar',
      password: 'i rule',
      role: 1
    },

  ]

  return knex('users').del()
    .then(function ()
    {
      // Inserts seed entries
      return knex('users').insert(users);
    });
};
