import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';
import { ProtractorScreenshotExtension } from 'protractor-screenshot-extension';

const screenshotExtension = browser.screenshotExtension as ProtractorScreenshotExtension;

describe('ngx-smart-popover App', () => {
    const page = new AppPage();

    it('should not show any popovers initially', async () => {
        await browser.driver.manage().window().setSize(1440, 900);
        await page.navigateTo();
        await expect(screenshotExtension.checkPageScreenshot(
            'initial-page-load'
        )).toBe(0);
    });

    describe('the basic placements', () => {
        it('should show popover with top placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-top'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-top'
            )).toBe(0);
        });

        it('should show popover with top right placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-top-right'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-top-right'
            )).toBe(0);
        });

        it('should show popover with right placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-right'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-right'
            )).toBe(0);
        });

        it('should show popover with bottom right placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-bottom-right'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-bottom-right'
            )).toBe(0);
        });

        it('should show popover with bottom placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-bottom'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-bottom'
            )).toBe(0);
        });

        it('should show popover with bottom left placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-bottom-left'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-bottom-left'
            )).toBe(0);
        });

        it('should show popover with left placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-left'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-left'
            )).toBe(0);
        });

        it('should show popover with top left placement', async () => {
            const emoji = element(by.css('.all-placements .emoji-top-left'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-top-left'
            )).toBe(0);
        });
    });

    describe('the click functionality', () => {
        it('should not show a popover on hover', async () => {
            const emoji = element(by.css('.click-to-show .emoji'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-show-on-click-hover'
            )).toBe(0);
        });

        it('should show a popover on click', async () => {
            const emoji = element(by.css('.click-to-show .emoji'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).click().perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-show-on-click-show'
            )).toBe(0);
        });

        it('should hide the popover on second click', async () => {
            const emoji = element(by.css('.click-to-show .emoji'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).click().perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-show-on-click-hide'
            )).toBe(0);
        });
    });

    describe('the click outside functionality', () => {
        it('should not show a popover on hover', async () => {
            const emoji = element(by.css('.close-on-click-outside .emoji'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-close-on-click-outside-hover'
            )).toBe(0);
        });

        it('should show a popover on click', async () => {
            const emoji = element(by.css('.close-on-click-outside .emoji'));
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).click().perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-close-on-click-outside-show'
            )).toBe(0);
        });

        it('should hide when clicked outside', async () => {
            const emoji = element(by.css('.close-on-click-outside .emoji'));
            await browser.actions().mouseMove(emoji, { x: -100, y: 37 }).click().perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-close-on-click-outside-hide'
            )).toBe(0);
        });
    });

    describe('the placement reflection functionality', () => {
        it('should show a popover with bottom placement when enough room is available', async () => {
            const emoji = element(by.css('.placement-reflection .emoji'));
            await browser.executeScript('arguments[0].scrollIntoView(true)', emoji.getWebElement());
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-placement-reflection-bottom'
            )).toBe(0);
            // Hide it.
            await browser.actions().mouseMove(emoji, { x: -100, y: 37 }).perform();
        });

        it('should show a popover with top placement when not enough room is available', async () => {
            const emoji = element(by.css('.placement-reflection .emoji'));
            await browser.executeScript('arguments[0].scrollIntoView(false)', emoji.getWebElement());
            await browser.actions().mouseMove(element(by.css('.placement-reflection .emoji')), { x: 37, y: 37 }).perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-placement-reflection-top'
            )).toBe(0);
        });
    });

    describe('the append to body functionality', () => {
        it('should append popover to body', async () => {
            const emoji = element(by.css('.body-popover .emoji'));
            await browser.executeScript('arguments[0].scrollIntoView(true)', emoji.getWebElement());
            await browser.actions().mouseMove(emoji, { x: 37, y: 37 }).click().perform();
            // Give enough time to finish rendering.
            await browser.sleep(200);
            const elements = element.all(by.css('body>popover-content .popover-content .popover-body'));
            await expect((await elements).length).toBe(1);
            await expect ((await elements.get(0).getText())).toBe('Message from body');
            await expect(screenshotExtension.checkPageScreenshot(
                'popover-appended-to-body'
            )).toBe(0);

            // Close out the popover to put us in a clean state
            await browser.actions().mouseMove(emoji, { x: -100, y: 37 }).click().perform();
        });
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        }));
    });
});
