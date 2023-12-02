import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { RegisterPage } from "../../page-objects/RegisterPage"
import { ProfileDetailsPage} from "../../page-objects/ProfileDetailsPage"
import { ProfileEditPage } from "../../page-objects/ProfileEditPage"


test.describe('Register and delete profile', () => {
    let homePage: HomePage
    let registerPage: RegisterPage
    let profileDetailsPage: ProfileDetailsPage
    let profileEditPage: ProfileEditPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        registerPage = new RegisterPage(page)
        profileDetailsPage = new ProfileDetailsPage(page)
        profileEditPage = new ProfileEditPage(page)

        await homePage.visit()
    })

    test('Negative register scenario with only numeric password', async ({ page }) => {
        await homePage.clickOnRegisterButton()
        await registerPage.register('Meto@321', 'meto321@abv.bg',
            '123456', '123456')
        await registerPage.assertErrorPasswordMessage()
    })

    test('Positive register scenario', async ({ page }) => {
        await homePage.clickOnRegisterButton()
        await registerPage.register('Meto@321', 'meto321@abv.bg',
            'slojnaParola123', 'slojnaParola123')
        await homePage.login('Meto@321', 'slojnaParola123')
        await homePage.assertWellcomeMessage('Welcome, Meto@321')
    })

    test('Delete profile', async ({ page }) => {
        await homePage.login('Meto@321', 'slojnaParola123')
        await homePage.clickOnProfileDetailsButton()
        await profileDetailsPage.clickOnEditProfileButton()
        await profileEditPage.deleteProfile()
        await homePage.login('Meto@321', 'slojnaParola123')
        await homePage.assertErrorMessage()
    })
})