import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Getting Started | Minimal Docs Site",
    description: "Learn how to get started with our documentation",
};

export default function GettingStarted() {
    return (
        <main className="max-w-3xl mx-auto text-[#868794]">
            <h1 className="text-4xl font-bold mb-6 text-white">
                Getting Started
            </h1>
            <p className="text-xl mb-4">
                Welcome to the getting started guide for our documentation site.
                Follow these steps to set up your environment and begin using
                our tools.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
                Installation
            </h2>
            <p className="mb-4">
                To install our package, run the following command in your
                terminal:
            </p>

            <CodeBlock
                language="bash"
                filename="bash"
                code={`npm install @our-company/package`}
            />

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
                Configuration
            </h2>
            <p className="mb-4">
                After installation, you need to set up the configuration file.
                Create a file named{" "}
                <code className="text-white">config.js</code> in your project
                root and add the following content:
            </p>

            <CodeBlock
                language="javascript"
                filename="config.js"
                code={`module.exports = {
apiKey: 'YOUR_API_KEY',
environment: 'production'
}`}
                highlightLines={[2, 3]}
            />
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">
                Usage
            </h2>
            <p className="mb-4">
                Here&apos;s a basic example of how to use our package in your
                project:
            </p>

            <CodeBlock
                language="javascript"
                filename="index.js"
                // theme={oneDark}
                code={`import { Client } from '@our-company/package';
const client = new Client();
const result = await client.doSomething();
console.log(result);`}
                highlightLines={[3]}
            />

            <p className="mt-4">
                For more detailed information, please check out our Components
                and API Reference sections.
            </p>
        </main>
    );
}
