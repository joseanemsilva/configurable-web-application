import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page';
import mockedResponses from './ResponsesMock';
import { type MissionData, type HeroData } from '@/types/strapi'

const assetsFetchMock = (input: string | URL | Request) => Promise.resolve({
    ok: true,
    status: 200,
    json: async () => {
        if (!(input instanceof URL)) return {};
        const path = input.pathname;
        const responseKey = Object.keys(mockedResponses).find(
            (key) => path.startsWith(`/api${key}`))

        return responseKey ? mockedResponses[responseKey] : {}
    }
} as Response);

describe('HomePage', () => {


    describe("Successful loading",
        () => {
         let fetchMock: jest.Mock;

            beforeEach(() => {
                fetchMock = jest.fn();
                globalThis.fetch = fetchMock as any;
                fetchMock.mockImplementation(assetsFetchMock);
            });

            afterEach(() => {
                jest.clearAllMocks();
            });


            it('renders the hero content on home page', async () => {
                render(await HomePage());
                const heroData = mockedResponses["/hero-section"].data as HeroData;

                const heading = screen.getByRole("heading", { level: 1, name: heroData.heading });
                const subHeading = screen.getByText(heroData.subheading);
                const ctaPrimary = screen.getByRole('link', { name: heroData.ctaPrimary });

                expect(heading).toBeInTheDocument();
                expect(subHeading).toBeInTheDocument();
                expect(ctaPrimary.getAttribute('href')).toBe('/contact-us');
            });

            it('renders the hero image on home page', async () => {
                render(await HomePage());
                const heroData = mockedResponses["/hero-section"].data as HeroData;

                const image = screen.getByAltText(heroData.heroImage.alternativeText);

                expect(image).toBeInTheDocument();
            });

            it('renders the mission section content on home page', async () => {
                render(await HomePage());
                const missionData = mockedResponses["/mission-section"].data as MissionData;

                const title = screen.getByRole("heading", { level: 2, name: missionData.sectionTitle.title });
                const description = screen.getByText(missionData.sectionTitle.description!);

                const content = screen.getByText(missionData.contents[0].title)

                const missionListCount = content.parentElement?.parentElement?.childElementCount || 0;

                expect(title).toBeInTheDocument();
                expect(description).toBeInTheDocument();
                expect(content).toBeInTheDocument();
                expect(missionListCount).toBe(missionData.contents.length);
            });
        });

    describe("error loading",
        () => {
            let fetchMock: jest.Mock;

            beforeEach(() => {
                fetchMock = jest.fn();
                globalThis.fetch = fetchMock as any;
                fetchMock.mockReturnValue(
                    {
                        ok: false,
                        status: 500,
                    }
                );
            });

            afterEach(() => {
                jest.clearAllMocks();
            });

            it('displays an error message when the CMS content fails', async () => {
                render(await HomePage());
                
                const errorMessage = screen.getByText("Sorry! An Error has occurred");

                expect(errorMessage).toBeInTheDocument();
            });

        });
});