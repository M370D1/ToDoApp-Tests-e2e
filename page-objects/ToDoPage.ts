import { expect, Locator, Page } from "@playwright/test";

export class ToDoPage {
    readonly page: Page
    readonly todoInput: Locator
    readonly submitButton: Locator
    readonly deleteButton: Locator
    readonly todoItem: Locator

    constructor(page: Page) {
        this.page = page
        this.todoInput = page.locator('#id_content')
        this.todoItem = page.locator('.todo-item')
        this.submitButton = page.locator('text=SUBMIT')
        this.deleteButton = page.locator('text=Delete')
    }

    async addToDo(todoItem: string) {
        await this.todoInput.fill(todoItem)
        await this.submitButton.click()
    }

    async deleteToDo(nth: number) {
        await this.deleteButton.nth(nth).click()
    }

    async assertToDoCount(expectedCount: number) {
        await expect(this.todoItem).toHaveCount(expectedCount)
    }
}

