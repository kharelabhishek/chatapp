
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
    return (
        <div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <Label htmlFor="fullname">Accept terms and conditions</Label>
                        <div className="mt-2">
                            <Input type="fullname" placeholder="Fullname" required />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Accept terms and conditions</Label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-primary hover:text-foreground">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Input type="password" placeholder="password" autoComplete="current-password" required />
                        </div>
                    </div>

                    <div>
                        <Button className="flex w-full justify-center rounded-mdpx-3 py-1.5 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" type="submit">Sign in</Button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm secondary-foreground">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-primary hover:text-foreground">
                        Start a 14 day free trial
                    </a>
                </p>
            </div>

        </div>
    );
}
