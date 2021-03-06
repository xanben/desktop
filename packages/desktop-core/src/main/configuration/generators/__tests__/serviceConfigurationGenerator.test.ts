import { ConfigurationKind } from "../../configurationKind";
import { ServiceConfigurationGenerator } from "../serviceConfigurationGenerator";

describe("canGenerate", () => {

    describe("can generate for", () => {

        test("service", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Service))
                .toBe(true);
        });
    });

    describe("can't generator for", () => {

        test("application", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.Application))
                .toBe(false);
        });

        test("external", () => {
            const generator = new ServiceConfigurationGenerator();

            expect(generator.canGenerate(ConfigurationKind.External))
                .toBe(false);
        });
    });
});
