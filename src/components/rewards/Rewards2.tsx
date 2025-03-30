import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PrizeProps {
    place: number;
    title: string;
    description: string;
    prize: string;
    // imageUrl?: string
}

const Prize = ({ place, title, description, prize }: PrizeProps) => {
    const icons = {
        1: <Trophy className="h-10 w-10 text-yellow-500" />,
        2: <Award className="h-10 w-10 text-gray-400" />,
        3: <Medal className="h-10 w-10 text-amber-700" />,
    };

    const placeSuffix = place === 1 ? "st" : place === 2 ? "nd" : "rd";
    const placeColors = {
        1: "border-yellow-500 shadow-lg shadow-yellow-100",
        2: "border-gray-400 shadow-md shadow-gray-100",
        3: "border-amber-700 shadow-sm shadow-amber-100",
    };

    return (
        <Card className={cn("transition-all hover:scale-105", placeColors[place as keyof typeof placeColors])}>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {icons[place as keyof typeof icons]}
                        <CardTitle>{title}</CardTitle>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {place}
                        <sup>{placeSuffix}</sup> Place
                    </span>
                </div>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-primary">{prize}</div>
            </CardContent>
        </Card>
    );
};

export default function RewardsSection() {
    const prizes = [
        {
            place: 1,
            title: "Grand Prize",
            description: "Awarded to the top performer with the highest score",
            prize: "Worth Rs.5,000",
            // imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
            place: 2,
            title: "Silver Award",
            description: "Awarded to the runner-up with exceptional performance",
            prize: "Worth Rs.3,000",
            // imageUrl: "/placeholder.svg?height=200&width=300",
        },
        {
            place: 3,
            title: "Bronze Award",
            description: "Awarded to the third place finisher",
            prize: "Worth Rs.2,000",
            // imageUrl: "/placeholder.svg?height=200&width=300",
        },
    ];

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="mb-10 text-center">
                    <div className="faq-header">
                        <h1>Rewards</h1>
                        <p>Code X Caliber</p>
                    </div>
                    <p className="mt-4 text-lg text-muted-foreground">Recognizing excellence with prestigious awards and valuable prizes</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                    {/* Order is important for mobile view (1st, 2nd, 3rd) but different for desktop */}
                    <div className="order-2 md:order-1 md:mt-8">
                        <Prize {...prizes[1]} />
                    </div>
                    <div className="order-1 md:order-2 md:-mt-4">
                        <Prize {...prizes[0]} />
                    </div>
                    <div className="order-3 md:order-3 md:mt-12">
                        <Prize {...prizes[2]} />
                    </div>
                </div>
            </div>
        </section>
    );
}
