const xss = require('xss');

const SpotService = {
  insertSpot: async function(db, party_id, roles, userId) {
    const spotId = await db
      .insert({
        party_id,
        filled: userId
      })
      .into('spots')
      .returning('id')
      .then(([spot]) => spot);
    await Promise.all(
      roles.map(async function(role) {
        await db.insert({
          spot_id: spotId,
          role_id: role
        });
      })
    );
  },
  updateSpot(db, spot_id, newSpot) {
    return db('spots')
      .where('id', spot_id)
      .update(newSpot);
  }, 
  getSpotById(db, id){
    console.log('huh?', id);
    return db
      .select('*')
      .from('spots')
      .where({id})
      .first();
  }, 
  getNewOwnerId(db, owner_id, party_id){
    return db
      .select('filled')
      .from('spots')
      .whereNot('filled', null)
      .whereNot('filled', owner_id)
      .andWhere({party_id});
  }
};

module.exports = SpotService;
