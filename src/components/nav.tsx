"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./changeTheme";

export default function Nav() {
    return <div>
        <ModeToggle />
        <Button> hello</Button>
    </div>;
}
