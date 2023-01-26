/* eslint-disable */
Feature('restaurant')

Scenario('Unliking a resto', ({I}) => {
    I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
    I.waitForElement('#likeButton', 10)
    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('/#/favorites')
    I.waitForElement('.gridList', 10)
    I.seeElement('.gridList')
    I.seeElement('.gridItem')
    I.click('.gridItem')

    I.waitForElement('#likeButton', 10)
    I.seeElement('#likeButton')
    I.click('#likeButton')

    I.amOnPage('/#/favorites')
    I.seeElement('.handle_favorite')
})  