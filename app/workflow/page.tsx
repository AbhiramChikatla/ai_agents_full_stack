"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
    Globe,
    Settings,
    Wrench,
    PlayCircle,
    FolderOpen,
    BarChart2,
    Video,
    Upload,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React, { useState } from "react";

export default function BrowserInterface() {
    const [taskDescription, setTaskDescription] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [isStopping, setIsStopping] = useState(false);



    const handleRunAgent = async () => {
        const payload = {
            taskDescription,
            additionalInfo,
        };
        try {     
            setIsRunning(true);
            const response = await fetch("/api/run-agent", {
                method: "POST",
                headers: {

                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Response from server:", data);
        } catch (error) {
            console.error("Error:", error);
        }
        setIsRunning(false);


    };
    const stopAgent = () => {
        setIsStopping(true);
        // handle the stoping agent logic here
        console.log("Stopping agent...");
        setIsStopping(false);

    };

    return (
        <>

            <div className="min-h-screen bg-background text-white">
                <Header />
                <div className="mb-14"></div>
                {/* Header */}
                <header className="border-b bg-black p-6">
                    <div className="container flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Globe className="h-6 w-6 text-primary" />
                            <h1 className="text-xl font-bold">
                                Intelli Agents
                            </h1>
                        </div>
                        <p className="text-sm text-gray-400">
                            Automate your workflows with AI
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container py-6">
                    <Tabs defaultValue="agent" className="space-y-6">
                        <TabsList className="flex justify-center space-x-4 bg-transparent">
                            <TabsTrigger
                                value="agent"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <Settings className="h-4 w-4" />
                                Agent Settings
                            </TabsTrigger>
                            <TabsTrigger
                                value="llm"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <Wrench className="h-4 w-4" />
                                LLM Configuration
                            </TabsTrigger>
                            <TabsTrigger
                                value="browser"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <Globe className="h-4 w-4" />
                                Browser Settings
                            </TabsTrigger>
                            <TabsTrigger
                                value="run"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <PlayCircle className="h-4 w-4" />
                                Run Agent
                            </TabsTrigger>
                            {/* <TabsTrigger
                                value="config"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <FolderOpen className="h-4 w-4" />
                                Configuration
                            </TabsTrigger> */}
                            {/* <TabsTrigger
                                value="results"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <BarChart2 className="h-4 w-4" />
                                Results
                            </TabsTrigger> */}
                           {/* <TabsTrigger
                                value="recordings"
                                className="flex items-center gap-2 text-white data-[state=active]:text-primary"
                            >
                                <Video className="h-4 w-4" />
                                Recordings
                            </TabsTrigger>  */}
                        </TabsList>

                        {/* Agent Settings Tab */}
                        <TabsContent
                            value="agent"
                            className="space-y-4 w-[80%] mx-auto"
                        >
                            <Card className="bg-gray-900/50 border-gray-800">
                                <CardContent className="space-y-6 p-6">
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            Agent Type
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            Select the type of agent to use
                                        </p>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                className="bg-gray-800"
                                            >
                                                org
                                            </Button>
                                            <Button className="bg-primary text-primary-foreground">
                                                custom
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-sm font-medium">
                                                    Max Run Steps
                                                </h3>
                                                <p className="text-xs text-gray-400">
                                                    Maximum number of steps the
                                                    agent will take
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">
                                                    100
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                >
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                        <Slider
                                            defaultValue={[100]}
                                            max={200}
                                            step={1}
                                            className="[&_[role=slider]]:bg-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-sm font-medium">
                                                    Max Actions per Step
                                                </h3>
                                                <p className="text-xs text-gray-400">
                                                    Maximum number of actions
                                                    the agent will take per step
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">
                                                    10
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                >
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                        <Slider
                                            defaultValue={[10]}
                                            max={20}
                                            step={1}
                                            className="[&_[role=slider]]:bg-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            Enable visual processing
                                            capabilities
                                        </h3>
                                        <div className="flex items-center space-x-2">
                                            <Switch
                                                id="use-vision"
                                                className="bg-primary"
                                            />
                                            <label
                                                htmlFor="use-vision"
                                                className="text-sm font-medium"
                                            >
                                                Use Vision
                                            </label>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* LLM Configuration Tab */}
                        <TabsContent
                            value="llm"
                            className="space-y-4 w-[80%] mx-auto"
                        >
                            <Card className="bg-gray-900/50 border-gray-800">
                                <CardContent className="space-y-6 p-6">
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            LLM Provider
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            Select your preferred language model
                                            provider
                                        </p>
                                        <Select defaultValue="openai">
                                            <SelectTrigger className="w-full bg-gray-800">
                                                <SelectValue placeholder="Select provider" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="openai">
                                                    openai
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            Model Name
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            Select a model from the dropdown or
                                            type a custom model name
                                        </p>
                                        <Select defaultValue="gpt-4o">
                                            <SelectTrigger className="w-full bg-gray-800">
                                                <SelectValue placeholder="Select model" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="gpt-4o">
                                                    gpt-4o
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-sm font-medium">
                                                    Temperature
                                                </h3>
                                                <p className="text-xs text-gray-400">
                                                    Controls randomness in model
                                                    outputs
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">
                                                    1
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-6 w-6"
                                                >
                                                    <svg
                                                        className="h-4 w-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </div>
                                        <Slider
                                            defaultValue={[1]}
                                            max={2}
                                            step={0.1}
                                            className="[&_[role=slider]]:bg-primary"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium">
                                                Base URL
                                            </h3>
                                            <p className="text-xs text-gray-400">
                                                API endpoint URL (if required)
                                            </p>
                                            <Input className="bg-gray-800 border-gray-700" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-sm font-medium">
                                                API Key
                                            </h3>
                                            <p className="text-xs text-gray-400">
                                                Your API key (leave blank to use
                                                .env)
                                            </p>
                                            <Input
                                                type="password"
                                                className="bg-gray-800 border-gray-700"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Run Agent Tab */}
                        <TabsContent
                            value="run"
                            className="space-y-4 w-[80%] mx-auto"
                        >
                            <Card className="bg-gray-900/50 border-gray-800">
                                <CardContent className="space-y-6 p-6">
                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            Task Description
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            Describe what you want the agent to
                                            do
                                        </p>
                                        <Textarea
                                            placeholder="Enter your task here..."
                                            className="min-h-[100px] bg-gray-800 border-gray-700"
                                            value={taskDescription}
                                            onChange={(e) =>
                                                setTaskDescription(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            Additional Information
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            Optional hints to help the LLM
                                            complete the task
                                        </p>
                                        <Textarea
                                            placeholder="Add any helpful context or instructions..."
                                            className="min-h-[100px] bg-gray-800 border-gray-700"
                                            value={additionalInfo}
                                            onChange={(e) =>
                                                setAdditionalInfo(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <Button
                                            className="flex-1 bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90"
                                            onClick={handleRunAgent}
                                        >
                                            <PlayCircle className="mr-2 h-4 w-4" />
                                            Run Agent
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="flex-1 border-gray-700 hover:bg-gray-800"
                                            onClick={stopAgent}
                                        >
                                            Stop
                                        </Button>

                                    </div>
                                    {isRunning && (
                                        <div className="text-lg font-medium">
                                            Waiting for browser session... task incomplete
                                        </div>
                                    )}
                                    {isStopping && (
                                        <div className="text-lg font-medium">
                                            Stopping agent...
                                        </div>
                                    )}
                                </CardContent>
                            </Card>


                        </TabsContent>

                        {/* Configuration Tab */}
                        <TabsContent
                            value="config"
                            className="space-y-4 w-[80%] mx-auto"
                        >
                            <Card className="bg-gray-900/50 border-gray-800">
                                <CardContent className="space-y-6 p-6">
                                    <div className="flex items-center gap-2">
                                        <Upload className="h-4 w-4" />
                                        <span className="text-sm font-medium">
                                            Load Config File
                                        </span>
                                    </div>

                                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload className="h-12 w-12 text-gray-400" />
                                            <p className="text-lg font-medium">
                                                Drop File Here
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                - or -
                                            </p>
                                            <p className="text-lg font-medium">
                                                Click to Upload
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90">
                                            Load Existing Config From File
                                        </Button>
                                        <Button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90">
                                            Save Current Config
                                        </Button>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-sm font-medium">
                                            Status
                                        </h3>
                                        <div className="h-24 bg-gray-800 rounded-md"></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}

