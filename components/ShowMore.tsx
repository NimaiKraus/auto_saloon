'use client';

import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

export interface ShowMoreProps {
    pageNumber: number,
    areThereMoreItems2Show: boolean
}

const ShowMore = ({ areThereMoreItems2Show, pageNumber }: ShowMoreProps) => {
    const router = useRouter();

    const updateSearchParams = (newLimit2Set: number) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        searchParams.set('limit', `${newLimit2Set}`);

        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    };

    return (
        <div className="w-full flex-center mt-10">
            {areThereMoreItems2Show && (
                <CustomButton
                    title="Show more"
                    className="rounded-full bg-primary-blue text-white"
                    type="button"
                    onButtonClick={() => updateSearchParams((pageNumber + 1) * 10)}
                />
            )}
        </div>
    )
}

export default ShowMore