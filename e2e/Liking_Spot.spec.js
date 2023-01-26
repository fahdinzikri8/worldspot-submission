const assert = require('assert')

/* eslint-disable */
Feature('restaurant')

Scenario('Liking a spot', async ({ I }) => {
    I.amOnPage('/')
    I.waitForElement('.gridItem', 10)
    I.seeElement('.gridItem')
    const firstRestoName = await I.grabTextFrom(locate('.gridItem').first())
    I.click(locate('.gridItem').first())

    I.waitForElement('#likeButton', 10)
    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('#/favorites')
    I.waitForElement('.gridList', 10)
    I.seeElement('.gridList')
    const likedRestoName = await I.grabTextFrom(locate('.gridItem').first())
    
    assert.strictEqual(firstRestoName, likedRestoName)
    
})