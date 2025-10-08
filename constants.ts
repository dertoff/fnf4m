import type { Game } from './types.ts';

// Fix: The chained `.sort()` caused a type inference issue. By declaring the
// array first with the `Game[]` type, we ensure the `platforms` property
// is correctly validated before sorting the array in place.
export const gamesData: Game[] = [
    {
        name: "Forza Horizon 5",
        image: "https://avatars.mds.yandex.net/i?id=5185e77357f0962e9a5a9e3ec0d49a2e6a96faac-12522553-images-thumbs&n=13",
        description: "Unlock the ultimate driving experience in Forza Horizon 5 with community-made mods. Add custom cars, unlock new maps, and tweak performance to create your personalized racing paradise in the vibrant landscapes of Mexico.",
        size: "1.2 GB",
        downloads: "800K",
        reviews: "45K",
        platforms: ['windows', 'xbox']
    },
    {
        name: "VS Whitty",
        image: "https://i1.sndcdn.com/artworks-TNcPPxNf1MZEPuX0-dGJl0Q-t500x500.jpg",
        description: "Face off against Whitty, the short-fused rockstar with a ballistic temper. This iconic mod features intense, fast-paced tracks that will test your rhythm to its absolute limit. Can you keep your cool before he blows up?",
        size: "95 MB",
        downloads: "3M",
        reviews: "89.2K",
        platforms: ['android', 'apple']
    }
];

gamesData.sort((a, b) => a.name.localeCompare(b.name));
