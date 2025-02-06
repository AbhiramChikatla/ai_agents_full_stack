"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import { ClerkLoading, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
export function Header() {
    const { user, isLoaded } = useUser();
    return (
        <header className="fixed top-0 w-full z-50 border-b bg-black/50 backdrop-blur-xl border-gray-800">
            <div className="container flex h-16 items-center justify-center mx-auto px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-6 w-6 bg-lime-400 rounded"></div>
                        <span className="font-bold">Intelli Agents</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="/docs"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            Docs
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/workflow"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            Try Workflow
                        </Link>
                        <Link
                            href="/changelog"
                            className="text-sm text-gray-400 hover:text-white"
                        >
                            Changelog
                            <span className="ml-1 rounded-full bg-gray-800 px-2 py-0.5 text-xs text-white">
                                New
                            </span>
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <Link
                        href="https://github.com/AbhiramChikatla"
                        className="hidden md:flex"
                    >
                        <Button variant="ghost" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                    </Link>
                    {
                        <ClerkLoading>
                            <Skeleton className="w-[100px] h-[20px] rounded-full" />
                        </ClerkLoading>
                    }
                    {!user && isLoaded ? (
                        <>
                            <SignInButton>
                                <Button
                                    size="sm"
                                    className="bg-white text-black hover:bg-gray-200"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button
                                    size="sm"
                                    className="bg-white text-black hover:bg-gray-200"
                                >
                                    Sign Up
                                </Button>
                            </SignUpButton>
                        </>
                    ) : (
                        <UserButton />
                    )}
                </div>
            </div>
        </header>
    );
}
