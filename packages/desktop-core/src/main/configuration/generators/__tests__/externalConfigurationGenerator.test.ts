import { ConfigurationKind } from "../../configurationKind";
import { ExternalConfigurationGenerator } from "../externalConfigurationGenerator";

describe("canGenerate", () => {

    describe("can generate for", () => {

        test("external", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.External))
                .toBe(true);
        });
    });

    describe("can't generator for", () => {

        test("application", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Application))
                .toBe(false);
        });

        test("service", () => {
            const generator = new ExternalConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Service))
                .toBe(false);
        });
    });
});
