import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
    title: "API Reference | Minimal Docs Site",
    description: "Detailed API reference for our library",
};

export default function ApiReference() {
    return (
        <main className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-white">
                API Reference
            </h1>
            <p className="text-xl mb-4">
                This section provides a detailed reference for the API of our
                library. You&apos;ll find information about available methods,
                their parameters, and return values.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Client</h2>
            <p className="mb-4">The main class for interacting with our API.</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Constructor</h3>
            
            <CodeBlock
                language="javascript"
                filename="config.js"
                code={`new Client(config: ClientConfig)`}
                highlightLines={[1]}
            />
            <p className="mb-4">Creates a new instance of the Client class.</p>
            <h4 className="text-lg font-semibold mt-4 mb-2">Parameters</h4>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <code>config</code>: An object containing the client
                    configuration
                </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2">Methods</h3>
            <h4 className="text-lg font-semibold mt-4 mb-2">doSomething()</h4>
          
            <CodeBlock
                language="js"
                filename="promise.js"
                code={`async doSomething(): Promise<Result>`}
                highlightLines={[2]}
            />
            <p className="my-4">Performs an action and returns a result.</p>
            <CodeBlock
                language="jsx"
                filename="Input.jsx"
                code={`import { Input } from '@our-company/package';
<Input placeholder="Enter your name" onChange={(e) => console.log(e.target.value)} />`}
                highlightLines={[2]}
            />
            <h4 className="text-lg font-semibold mt-4 mb-2">Returns</h4>
            <p className="mb-4">A Promise that resolves to a Result object.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Types</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">ClientConfig</h3>
           
            <CodeBlock
                language="tsx"
                filename="clientConfig.tsx"
                code={`interface ClientConfig {
  apiKey: string;
  environment: 'production' | 'development';
}`}
                highlightLines={[2]}
            />
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Result</h3>
           
            <CodeBlock
                language="tsx"
                filename="types.tsx"
                code={`interface Result {
  id: string;
  data: any;
  timestamp: number;
}`}
                highlightLines={[2,3,4]}
            />
            <p className="mt-4">
                For more detailed information about specific components and
                their props, please refer to the Components section.
            </p>
        </main>
    );
}
