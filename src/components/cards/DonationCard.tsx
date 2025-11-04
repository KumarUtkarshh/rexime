"use client";

import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";
import SpotlightCard from "./SpotlightCard";

export default function DonationCard() {
  return (
    <SpotlightCard>
      <div>
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <FaHeart className="animate-pulse text-pink-400" />
            Support the dev
          </CardTitle>
          <CardDescription>
            <p className="mb-3">
              Hey there, I built this <strong>Resume Builder</strong> all by
              myself with a lot of love and late nights.
            </p>

            <p>
              If it helped you land a job or create your perfect resume,
              consider donating Every bit of support keeps this project alive
              and growing!
            </p>
          </CardDescription>
        </CardHeader>

        <div className="mt-2 flex justify-between">
          <Button size="lg" className="w-full">
            <Link href={"/donation"} target="_blank">
              Donate the Project
            </Link>
          </Button>
        </div>
      </div>
    </SpotlightCard>
  );
}
