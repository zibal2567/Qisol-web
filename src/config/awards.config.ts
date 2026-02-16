
export interface Award {
    id: string;
    image: string;
    year: string;
    translationKey: string;
}

export const awardsConfig: Award[] = [
    {
        id: "award-1",
        image: "/Reward/EMC-GLOBAL-SUMMIT-2026.png",
        year: "2026",
        translationKey: "01"
    },
    {
        id: "award-2",
        image: "/Reward/IPITEX-2026.webp",
        year: "2026",
        translationKey: "02"
    },
    {
        id: "award-3",
        image: "/Reward/ELP-2025.jpg",
        year: "2025",
        translationKey: "03"
    }
];
