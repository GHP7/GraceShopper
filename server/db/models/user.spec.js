/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
  it('email cannot be null', async () => {
    const blankUser = User.build();
    try {
      await blankUser.validate();
      throw Error('validation should have failed without email');
    } catch (err) {
      expect(err.message).to.contain('email cannot be null');
    }
  });
  it('email cannot be empty', async () => {
    const emptyEmailUser = User.build({ email: '' });
    try {
      await emptyEmailUser.validate();
      throw Error('validation should have failed with empty email');
    } catch (err) {
      expect(err.message).to.contain('Validation notEmpty on email failed');
    }
  });
}) // end describe('User model')
