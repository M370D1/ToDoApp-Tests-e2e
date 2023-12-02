import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { ProfileDetailsPage } from "../../page-objects/ProfileDetailsPage"
import { ProfileEditPage } from "../../page-objects/ProfileEditPage"


test.describe('Edit Profile Details - Firstname, Lastname, PhotoUrl', async () => {
    let homePage: HomePage
    let profileDetailsPage: ProfileDetailsPage
    let profileEditPage: ProfileEditPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        profileDetailsPage = new ProfileDetailsPage(page)
        profileEditPage = new ProfileEditPage(page)

        await homePage.visit()
        await homePage.login('Metodi@123', 'slojnaParola123')
        await homePage.clickOnProfileDetailsButton()
        await profileDetailsPage.clickOnEditProfileButton()
    })

    test('Edit Profile Details', async ({ page }) => {
        await profileEditPage.editProfile('Metodi', "Ivanov",
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RPK7GxwTDpoQDOjdB-DQbOKTfGOOtJmiUQ&usqp=CAU')
        await profileDetailsPage.assertProfileDetails()
    })
})